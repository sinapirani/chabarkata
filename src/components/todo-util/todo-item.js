

const TodoItem = ({id,name,compeleted}) => {
    return(
        <div className=" mb-3 px-6 flex justify-center items-center w-[80%] h-14 bg-purple-500 rounded-md" >
            <h3 className=" font-bold text-xl text-white">{name}</h3>
            <img className="ml-auto" src="delete.svg" height={30} width={30} alt="delete todo" />
        </div>
    )
}

export default TodoItem