import React from 'react'

type props={
    btnText:string,
    checkAnswer:any

}

const QuizAnsButton:React.FC<props>= ({btnText,checkAnswer}) => {
    return (
        <div>
            <button style={{background:"cadetblue",padding:"10px 20px 10px 20px",margin:"10px",borderRadius:"5px",display:"inline !important"}} onClick={()=>checkAnswer(btnText) }>{btnText}</button>
        </div>
    )
}

export default QuizAnsButton
