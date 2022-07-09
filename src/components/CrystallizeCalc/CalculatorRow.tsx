import Boss from "./Boss";
import "./CalculatorRow.css";

const CalculatorRow = () => {
  return (
    <div className="calc_row">
      <Boss></Boss>
      <Boss></Boss>
      <Boss></Boss>
      <Boss></Boss>
      <div className="calc_row__data_area">
        <span className="calc_row__data">
          🔮결정석:
          <span className="inserted_crystal">17</span>
          <span className="maximum_crystal">/ 180</span>
        </span>
        <span className="calc_row__data">💵메소: 1293123104M</span>
      </div>
      <div className="calc_row__button_area">
        <button className="calc_row__reset">reset</button>
        <button className="calc_row__delete">delete</button>
      </div>
    </div>
  );
};

export default CalculatorRow;
