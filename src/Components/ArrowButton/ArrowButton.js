import React from 'react'
import styles from './ArrowButton.module.css'
import arrow from '~/assets/arrowx2.png'

const ArrowButton = ({ className, onClick }) => {
  return (
    <button className={`${className} ${styles.arrowButton}`} onClick={onClick}><img className={styles.arrowImg} src={arrow}></img></button>
  )
}

const ArrowUpButton = ({ onClick }) => {
  return (
    <ArrowButton className={styles.arrowUp} onClick={onClick}/>
  )
}

const ArrowDownButton = ({ onClick }) => {
  return (
    <ArrowButton className={styles.arrowDown} onClick={onClick}/>
  )
}

export { ArrowUpButton, ArrowDownButton };

