import "../Styles/Home.css";
function Title(props) {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-5">
      <h2 style={{ fontSize: "2rem", color: "#fff" }}>{props.name}</h2>
    </div>
  );
}

export default Title;
