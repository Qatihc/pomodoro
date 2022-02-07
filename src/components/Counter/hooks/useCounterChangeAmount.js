import { useState, useEffect } from 'react';

const useCounterChangeAmount = (initialChangeAmount) => {
  const [changeAmount, setChangeAmount] = useState(initialChangeAmount);
  const [shiftKeyDown, setShiftKeyDown] = useState(false);

  const multiplyChangeAmountBy = (multiplyBy) => {
    setChangeAmount(changeAmount * multiplyBy);
  }

  useEffect(() => {
    const handleKeyDown = ({ key }) => {
      if (key !== 'Shift' || shiftKeyDown) return;
      setShiftKeyDown(true);
      multiplyChangeAmountBy(5);
    }
    const handleKeyUp = ({ key }) => {
      if (key !== 'Shift' || !shiftKeyDown) return;
      setShiftKeyDown(false);
      multiplyChangeAmountBy(1/5);
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    }
  })

  return changeAmount;
} 

export default useCounterChangeAmount;