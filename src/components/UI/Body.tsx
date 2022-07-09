import Info from "./Info";
import './Body.css';
import CrystallizeCalc from "../CrystallizeCalc/CrystallizeCalc";

const Body = () => {
  return (
    <div className="body">
      <Info></Info>
      <CrystallizeCalc></CrystallizeCalc>
    </div>
  );
};

export default Body;
