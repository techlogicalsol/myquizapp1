import React, { useRef } from "react";

function Start({setUserName}){

    const inputRef = useRef()

    const handleClick =()=>{
        inputRef.current.value && setUserName(inputRef.current.value)
    }

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto mt-5">
                <div className="form-group">
                <input 
                ref={inputRef}
                type="text" 
                className="form-control"
                placeholder="Enter your name"
            />
            </div>
            <button className="btn btn-primary" onClick={handleClick}>Start</button>

                </div>
            </div>
        </div>
            

        </>
    )
}

export default Start