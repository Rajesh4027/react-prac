import React from "react";


const Hello = () => {
    // return (
    //     <div className='dummyclass'>
    //         <h1>hello i am jsx</h1>
    //     </div>
    // )

    return React.createElement('div',
        {id:"hello",className:'dummyclass'},
        React.createElement('h1',null,"hello i am also jsx"))

}

export default Hello