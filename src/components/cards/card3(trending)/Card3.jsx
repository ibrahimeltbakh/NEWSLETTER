import "./card3.css";
const Card3 = (props) => {
  return (
    <div className="card3MainDiv">
      <img src={props.imgSrc} alt="img" />
      <div className="data">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <div className="time">
          <span>{props.author}</span>
          <span>{props.date}</span>
        </div>
      </div>
    </div>
  );
};

export default Card3;
