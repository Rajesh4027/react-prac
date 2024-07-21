import React from "react";


const Greet = props  => {

    const {name,heroname,children} = props
    return(
        <div>
            <h1>Hello {name} your are {heroname}</h1>
            {children}
        </div>
    ) 
}

export default Greet
