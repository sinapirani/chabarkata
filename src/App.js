import { createContext, useContext, useState } from "react"
import TodoItem from './components/todo-util/todo-item'
import Header from "./components/header"

export const todosContext = createContext(null)
const initialContext = [
  { id: 1, name: "study", completed: false },
  { id: 2, name: 'work', completed: false}
];

const App = () => {

  const [todosState, setTodosState] = useState(initialContext)

  return (
    <todosContext.Provider value={[todosState,setTodosState]}>
      <div class="h-screen w-100 flex justify-start items-center flex-col pt-48 bg-[#f2eff8]">
        <Header />
        {
          todosState.map((el,index) => {
            return(
              <TodoItem name={el.name} />
            )
          })
        }
      </div>
    </todosContext.Provider>
  );
}


export default App
