import React from 'react';
import './calculator.css';

interface Props {
  clickOnTheButton: (symbol: string) => void;
  handleEvaluate: () => void;
  clearDisplay: () => void;
}

const CalculatorButtons: React.FC<Props> = ({
  clickOnTheButton,
  handleEvaluate,
  clearDisplay,
}) => {
  return (
    <div className="buttons-container">
      <div className="main-buttons">
        {'123456789'.split('').map((symbol, index) => (
          <button key={index} onClick={() => clickOnTheButton(symbol)}>
            {symbol}
          </button>
        ))}
        <button onClick={clearDisplay}>C</button>
        <button onClick={() => clickOnTheButton('0')}>0</button>
        <button onClick={handleEvaluate}>=</button>
      </div>
      <div className="operator-buttons">
        {'+-*/'.split('').map((symbol, index) => (
          <button key={index} onClick={() => clickOnTheButton(symbol)}>
            {symbol}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalculatorButtons;
