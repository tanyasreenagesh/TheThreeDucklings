import { Link } from "react-router";
import "./Duck.css";

const menus = [
  { item: "Team" },
  { item: "Proposal" },
  { item: "Status" },
  { item: "Final" },
  { item: "Meeting Details" },
];

const DuckHeader = () => {
  const teamName = "THE THREE DUCKLINGS";

  return (
    <div className="DuckHeader">
      <h1 className="TeamName">{teamName}</h1>
      <div className="MainMenu">
        {menus.map((menu) => (
          <a className="MenuItem" href="" key={menu.item}>
            {menu.item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DuckHeader;
