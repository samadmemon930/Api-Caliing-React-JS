import { useEffect, useState} from "react"

const ApiCalling = () =>{
let [count,setCount] = useState(0)
let [number,setNumber] = useState(0)


useEffect(()=>{
    console.log("Test First Time")

},[]);

useEffect(()=>{
    console.log("run every time")

},);

useEffect(()=>{
    console.log("run on count value update")

},[count]);


return(
    <>
<h1>Use Effect </h1>
<h3>{count}</h3>
<button onClick={()=>setCount(++count)}>inc</button>

<h3>{number}</h3>
<button onClick={()=>setNumber(++number)}>inc</button>


    </>
);
};

export default ApiCalling;