import { createContext, useContext, useState } from "react"
import TodoItem from './components/todo-util/todo-item'
import Header from "./components/header"
import AddTodo from "./components/addTodo-util/addTodo";
import AddTodoForm from "./components/addTodo-util/addTodoForm";

export const todosContext = createContext(null)
export const formContext = createContext(null)
const initialContext = [
  { id: 1, name: "study", completed: false },
  { id: 2, name: 'work', completed: false}
];

const App = () => {

  const [todosState, setTodosState] = useState(initialContext)
  const [isVisible, setVisible] = useState(false)

  return (
    <todosContext.Provider value={[todosState, setTodosState]}>
      <formContext.Provider value={[isVisible, setVisible]}>
        <div className=" relative h-screen w-100 flex justify-start items-center flex-col pt-48 bg-[#f2eff8]">
          <Header />
          {todosState.map((el, index) => {
            return <TodoItem key={index} name={el.name} id={el.id} />;
          })}

          <AddTodo />
          <AddTodoForm />
        </div>
      </formContext.Provider>
    </todosContext.Provider>
  );
}


export default App
