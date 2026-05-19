import "./styles.css";
function Hello() {
    const school = "MindX";
    const age = 20;
    const listName = ["John", "Jane", "Jim", "Jill"];
    return (
        <div className="titleHello">
            <h1>Bạn là người {age>= 20 ? "trưởng thành" : "trẻ con"}</h1>
            <p>Hello everyone! welcome to {school}</p>
            {listName}
        </div>
    )
}

export default Hello;