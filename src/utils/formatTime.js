const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  /* Agrego leading zeros */
  minutes = String(minutes).padStart(2, '0')
  seconds = String(seconds).padStart(2, '0')

  return { minutes, seconds};
}

export { formatTime };