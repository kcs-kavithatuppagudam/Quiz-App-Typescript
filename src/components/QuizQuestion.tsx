import React, { useState } from 'react'
import QuizAnsButton from './QuizAnsButton'

type props = {
    questions:any
}



const QuizQuestion: React.FunctionComponent<props> = ({ questions }) => {

    const nextQuestion=():void=>{
        setCurrentIndex(currentIndex+1)
    }

    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [score,setScore]=useState<number>(0)
    return (
        <div>
            <div>{questions[currentIndex].question}</div>
            {
                questions[currentIndex].options.map((option:string, index:number) => {
                    return <QuizAnsButton btnText={option} nextQuestion={nextQuestion}/>
                })
            }
        </div>
    )
        }
export default QuizQuestion
