import React from "react";
import { Timer } from "../Timer";

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.pomodoroTitle}>Pomodoro</h1>
      <Timer />
    </div>
  )
}

export default App;