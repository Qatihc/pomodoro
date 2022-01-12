import React from 'react'
import styles from './ArrowButton.module.css'
import arrow from '~/assets/arrowx2.png'

const ArrowButton = ({ className, onClick }) => {
  return (
    <button className={`${className} ${styles.arrowButton}`} onClick={onClick}><i className={`fas fa-arrow-up ${styles.arrowIcon}`}></i></button>
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

