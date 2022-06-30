import { useEffect, useState } from 'react';
import './App.css';
import moneyPyramid from './Components/moneyPyramid';
import data from './Components/data'
import Trivia from './Components/Trivia';
import Timer from './Components/Timer';
// import Start from './Components/Start';

function App() {

  // const [username, setUserName] = useState(null)
  const [questionNum, setQuestionNum] = useState(1)
  const [timeOut, setTimeOut] = useState(false)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState(0)


  useEffect(()=>{

    questionNum > 1 && setEarned(moneyPyramid.find(m => m.id === questionNum - 1).amount + earned)

  },[moneyPyramid, questionNum])

  // useEffect(()=>{
  //   questionNum > 1 && setEarned(earned + 1)
  // }, [])


  return (
 


      <div className="container-fluid app">
            
  
        <div className="row">
          <div className="col-md-8 mt-5 main">
            
            {stop ? (
            <h1 className="endText"> You earned: {earned} </h1> 
            
            ): ( 
              <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNum={questionNum}/>
              </div>
            </div>

            <div className="bottom">
              <Trivia 
              data={data} 
              setTimeOut={setTimeOut}
              setStop={setStop}
              questionNum={questionNum}
              setQuestionNum={setQuestionNum}
              />
            </div>
            </>
            )}
          </div>


          <div className="col-md-4 mt-5 col_money">

          <ul className="list-group">
          {moneyPyramid.map(m=>(
            <li className={questionNum === m.id ? 
            "list-group-item active" : "list-group-item"}>
             <span className="moneyListItem"> {m.id} </span>
             <span>{m.amount}</span>
            </li>
          ))}
      </ul>
          </div>
        </div>
        
      </div>

  );
}

export default App;
