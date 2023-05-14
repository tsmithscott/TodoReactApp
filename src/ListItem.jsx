import './App.css'
import { useState } from 'react'

function ListItem() {
    const [item, setItem] = useState("")

    return (
        <>
            <li>
                <div className="card">
                    <p>{item}</p>
                    <button>Delete</button>
                </div>
            </li>
        </>
    )
}

export default ListItem