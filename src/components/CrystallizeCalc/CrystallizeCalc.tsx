import CalculatorRow from "./CalculatorRow";
import BossPool from "./BossPool";
import "./CrystallizeCalc.css";

const CrystallizeCalc = () => {
  return (
    <div>
      <CalculatorRow></CalculatorRow>
      <CalculatorRow></CalculatorRow>
      <button className="new_calc__button">+</button>
      <BossPool></BossPool>
    </div>
  );
};

export default CrystallizeCalc;
