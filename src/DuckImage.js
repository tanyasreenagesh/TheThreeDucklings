import "./Duck.css";
import duckPic from "./images/duck2.png";

const DuckImage = () => {
  return (
    <div className="DuckImage">
      <img src={duckPic} alt="duck" />
    </div>
  );
};

export default DuckImage;
