import React , {useState} from 'react';

const Countercomponent=()=>{
    const [count,setcount]=useState(13);  

return(
    <div>
<p>Count Component - {count}</p>
<p>the number is {count%2===0 ? "even" : "odd"}</p>
<button onClick={()=>{setcount(count+1)}}>Increment</button>
<button onClick={()=>{setcount(count-1)}}>Decrement</button>
    </div>
)
}

export default Countercomponent;