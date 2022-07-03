import { useContext } from "react";
import { todosContext } from "../../App";
import TodoItem from "./todo-item";


const TodoList = () => {
    const [todosState] = useContext(todosContext)
    return (
      <>
        {todosState.map((el, index) => {
          return <TodoItem key={index} name={el.name} id={el.id} />;
        })}
      </>
    );

}

export default TodoList