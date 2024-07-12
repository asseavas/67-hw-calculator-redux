import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { appendSymbol, clear, evaluate } from './calculatorSlice';
import Calculator from '../components/Calculator/Calculator';

const CalculatorContainer = () => {
  const calculatorDisplay = useSelector(
    (state: RootState) => state.calculator.display,
  );
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
    <Calculator
      calculatorDisplay={calculatorDisplay}
      clickOnTheButton={clickOnTheButton}
      handleEvaluate={handleEvaluate}
      clearDisplay={clearDisplay}
    />
  );
};

export default CalculatorContainer;
