import React from 'react'
import "./button.css"

const Button = ({name, type, submit}) => {
    let classes = [];
    if(submit){
        classes.push("submit-btn");
    }else{
        classes.push("button")
    }

    return (
        <div>
        <button className={classes.join(" ") }type={type}>{name}</button>
        </div>
    )
}

export default Button
