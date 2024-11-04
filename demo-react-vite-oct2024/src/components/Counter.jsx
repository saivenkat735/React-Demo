import { useState } from "react";

function Counter(){
    // let count=0; //put this count in the state of the component
    const [count,setCount]=useState(0);

    function handleIncrement(){
        //count++; //should not change the count variable directly, instead use the set count
        // setCount(count+1);
        setCount((count)=> (count+1));
        setCount((count)=> (count+1));
        setCount((count)=> (count+1));
        console.log(count);
    }
    function handleDecrement(){
        // count--;
        setCount((count)=>(count-1));
        setCount((count)=>(count-1));
        setCount((count)=>(count-1));
        console.log(count);

    }
    return (
      <>
        <div className="container m-5 p-5">
          <h2>
            <button className="btn btn-warning" onClick={handleDecrement}>➖</button>
            <span className="mx-5 badge bg-success">{count}</span>
            <button className="btn btn-warning" onClick={handleIncrement}>➕</button>
          </h2>
        </div>
      </>
    );

}
export default Counter;