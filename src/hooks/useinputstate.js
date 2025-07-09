import { useState } from "react"

const UseinputState = (defaultValue=null) =>{
    const [value, setvalue] = useState(defaultValue)

    const handelChange = e =>{
        setvalue(e.target.value)
    }

    // return [
    //     value, handelChange
    // ]
    return  {
        value, 
        onChange : handelChange
    }
}
export default UseinputState
