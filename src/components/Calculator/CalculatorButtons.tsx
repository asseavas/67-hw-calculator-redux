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
        {'123456789'.split('').map((symbol) => (
          <button key={symbol} onClick={() => clickOnTheButton(symbol)}>
            {symbol}
          </button>
        ))}
        <button className="clear" onClick={clearDisplay}>
          C
        </button>
        <button onClick={() => clickOnTheButton('0')}>0</button>
        <button onClick={handleEvaluate}>=</button>
      </div>
      <div className="operator-buttons">
        <button className="operator add" onClick={() => clickOnTheButton('+')}>
          +
        </button>
        <button
          className="operator subtract"
          onClick={() => clickOnTheButton('-')}
        >
          -
        </button>
        <button
          className="operator multiply"
          onClick={() => clickOnTheButton('*')}
        >
          *
        </button>
        <button
          className="operator divide"
          onClick={() => clickOnTheButton('/')}
        >
          /
        </button>
      </div>
    </div>
  );
};

export default CalculatorButtons;
