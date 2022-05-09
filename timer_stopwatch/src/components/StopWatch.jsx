import React, { useEffect, useState } from 'react'

export const StopWatch = () => {
    const [time,setTime] = useState(0)
    const [timerOn,setTimerOn] = useState(false)

    useEffect(()=>{
        let interVal = null ;
        if(timerOn){
            interVal = setInterval(()=>{
                setTime(prevTime => prevTime + 10)
            },10)
        }
        else{
            clearInterval(interVal)
        }
        return ()=> clearInterval(interVal)
    },[timerOn])
 

  return (<div style={{display:"inlineBlock" ,margin:"auto",padding:"30px" ,width:"30%",marginTop:"100px",borderRadius:"5px",boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",fontSize:"30px"}}>
      <h1>Stopwatch</h1>
    <div >

    <span>{("0"+Math.floor((time/3600000)%60)).slice(-2)}h : </span>
    <span>{("0"+Math.floor((time/60000)%60)).slice(-2)}m : </span>
    <span>{("0"+Math.floor((time/1000)%60)).slice(-2)}s : </span>
    <span>{("0"+((time/10)%100)).slice(-2)}</span>
    </div>
    <div>
        { timerOn ? (
        <button onClick={()=> setTimerOn(false)}>Stop</button>): (
            <button onClick={()=> setTimerOn(true)}>Start</button>
        )
        }
      
        <button onClick={()=> setTime(0)}>Reset</button>
    </div>
  </div>
  )
}
