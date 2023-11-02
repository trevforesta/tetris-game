import "./Menu.css";
const Menu = ({ onClick }) => (
  <div className="Menu">
    <div className="Logo">
      <img
        src="https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/07b4498a303789d2829445c725dae35a.png"
        alt="Tetris Logo"
      ></img>
    </div>
    <button className="Button" onClick={onClick}>
      Play
    </button>
  </div>
);

export default Menu;
