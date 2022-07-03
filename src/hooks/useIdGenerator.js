import { useState } from "react"


const useIdGenerator = () => {
    const [state, setState] = useState(Math.floor(Math.random() * 999999999))
    return state
}

export default useIdGenerator