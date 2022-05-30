import React, { useState,useEffect } from 'react'
import QuizAnsButton from './QuizAnsButton'
import QuizEnd from './QuizEnd'
type props = {
    questions: any;
    currentIndex:any;
    checkAnswer:any;
    counter:any;
    setCounter:any;
}

const QuizQuestion: React.FunctionComponent<props> = ({ questions,currentIndex,checkAnswer,counter,setCounter}) => {

  useEffect(()=>{
      let timer=setInterval(()=>{
          setCounter(counter-1)
      },1000)
      return ()=>{
          clearInterval(timer)
  },[counter])

  if(counter<0){
      setCounter(20)
      checkAnswer('true')
  }

    return (
        <div>
         
            <div>{currentIndex+1}.  {questions[currentIndex].question}</div>
            {
                  questions[currentIndex].options.map((option: string, index: number) => {
                    return <QuizAnsButton btnText={option} checkAnswer={checkAnswer} key={index + 1}  />
                })
            }
           
        </div>
    )
}
export default QuizQuestion
