import { React } from "react";

const comp = () => {
    return (
        <div className='comp-one'>
            <h1> I'm comp one</h1>
            <p>Mylifecycle is {Math.random() * 10} milisec</p>
        </div>
    );
};

export default comp;