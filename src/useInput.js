import React,{useState} from 'react';

const useInput=()=>{
const[radius,setRadius]=useState(20);

return[radius,setRadius];

}
export default useInput;