import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Counter } from '../Counter';
import { WORK, BREAK } from '../../const/timerStatus';
import { formatTime } from '../../utils';
import bell from '../../bell.mp3'

import styles from './Timer.module.css';

const Timer = () => {
  const [ breakCounter, setBreakCounter ] = useState(60 * 5);
  const [ workCounter, setWorkCounter ] = useState(60 * 25);
  const [ isPaused, setIsPaused ] = useState(true);
  const [ timerStatus, setTimerStatus ] = useState(WORK);
  const [ pomodoroTimer, setPomodoroTimer ] = useState(workCounter);

  useEffect(() => {
    setPomodoroTimer(workCounter);
    setTimerStatus(WORK);
  }, [workCounter])

  useEffect(() => {
    if (isPaused) return;

    const tick = () => {
      if (pomodoroTimer > 0) return setPomodoroTimer((timer) => timer - 1);
      const nextTimerStatus = (timerStatus === WORK) ? BREAK : WORK;
      const nextPomodoroTimer = (timerStatus === WORK) ? breakCounter : workCounter;
      bellAudio.play();
      setPomodoroTimer(nextPomodoroTimer);
      setTimerStatus(nextTimerStatus);
    }

    const tickInterval = setInterval(tick, 1000);
    return () => clearInterval(tickInterval);
  }, [isPaused, pomodoroTimer])

  const handleToggleTimer = () => {
    setIsPaused(!isPaused);
  }

  const handleRestart = () => {
    setTimerStatus(WORK);
    setPomodoroTimer(workCounter);
  }

  const bellAudio = new Audio(bell);

  const displayStatus = (isPaused) ? 'PAUSED' : timerStatus
  const { minutes, seconds } = formatTime(pomodoroTimer)
  const toggleTimerButton = (isPaused) ? <i class="fas fa-play"></i> : <i class="fas fa-pause"></i>;
  return (
    <>
      <Helmet>
        <title>{`Pomodoro | ${displayStatus} ${isPaused ? '' : minutes + ':' + seconds}`}</title>
      </Helmet>
      <div className={styles.countersContainer}>
        <Counter name={'Break length'} setCounter={setBreakCounter} counter={breakCounter} loopAround={true}/>
        <Counter name={'Session length'} setCounter={setWorkCounter} counter={workCounter} loopAround={true}/>
      </div>
      <div className={styles.timer}>
        <span className={styles.minutes}>{minutes}</span>{seconds}
      </div>
      <span className={styles.status}>{displayStatus}</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={handleToggleTimer}>{toggleTimerButton}</button>
        <button className={styles.button} onClick={handleRestart}><i class="fas fa-redo-alt"></i></button>
      </div>
    </>
  )
}

export default Timer;