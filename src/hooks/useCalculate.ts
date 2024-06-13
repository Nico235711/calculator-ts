import { useState } from "react";

export const useCalculate = () => {

  const [display, setDisplay] = useState('');

  const addToDisplay = (value: string) => {
    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay('Error');
    }
  };

  return {
    display,
    addToDisplay,
    clearDisplay,
    calculate
  }
}