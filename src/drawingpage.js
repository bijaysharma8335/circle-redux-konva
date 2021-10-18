import React ,{useState} from 'react';
import { Stage,Layer,Circle } from 'react-konva';
import { useDispatch } from 'react-redux';
import { changeSize } from './counterslice';
import useInput from './useInput';
const Drawingpage=()=>{
    const [radius,setRadius]=useInput();
   
     const  dispatch = useDispatch();
    return(
        <div> 
            <div className="container mt-5">
                <div className="col-md-12 text-center">
                    <input type="text" placeholder="Enter the radius"  onChange={e=>setRadius(e.target.value)}/>
                    {/* <button className="btn btn-success" onClick={dispatch(changeSize(radius) || 0)}>Click</button> */}
                </div>
            </div>

            <div className="container mt-5">
                <div className="col-md-12 text-center ">
                    <Stage width={window.innerWidth} height={window.innerHeight}>
                        <Layer>
                            <Circle
                            x={600}
                            y={200}
                            width={300}
                            height={400}
                            fill="blue"
                            stroke="red"
                            strokeWidth={10}
                            radius={radius}
                        
                            />
                        </Layer>
                    </Stage>
                </div>
            </div>
        </div>
    );

}

export default Drawingpage; 