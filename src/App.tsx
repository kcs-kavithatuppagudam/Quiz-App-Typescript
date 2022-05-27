import React,{useState,useEffect} from 'react'
import './App.css'
import {Container,Row,Col,Card} from 'react-bootstrap'
import QuizStart from './components/QuizStart';
import QuizQuestion from './components/QuizQuestion';
import axios from 'axios';

function App() {

  // interface IState{
  //   startQuiz:boolean,
  //   questions:[{}]
  // }

  // const [state, setstate] = useState<IState>({
  //   startQuiz:false,
  //   questions:[]
  // })

  const [startQuiz,setStartQuiz]=useState<boolean>(false)
  const [questions,setQuestions]=useState<[{}]>([{}])


  useEffect(() => {
    getQuestions()  
  }, [])

  const getQuestions=async()=>{
    const {data}=await axios.get("./questions.json")
    // let questions= data.sort(() => 0.5 - Math.random()).slice(0, 20)
    // console.log('asynchronous')
    
    //  Promise.resolve(data.sort(() => 0.5 - Math.random()).slice(0, 20)).then((res)=>{
    //    console.log(res)
    //  })
  // console.log(randomFun)
    // setstate({
    // questions:data
    // })

    // setQuestions(data)
    setQuestions(data.sort(() => 0.5 - Math.random()).slice(0, 20))
    console.log(data)
    console.log(questions)

  }

  const startBtnHandler=()=>{
    setStartQuiz(true)
  }

  return (
    <div className="App">
<Container style={{height:"300px",width:"600px",margin:"200px",border:"2px solid",marginLeft:"400px",textAlign:"center",alignItems:"center",backgroundColor:"l"}}>
<Row>
  <Col>
  <Card>
    <Card.Body>
      <Card.Title>Quiz App</Card.Title>
      {
    startQuiz?<QuizQuestion questions={questions} />:<QuizStart startBtnHandler={startBtnHandler}/>
}
    </Card.Body>
  </Card>
  </Col>
</Row>
</Container>
    </div>
  );
}

export default App;
