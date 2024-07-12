import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { appendSymbol, clear, evaluate } from './calculatorSlice';
import './calculator.css';

const Calculator = () => {
  const { display } = useSelector((state: RootState) => state.calculator);
  const dispatch = useDispatch();

  const clickOnTheButton = (symbol: string) => {
    dispatch(appendSymbol(symbol));
  };

  const clearDisplay = () => {
    dispatch(clear());
  };

  const handleEvaluate = () => {
    dispatch(evaluate());
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="result">{display}</div>
      </div>
      <div className="buttons">
        {'1234567890+-*/.'.split('').map((symbol, index) => (
          <button key={index} onClick={() => clickOnTheButton(symbol)}>
            {symbol}
          </button>
        ))}
        <button onClick={handleEvaluate}>=</button>
        <button onClick={clearDisplay}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
