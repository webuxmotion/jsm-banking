'use client'

import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <CountUp
      duration={1}
      end={amount}
      decimal=","
      decimals={2}
      prefix="$"
    />
  )
}

export default AnimatedCounter