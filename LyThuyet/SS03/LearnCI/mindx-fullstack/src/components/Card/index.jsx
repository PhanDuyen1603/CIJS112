import "./styles.css";
const Card = (props) => {
    console.log("props", props);
    return (
        <div className="card">
        <div className="name">{props.schoolName}</div>
        <div className="age">{props.age}</div>
        </div>
    )
}

export default Card;

