import React, { useEffect } from "react";
import { useState } from "react";
import  useSound from 'use-sound'
import play from '../assets/play.wav'
import wrong from '../assets/wrong.wav'
import correct from '../assets/correct.wav'

function Trivia({data, setStop, setTimeOut, questionNum, setQuestionNum}){

    const [question, setQuestion] = useState(null)
    const [selected, setSelected] = useState(null)
    const [className, setClassName] = useState("ans")
    const [letsPlay] = useSound(play)
    const [wrongAns] = useSound(wrong)
    const [correctAns] = useSound(correct)


    useEffect(()=>{
        letsPlay()
    },[letsPlay])

    useEffect(()=>{
        setQuestion(data[questionNum - 1])

    },[data, questionNum]);


    const delay = (duration, callback) =>{
        setTimeOut(()=>{
            callback()
        }, duration)
    }


    const handleClick = (a) =>{
        setSelected(a)
        setClassName("ans active")
        delay(3000, ()=>
            setClassName(a.correct ? "ans correct" : "ans wrong")
        );

        delay(5000, ()=>
        {
            if(a.correct){
                correctAns();

                delay(1000, ()=>{
                    setQuestionNum((prev) => prev + 1)
                setSelected(null)
                })
            }
            else{
                wrongAns()
                delay(1000, ()=>{
                    setStop(true)
                })
                
            }
        }
        );
    };

    return(
        <>
            <div className="trivia">
                <div className='question'>
                    {question?.question}
                </div>

                <div className="answers mt-5">
                    {question?.answers.map((a)=>(
                    <div className={selected === a ? className : "ans"} onClick={()=> !selected && handleClick(a)}>
                        {a.text}
                    </div>  
                    ))}  
                </div>
            </div>

        </>
    )
}

export default Trivia