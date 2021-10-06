import React, { useState } from 'react'

export default function ChildCmp(prop) {
    const [Input, setInput] = useState(null)
    const selectHandler = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }
    return (
        <div>
            <h1 style={{ marginLeft: "40%" }}>Solution in React js</h1>
            <select style={{ marginLeft: "45%" }} onChange={selectHandler}>
                <option selected disabled>-----select------</option>
                {prop.val.map((para) => {
                    return <option value={para.Counts}>{para.names}</option>
                })}
            </select>
            <h2 style={{ marginLeft: "48%" }}>{Input}</h2>

            {console.log(prop.val)}
        </div>
    )
}
