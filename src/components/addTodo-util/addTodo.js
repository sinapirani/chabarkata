import { useContext } from "react";
import { formContext } from "../../App";



const AddTodo = () => {
  const [isVisible, setVisible] = useContext(formContext)

  const plusClicked = () => {
    setTimeout(() => {
      setVisible(!isVisible);      
    }, 500);
  }

    return (
      <div className="absolute bottom-7 drop-shadow-2xl shadow-purple-500] active:scale-50 transition-[1s]">
        <img onClick={plusClicked} src="plus.svg" height={80} width={80} alt="add todo" />
      </div>
    );
}

export default AddTodo