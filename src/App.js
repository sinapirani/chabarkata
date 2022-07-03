import { createContext, useContext, useState } from "react"
import TodoItem from './components/todo-util/todo-item'
import Header from "./components/header"
import AddTodo from "./components/addTodo-util/addTodo";

export const todosContext = createContext(null)
const initialContext = [
  { id: 1, name: "study", completed: false },
  { id: 2, name: 'work', completed: false}
];

const App = () => {

  const [todosState, setTodosState] = useState(initialContext)

  return (
    <todosContext.Provider value={[todosState,setTodosState]}>
      <div class=" relative h-screen w-100 flex justify-start items-center flex-col pt-48 bg-[#f2eff8]">
        <Header />
        {
          todosState.map((el,index) => {
            return(
              <TodoItem key={index} name={el.name} id={el.id} />
            )
          })
        }

        <AddTodo/>
        
      </div>
    </todosContext.Provider>
  );
}


export default App
