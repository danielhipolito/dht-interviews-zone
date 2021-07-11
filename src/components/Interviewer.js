import {useState, useEffect} from 'react';
import ChatHeader from './ChatHeader';
import AnswerBox from './AnswerBox';
import NameQuestion from './NameQuestion';
import BirthDateQuestion from './BirthDateQuestion';
import ContactQuestion from './ContactQuestion';
import ConfirmationQuestion from './ConfirmationQuestion';

const Interviewer = () => {
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [lastQuestion,setLastQuestion] = useState(0);
    const [interviewResults,setInterviewResults] = useState ( [{question:< NameQuestion onSendAnswer = 
        {name =>updateAnswer(name,0)}/>}, {question:<BirthDateQuestion onSendAnswer = 
        {date =>updateAnswer(date,1)}/>},{question:<ContactQuestion onSendAnswer = 
        {contact =>updateAnswer(contact,2)}/>},{question:<ConfirmationQuestion onSendAnswer = 
        {() =>setShowResults(true)}/>}]);
    const [showResults,setShowResults] = useState(false);

    const handleInterview = () => {
        if(currentQuestion > lastQuestion) {
            setLastQuestion(currentQuestion);
        }
    };
    
    useEffect(()=> {
        handleInterview();
    },[currentQuestion]);

    const updateQuestion = questionIdx => {
        let candidateInfoCopia = interviewResults;
        let isEnabled = false;
        isEnabled = !candidateInfoCopia[questionIdx].enabled;
        candidateInfoCopia[questionIdx].enabled = isEnabled;
        switch(questionIdx) {
            case 1:
                candidateInfoCopia[questionIdx].question = <BirthDateQuestion 
                    onSendAnswer = { date =>updateAnswer(date,1)} isAnswered = {isEnabled}/>;
            break;
            case 2:
                candidateInfoCopia[questionIdx].question = <ContactQuestion 
                onSendAnswer = { contact => updateAnswer(contact,2)} isAnswered = {isEnabled}/>;
            break;
            default:
                candidateInfoCopia[questionIdx].question = <NameQuestion onSendAnswer = 
                    {name =>updateAnswer(name,0)} isAnswered = {isEnabled}/>;
            break;
        }
        setInterviewResults(candidateInfoCopia);
    };

    const updateAnswer = (answer,answerIdx) => {
        let candidateInfoCopia = interviewResults;
   
        candidateInfoCopia[answerIdx].answer = <AnswerBox answer = {answer} onEditing = 
            {()=>{updateQuestion(answerIdx);setCurrentQuestion(answerIdx)}}/>;
        switch(answerIdx) {
            case 1:
                sessionStorage.setItem("Fecha", answer);
            break;
            case 2:
                sessionStorage.setItem("Celular", answer.split(":")[1].replace(/\D/g, ""));
                sessionStorage.setItem("Correo", answer.split(":")[2]);
            break;
            default:
                sessionStorage.setItem("Nombre", answer);
            break;
        }
        updateQuestion(answerIdx);
        setInterviewResults(candidateInfoCopia);
        setCurrentQuestion(answerIdx + 1);
    };

    return <div>
        <ChatHeader/>
            <div className = "container">
                {interviewResults.map ((result,idx) => {
                    return idx <= lastQuestion
                        ?   <div key = {idx}> 
                                {result.question} 
                                {   result.answer ? result.answer :''}
                                {   showResults && idx == 3 ?  <AnswerBox >
                                    <div className = "row d-flex justify-content-center flex-column">
                                        <span> Fecha de nacimiento: {sessionStorage.getItem('Fecha')} </span>
                                        <span> Correo electrónico: {sessionStorage.getItem('Correo')} </span>
                                        <span> Teléfono celular: {sessionStorage.getItem('Celular')} </span>
                                        <span> Nombre: {sessionStorage.getItem('Nombre')} </span>
                                    </div>
                                </AnswerBox> :''}
                            </div>
                        :   ' '
                })}
            </div>
    </div>;
};

export default Interviewer;