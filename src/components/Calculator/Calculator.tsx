import React from 'react';
import CalculatorButtons from './CalculatorButtons';

interface Props {
  calculatorDisplay: string;
  clickOnTheButton: (symbol: string) => void;
  handleEvaluate: () => void;
  clearDisplay: () => void;
}

const Calculator: React.FC<Props> = ({
  calculatorDisplay,
  clickOnTheButton,
  handleEvaluate,
  clearDisplay,
}) => {
  return (
    <div className="calculator">
      <div className="display">
        <div className="result">{calculatorDisplay}</div>
      </div>
      <div className="buttons">
        <CalculatorButtons
          clickOnTheButton={clickOnTheButton}
          handleEvaluate={handleEvaluate}
          clearDisplay={clearDisplay}
        />
      </div>
    </div>
  );
};

export default Calculator;
