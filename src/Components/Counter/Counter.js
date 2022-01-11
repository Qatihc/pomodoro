import React from 'react'
import { formatTime } from '../../utils'
import { ArrowUpButton, ArrowDownButton } from '../ArrowButton'

import styles from './Counter.module.css'


const Counter = ({ name, setCounter, counter }) => {
  const { minutes, seconds } = formatTime(counter);

  const changeAmount = 60
  const incrementCounter = () => {
    setCounter((c) => c + changeAmount);
  }

  const decrementCounter = () => {
    if (counter - changeAmount <= 0) return;
    setCounter((c) => c - changeAmount);
  }

  return (
    <>
      <h2>{name}</h2>
      <div>
        <ArrowUpButton onClick={incrementCounter}></ArrowUpButton>
        <span>{minutes}{seconds}</span>
        <ArrowDownButton onClick={decrementCounter}></ArrowDownButton>
      </div>
    </>
  )
}

export default Counter;