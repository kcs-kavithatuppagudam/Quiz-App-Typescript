import React from 'react'

type props={
    startBtnHandler:any
}

const QuizStart:React.FunctionComponent<props> = ({startBtnHandler}) => {
    return (
        <div style={{margin:"70px"}}>
            <div>Welome to Quiz</div>
            <div style={{margin:"10px"}}>Quiz has 20 questions & Each question alloted 20 secs</div>
            <button style={{margin:"20px",padding:"8px 20px 8px 20px",backgroundColor:"cadetblue",borderRadius:"7px"}} onClick={()=>startBtnHandler()}>start</button>
        </div>
    )
}

export default QuizStart
