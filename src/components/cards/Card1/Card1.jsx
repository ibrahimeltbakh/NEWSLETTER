import "./card1.css";
const Card1 = (props) => {
  return (
    <div className="card1MainDiv">
      <img src={props.imgSrc} alt="me" />
      <div className="data">
        <h4>{props.title}</h4>
        <div className="time">
          <span>{props.author}</span>
          <span>{props.date}</span>
        </div>
      </div>
    </div>
  );
};

export default Card1;
