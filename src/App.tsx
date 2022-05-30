import React, { useState, useEffect } from 'react'
import './App.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import QuizStart from './components/QuizStart';
import QuizQuestion from './components/QuizQuestion';
import QuizEnd from './components/QuizEnd'
import axios from 'axios';

function App() {



  const [startQuiz, setStartQuiz] = useState<boolean>(false)
  const [questions, setQuestions] = useState<[{}]>([{}])
  const [counter,setCounter]=useState<number>(20)

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [score, setScore] = useState<number>(0)


  useEffect(() => {
    getQuestions()  
  },[])

  const getQuestions = async () => {
    const { data } = await axios.get("./questions.json")
    let qBank = data.sort(() => 0.5 - Math.random()).slice(0, 20)
    setQuestions(qBank)
    // console.log(qBank)
    // console.log(data)
    // console.log(questions)

  }

  const startBtnHandler = () => {
    setStartQuiz(true)
  }


  const checkAnswer = (userAnswer: any): void => {
    setCurrentIndex(currentIndex + 1)
    setCounter(20)
    if (userAnswer == questions[currentIndex].correctanswer) {
      setScore(score + 1)
    }

  }



  return (
    <div className="App">
      <Container style={{ height: "300px", width: "600px", margin: "200px", border: "2px solid", marginLeft: "400px", textAlign: "center", alignItems: "center", backgroundColor: "l" }}>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Quiz App</Card.Title>
             
    
       
                
                {
                  startQuiz ? null : <QuizStart startBtnHandler={startBtnHandler} />
                }
                {
                  startQuiz && currentIndex!==20 ?(
                  <QuizQuestion questions={questions} currentIndex={currentIndex} checkAnswer={checkAnswer} />):null
                }
                {
                   currentIndex==20?<QuizEnd/>:null
                }
                
                <div>{questions[currentIndex].correctanswer}</div>
                <div>{score}</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
