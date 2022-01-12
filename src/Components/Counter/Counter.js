import React from 'react'
import { formatTime } from '../../utils'
import { ArrowUpButton, ArrowDownButton } from '../ArrowButton'
import useCounterChangeAmount from './hooks/useCounterChangeAmount'

import styles from './Counter.module.css'


const Counter = ({ name, setCounter, counter, loopAround }) => {
  const { minutes, seconds } = formatTime(counter);

  const minCount = 60 * 1;
  const maxCount = 60 * 59;
  const changeAmount = useCounterChangeAmount(60 * 1)

  const incrementCounter = () => {
    if (counter + changeAmount > maxCount) {
      if (loopAround) return setCounter((c) => minCount)
      return;
    } 
    setCounter((c) => c + changeAmount);
  }

  const decrementCounter = () => {
    if (counter - changeAmount < minCount) {
      if (loopAround) return setCounter((c) => maxCount);
      return;
    } 
    setCounter((c) => c - changeAmount);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.counterName}>{name}</h2>
      <div className={styles.cont}>
        <ArrowUpButton onClick={incrementCounter}></ArrowUpButton>
        <div className={styles.counterNumber}>{minutes}</div>
        <ArrowDownButton onClick={decrementCounter}></ArrowDownButton>
      </div>
    </div>
  )
}

export default Counter;