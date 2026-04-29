import { useEffect, useRef, useState } from 'react'

const countableNumberPattern = /\d[\d,]*(?:\.\d+)?/
const tokenizeNumberPattern = /\d[\d,]*(?:\.\d+)?/g

export function CountUpText({ value, duration = 1400 }) {
  const isCountable = hasCountableNumber(value)
  const ref = useRef(null)
  const frameRef = useRef(null)
  const [progress, setProgress] = useState(() => getInitialProgress(isCountable))
  const [hasStarted, setHasStarted] = useState(() => getInitialHasStarted(isCountable))

  useEffect(() => {
    if (!isCountable || hasStarted) {
      return undefined
    }

    const node = ref.current

    if (!node) {
      return undefined
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        setHasStarted(true)
        observer.disconnect()
      },
      {
        threshold: 0.35,
      },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [hasStarted, isCountable])

  useEffect(() => {
    if (!hasStarted || !isCountable || prefersReducedMotion()) {
      return undefined
    }

    const startedAt = performance.now()

    const tick = (now) => {
      const nextProgress = Math.min((now - startedAt) / duration, 1)
      setProgress(nextProgress)

      if (nextProgress < 1) {
        frameRef.current = window.requestAnimationFrame(tick)
      }
    }

    frameRef.current = window.requestAnimationFrame(tick)

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
    }
  }, [duration, hasStarted, isCountable, value])

  return <span ref={ref}>{renderAnimatedValue(value, progress)}</span>
}

function hasCountableNumber(value) {
  return typeof value === 'string' && countableNumberPattern.test(value)
}

function getInitialProgress(isCountable) {
  if (!isCountable) {
    return 1
  }

  return prefersReducedMotion() ? 1 : 0
}

function getInitialHasStarted(isCountable) {
  if (!isCountable) {
    return true
  }

  return prefersReducedMotion() || typeof window.IntersectionObserver !== 'function'
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function renderAnimatedValue(value, progress) {
  if (typeof value !== 'string' || progress >= 1 || !hasCountableNumber(value)) {
    return value
  }

  const tokens = tokenizeValue(value)

  return tokens
    .map((token) => {
      if (token.type === 'text') {
        return token.value
      }

      const nextValue = token.numericValue * progress
      return formatAnimatedNumber(token.raw, nextValue)
    })
    .join('')
}

function tokenizeValue(value) {
  const tokens = []
  let lastIndex = 0

  for (const match of value.matchAll(tokenizeNumberPattern)) {
    const [raw] = match
    const index = match.index ?? 0

    if (index > lastIndex) {
      tokens.push({
        type: 'text',
        value: value.slice(lastIndex, index),
      })
    }

    tokens.push({
      type: 'number',
      raw,
      numericValue: Number(raw.replaceAll(',', '')),
    })

    lastIndex = index + raw.length
  }

  if (lastIndex < value.length) {
    tokens.push({
      type: 'text',
      value: value.slice(lastIndex),
    })
  }

  return tokens
}

function formatAnimatedNumber(raw, value) {
  const decimals = raw.includes('.') ? raw.split('.')[1].length : 0
  const roundedValue =
    decimals > 0
      ? Number(value.toFixed(decimals))
      : Math.round(value)

  if (hasLeadingZero(raw)) {
    return String(Math.max(0, roundedValue)).padStart(raw.length, '0')
  }

  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(roundedValue)
}

function hasLeadingZero(raw) {
  return raw.length > 1 && raw.startsWith('0') && !raw.includes('.') && !raw.includes(',')
}
