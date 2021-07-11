import {useState, useEffect} from 'react';
import ChatHeader from './ChatHeader';
import NameQuestion from './NameQuestion';
import BirthDateQuestion from './BirthDateQuestion';
import ContactQuestion from './ContactQuestion';
import AnswerBox from './AnswerBox';

const Interviewer = () => {
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [interviewResults,setInterviewResults] = useState ( [{question:< NameQuestion onSendAnswer = {nameData =>saveNameData(nameData)}/>},
        {question:<BirthDateQuestion onSendAnswer = {(algo) =>console.error("llego esto", algo)}/>}
        ,{question:<ContactQuestion onSendAnswer = {(algo) =>console.error("llego esto", algo)}/>}]);
    
    useEffect(()=> {
    },[interviewResults]);

    const updateCurrentQuestion = questionNum => {
        let candidateInfoCopia = interviewResults;
        if(questionNum > currentQuestion) {
            setCurrentQuestion(questionNum);
        } else {
            candidateInfoCopia[questionNum].question = < NameQuestion onSendAnswer = {nameData =>saveNameData(nameData)}
            isAnswered = {false}/>;
            setInterviewResults([...candidateInfoCopia]);
        }
    };
   
    const saveNameData = nameData => {
        let candidateInfoCopy = interviewResults;
        updateCurrentQuestion(1);
        candidateInfoCopy[0].answer = <AnswerBox answer = {nameData} onEditing = {()=>updateCurrentQuestion(0)}/>;
        candidateInfoCopy[0].question = < NameQuestion onSendAnswer = {nameData =>saveNameData(nameData)}
            isAnswered = {true}/>;
        setInterviewResults(candidateInfoCopy);
    };
    return <div>
        <ChatHeader/>
            <div className = "container">
                {interviewResults.map ((result,idx) => {
                    return idx <= currentQuestion 
                        ?   <div key = {idx}> 
                                {result.question} 
                                {   result.answer ? result.answer :''}
                            </div>
                        :   ' '
                })}
            </div>
    </div>;
};

export default Interviewer;