import "./card4.css";
const Card4 = (props) => {
  return (
    <div className="card4MainDiv">
      <div className="data">
        <h4>{props.title}</h4>
        <div className="time">
          <span>{props.author}</span>
          <span>{props.date}</span>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export default Card4;
