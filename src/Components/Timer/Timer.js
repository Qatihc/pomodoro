import React, { useEffect, useState } from 'react';
import { Counter } from '../Counter';
import { WORK, BREAK } from '../../const/timerStatus';
import { formatTime } from '../../utils';
import styles from './Timer.module.css';

const Timer = () => {
  console.log('render')
  const [ breakCounter, setBreakCounter ] = useState(5 * 60);
  const [ workCounter, setWorkCounter ] = useState(5 * 1);

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

  const {minutes, seconds} = formatTime(pomodoroTimer)
  return (
    <>
      <Counter name={'Break'} setCounter={setBreakCounter} counter={breakCounter}/>
      <Counter name={'Work'} setCounter={setWorkCounter} counter={workCounter}/>
      <button onClick={handleToggleTimer}> play</button>
      <button onClick={handleRestart}> restar</button>
      {`${minutes}:${seconds}`}
      {timerStatus}
    </>
  )
}

export default Timer;