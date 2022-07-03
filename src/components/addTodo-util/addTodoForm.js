import { useContext, useEffect, useRef, useState } from "react";
import { formContext, todosContext } from "../../App";



const AddTodoForm = () => {

    const [id] = useState(Math.floor(Math.random() * 99999999));
    const [todos,setTodos] = useContext(todosContext)
    const inputRef = useRef(null)
    const [isVisible, setVisible] = useContext(formContext)

    useEffect(()=>{
      // eslint-disable-next-line no-unused-expressions
      isVisible && inputRef.current ? inputRef.current.focus() : ''
    },[isVisible,inputRef])

    const addTodo = () =>{
      setTodos([...todos, {id: id, name: inputRef.current.value, completed: false}])
      setVisible(false)
      inputRef.current.value = ''
    }

    const bodyClicked = (e) =>{
      setVisible(false)
    }

    const formClicked = (e) => {
      e.stopPropagation();
    }
    
    return ( 
      <div onClick={bodyClicked} className={` ${isVisible ? 'flex' : 'hidden'} justify-center items-center absolute h-screen w-full z-50 backdrop-blur-xl bg-[#0202027c] top-0`}>
        <div onClick={formClicked} className=" flex justify-center items-center flex-col w-[80%] py-16 rounded-2xl  bg-purple-500 z-[60]">
          <h3 className=" text-white text-5xl font-bold mb-5">Add Todo</h3>
          <div className=" flex justify-center items-center w-[80%] rounded-xl relative bg-white px-2">
            <input ref={inputRef} className=" pl-4 h-12 text-صxl w-full rounded-tl-xl rounded-bl-xl outline-none" type="text" />
            <img onClick={addTodo} src="plus.svg"alt="" />
          </div>
        </div>
      </div>
    );
}

export default AddTodoForm