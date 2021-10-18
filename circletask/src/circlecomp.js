import {React,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { selectCount,changeSize } from './store';
import { changeSize } from './counterslice';
// import useInput from './useInput';
const Counter=()=>{
 
const count=useSelector(selectCount);
const [rad,setRad]=useState();
    
const dispatch=useDispatch();
return(
    <>
    <div className="container">
        <div className="col-md-12 text-center">
            <input type="text" placeholder="Enter the radius" onChange={dispatch(e=>setRad(e.target.value))} />
            <button className="btn btn-success" onClick={dispatch(changeSize())}>Change Size</button>
        </div>
    </div>
    </>
);

}
export default Counter;