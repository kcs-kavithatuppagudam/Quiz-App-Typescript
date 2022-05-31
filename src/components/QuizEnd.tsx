import React from 'react'
import {useAppSelector} from '../redux/hooks'


const QuizEnd:React.FC = () => {

    const score=useAppSelector((state)=>state.quizReducer.score)
    const scorePercentage=Math.trunc((score/20)*100)


    return (
        <div style={{margin:"90px"}}>
            <div>Your score Percentage is :{scorePercentage} %</div>
            <div style={{margin:"10px"}}>Quiz End Here</div>
            
            
        </div>
    )
}

export default QuizEnd
