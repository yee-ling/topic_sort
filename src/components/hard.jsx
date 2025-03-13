import topics from "../data";

function Hard() {
  const hardCategory = topics.filter((topic) => topic.difficulty == "hard");

  const style = (status) => {
    if (status == "completed") {
      return {
        width: 250,
        marginBottom: 10,
        color: "green",
      };
    } else if (status == "on going") {
      return {
        width: 250,
        marginBottom: 10,
        color: "yellow",
      };
    } else {
      return {
        width: 250,
        marginBottom: 10,
        color: "grey",
      };
    }
  };

  const difficultyStyle = (difficulty) => {
    if (difficulty == "easy") {
      return {
        width: 25,
        height: 25,
        marginBottom: 10,
        backgroundColor: "green",
      };
    } else if (difficulty == "medium") {
      return {
        width: 25,
        height: 25,
        marginBottom: 10,
        backgroundColor: "yellow",
      };
    } else {
      return {
        width: 25,
        height: 25,
        marginBottom: 10,
        backgroundColor: "red",
      };
    }
  };

  return (
    <>
      <div style={{ margin: "0 50px" }}>
        <h2>Hard</h2>
        <ul>
          {hardCategory.map((topic, i) => (
            <div key={i} style={{ display: "flex" }}>
              <li style={style(topic.status)}>
                <span style={{ color: "white" }}>{topic.name}</span>
              </li>
              <div style={difficultyStyle(topic.difficulty)}></div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Hard;
