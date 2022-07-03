import { useContext, useEffect, useRef, useState, } from "react";
import { formContext, todosContext } from "../../App";


const AddTodoForm = () => {

    // const [id] = useState(Math.floor(Math.random() * 99999999));
    const [todos,setTodos] = useContext(todosContext)
    const inputRef = useRef(null)
    const [isVisible, setVisible] = useContext(formContext)
    const [isError, setError] = useState(false)

    useEffect(()=>{
      // eslint-disable-next-line no-unused-expressions
      isVisible && inputRef.current ? inputRef.current.focus() : ''
      setError(false)
    },[isVisible,inputRef])


    const addTodo = () =>{
      if(inputRef.current.value === '') {
        setError(true)
        return 0;
      }
      setError(false)
      setTodos([...todos, {id: Math.floor(Math.random()*99999999), name: inputRef.current.value, completed: false}])
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
        <div onClick={formClicked} className=" flex justify-center items-center flex-col w-[80%] lg:w-[40%] py-16 rounded-2xl  bg-purple-500 z-[60]">
          <h3 className=" text-white text-5xl font-bold mb-5">Add Todo</h3>
          <div className=" flex justify-center items-center w-[80%] rounded-xl relative bg-white px-2">
            <input ref={inputRef} className=" pl-4 h-12 text-صxl w-full rounded-tl-xl rounded-bl-xl outline-none" type="text" />
            <img onClick={addTodo} src="plus.svg"alt="" />
          </div>
          <p className={`${isError ? 'block' : 'hidden'} text-red-300`}>input is empty!</p>
        </div>
      </div>
    );
}

export default AddTodoForm