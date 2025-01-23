import "./Card2.css";
const Card2 = (props) => {
  return (
    <div className="card2MainDiv">
      <div className="description">
        <p>{props.description}</p>
      </div>
      <div className="data">
        <img src={props.imgSrc} alt="img" />
        <h5>{props.title}</h5>
      </div>
    </div>
  );
};

export default Card2;
