function App2() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn ",
      isComplete: false,
      imgSrc: "./img/learnReact.jpg",
      altText: "React",
    },
    {
      text: "Meet with ",
      isComplete: false,
      imgSrc: "./img/meetFriends.jpg",
      altText: "friends",
    },
    {
      text: "Go ",
      isComplete: false,
      imgSrc: "./img/biking.png",
      altText: "biking",
    },
    {
      text: "Take a ",
      isComplete: false,
      imgSrc: "./img/coffee-break.jpg",
      altText: "coffee break",
    },
  ]);
  const [value, setValue] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    const newTodos = [
      ...todos,
      { text: value, iscomplete: false, imgSrc: "", altText: value },
    ];
    setTodos(newTodos);
    setValue("");
  };
  const removeTodo = (e) => {
    let index = e.target.id;
    let removeTodos = [...todos];
    removeTodos.splice(index, 1);
    setTodos(removeTodos);
  };
  return (
    <>
      {todos.map((todo, i) => (
        <div className="todo" key={i} id={i} onClick={removeTodo}>
          {todo.text}
          {todo.imgSrc !== "" ? (
            <div className="tooltip">
              <img
                className="todoImg"
                key={i}
                src={todo.imgSrc}
                alt={todo.altText}
              ></img>
              <span className="tooltiptext">{todo.altText}</span>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Add Todo..."
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </>
  );
}

ReactDOM.render(<App2 />, document.getElementById("root"));
