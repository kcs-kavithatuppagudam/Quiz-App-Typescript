import React, { useState, useEffect } from 'react'
import './App.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import QuizStart from './components/QuizStart';
import QuizQuestion from './components/QuizQuestion';
import QuizEnd from './components/QuizEnd'
import {useAppDispatch} from './redux/hooks'
import {setScore} from './redux/quizSlice'

import axios from 'axios';

function App() {
  interface ques {
    "question": String
    "options": [] | any
    "correctanswer": Number
    "id": String
  }
  const [startQuiz, setStartQuiz] = useState<number>(0) //not started 0, started 1 end 2
  const [questions, setQuestions] = useState<[ques]>([{
    "question": "",
    "options": [],
    "correctanswer": 0,
    "id": ""
  }])
  const [counter, setCounter] = useState<number>(20)
const dispatch=useAppDispatch()
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  // const [score1, setScore1] = useState<number>(0)
  

  useEffect(() => {
    getQuestions()
  }, [])

  const getQuestions = async () => {
    const { data } = await axios.get("./questions.json")
    let qBank = data.sort(() => 0.5 - Math.random()).slice(0, 20)
    setQuestions(qBank)
    // console.log(qBank)
    //  // console.log(data)
    // console.log(questions)

  }

  const startBtnHandler = () => {
    setStartQuiz(1)
  }


  const checkAnswer = (userAnswer: any): void => {
  
    setCurrentIndex((currentIndex) => currentIndex + 1)
    setCounter(20)
    
  if (currentIndex === 20) {
    setStartQuiz(2)
  }
    if (userAnswer == questions[currentIndex].correctanswer) {
      dispatch(setScore())
      // setScore1(score1 + 1)
    }
  }

  // console.log("currentIndex", currentIndex)
  return (

    <div className="App">
      <Container style={{ height: "400px", width: "600px", margin: "200px", border: "2px solid", marginLeft: "400px", textAlign: "center", alignItems: "center", backgroundColor: "l" }}>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title style={{margin:"30px"}}>Quiz App</Card.Title>

                {
                  startQuiz == 0 ? <QuizStart startBtnHandler={startBtnHandler} /> : ''
                }
                {
                  startQuiz == 1 && currentIndex !=20 ? (
                    <QuizQuestion questions={questions} currentIndex={currentIndex} checkAnswer={checkAnswer} counter={counter} setCounter={setCounter} />) : ''
                }
                {
                    currentIndex === 20?<QuizEnd/> : ''
                }
                {/* {
                  startQuiz == 2?<QuizEnd />:''
                } */}
                {/* <div>{questions[currentIndex].correctanswer}</div>
                <div>{score}</div> */}
                {/* <div>{startQuiz}</div>
                <div>{currentIndex}</div> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
