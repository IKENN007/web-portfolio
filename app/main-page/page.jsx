'use client'

import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { SET_NAME } from "../app_redux/reducer/profile"

// const DisplayName = () => {
//     const {name} = useSelector((state) => state.profile)
//     return (
//         <>
//             <p className="mb-3">Hello, {name}</p>
//         </>
//     )
// }

// const ComplimentName = () => {
//     const {name} = useSelector((state) => state.profile)
//     return (
//         <>
//             <p className="mb-3">Damn {name}</p>
//         </>
//     )
// }

const page = () => {
    const name = useRef()
    const dispatch = useDispatch()

    const useName = () => {
        // console.log(name.current.value)
        dispatch(SET_NAME(name.current.value))
    }

    return (
        <div>
            {/* <DisplayName />
            <ComplimentName /> */}

            <input placeholder="Name here" ref={name}
            className="border border-slate-300 appearance-none rounded p-1 me-2"/>
            <button onClick={useName}
            className="border rounded bg-green-600 text-white p-1">Submit</button>

        </div>
    )
}

export default page
