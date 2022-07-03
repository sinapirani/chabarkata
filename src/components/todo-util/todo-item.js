import { useContext } from "react"
import {todosContext} from '../../App'


const TodoItem = ({id,name,compeleted}) => {
    const [todosState, setTodosState] = useContext(todosContext)
    const deleteItem = () => {
        setTodosState(todosState.filter(el => el.id != id))
    }
    return(
        <div className=" mb-3 px-6 flex justify-center items-center w-[80%] h-14 bg-purple-500 rounded-md" >
            <h3 className=" font-bold text-xl text-white">{name}</h3>
            <img onClick={deleteItem} className="ml-auto" src="delete.svg" height={30} width={30} alt="delete todo" />
        </div>
    )
}

export default TodoItem