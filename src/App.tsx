import React from "react";
import "./App.css";
import TodoItem from "./constants/TodoItem";

function App() {
  const [todoItem, setTodoItem] = React.useState<Array<TodoItem>>([]);
  const [item, setItem] = React.useState<TodoItem>({
    tarefa: "",
    description: "",
    isUrgency: false,
  });
  const [id, setId] = React.useState<number>(0);

  const onSubmit = () => {
    if (!item.tarefa || !item.description) {
      alert("Digite uma tarefa e/ou descrição válida");
      return;
    }

    setTodoItem([...todoItem, item]);
  };

  const renderList = () => {
    return (
      <ul>
        {todoItem.map((item) => {
          return <li>{item.tarefa}</li>;
        })}
      </ul>
    );
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#00b894",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "#fdcb6e", margin: 0 }}>Lista de tarefas</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label style={{ color: "#fdcb6e", fontSize: "1.3rem" }}>Tarefa</label>
        <input
          onChange={(event) => {
            const tarefa: string = event.target.value;
            setItem({ ...item, tarefa });
          }}
          style={{
            outline: 0,
            color: "#fdcb6e",
            fontSize: "1.2rem",
            padding: "0.5rem",
            borderRadius: "0.2rem",
            backgroundColor: "#f1f2f6",
            border: "none",
            display: "block",
            borderBottom: "0.3rem solid transparent",
            transition: "all 0.3s",
            marginBottom: 8,
          }}
          type="text"
        />
        <label style={{ color: "#fdcb6e", fontSize: "1.3rem" }}>
          Descrição
        </label>
        <textarea
          onChange={(event) => {
            const description: string = event.target.value;
            setItem({ ...item, description });
          }}
          name="description"
          style={{
            outline: 0,
            resize: "none",
            color: "#fdcb6e",
            fontSize: "1.2rem",
            paddingTop: "0.4rem",
            paddingLeft: "0.2rem",
            paddingBottom: "2rem",
            borderRadius: "0.2rem",
            backgroundColor: "#f1f2f6",
            border: "none",
            display: "block",
            borderBottom: "0.3rem solid transparent",
            transition: "all 0.3s",
            marginBottom: 8,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <label style={{ color: "#fdcb6e", fontSize: "1.3rem" }}>
            Urgente
          </label>
          <input
            onChange={(event) => {
              const isUrgency: boolean = event.target.checked;
              setItem({ ...item, isUrgency });
            }}
            name="isUrgency"
            type="checkbox"
            style={{
              height: "15px",
              width: "15px",
            }}
          />
        </div>
        <button
          onClick={onSubmit}
          type="button"
          style={{
            marginLeft: "auto",
            width: "40%",
            height: "20%",
            boxShadow:
              "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
            cursor: "pointer",
            outline: 0,
            borderRadius: 8,
            border: "none",
            color: "#f1f2f6",
            fontSize: "0.8rem",
            backgroundColor: "#fdcb6e",
          }}
        >
          ADICIONAR
        </button>
      </div>
      {!!todoItem.length && renderList()}
    </div>
  );
}

export default App;
