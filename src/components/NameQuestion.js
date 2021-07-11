import MessageBox from './MessageBox';
import {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const NameQuestion = props => {
    const [candidateName,setCandidateName] = useState({});
    const [answeredQuestion,setAnsweredQuestion] = useState("");
    const itemEls = useRef([]);

    useEffect(()=>{
        if(answeredQuestion) {
            itemEls.current.forEach(itemEl=> {
                if(itemEl) {
                    if(itemEl.id.includes(answeredQuestion))
                        itemEl.focus();
                }              
            });
        }
    },[candidateName]);

    const handleCandidateName = e => {
        setAnsweredQuestion(e.target.id);
        setCandidateName({...candidateName,[e.target.name]:e.target.value});
    };
    const findNumbers = names => {
        let foundNum = 0;
        Object.values(names).map(name=>{
            if (!/^[a-zA-Z]*$/g.test(name)) {
                foundNum ++;
            }
        });
        return foundNum;
    };
    const validateName = () => {
        let namesWithNumbers = findNumbers({...candidateName});
        if (Object.keys(candidateName).length < 3 ) {
            alert("Faltan datos");
        }
        else {
            if(namesWithNumbers > 0 ) {
                alert(`Se detectó un erorr en ${namesWithNumbers} campos`)
            }else {
                props.onSendAnswer(Object.values(candidateName).join(" "));
            }
        }
    };
    
    return <MessageBox onSubmit = {validateName} >
        <form>
            <div className = "row p-3">
                <div className = "col-md-6">
                    <input placeholder = "Primer Nombre" className = "form-control"  id="firstName" 
                        type = "text" onChange = {handleCandidateName} name = "firstName" 
                        ref = {itemEl => (itemEls.current = [...itemEls.current, itemEl]) }
                        value = {candidateName.firstName} disabled = {props.isAnswered}/>    
                </div>
                <div className = "col-md-6 mb-2">
                    <input placeholder = "Segundo Nombre" className = "form-control" id="secondName"
                        type = "text" onChange = {handleCandidateName} name = "secondName"
                        ref = {itemEl => (itemEls.current = [...itemEls.current, itemEl]) }
                        value = {candidateName.secondName} disabled = {props.isAnswered}/>
                </div>
                <div className = "col-md-6">
                    <input placeholder = "Apellido Paterno" className = "form-control" type = "text"
                        id = "fathersLastName" onChange = {handleCandidateName} name = "fathersLastName"
                        ref = {itemEl => (itemEls.current = [...itemEls.current, itemEl]) }
                        value = {candidateName.fathersLastName} disabled = {props.isAnswered}/>
                </div>
                <div className = "col-md-6">
                    <input placeholder = "Apellido Materno" className = "form-control" type = "text"
                        id = "mothersLastName" onChange = {handleCandidateName} name = "mothersLastName" 
                        ref = {itemEl => (itemEls.current = [...itemEls.current, itemEl]) }
                        value = {candidateName.mothersLastName} disabled = {props.isAnswered}/>
                </div>
            </div>
        </form>
    </MessageBox>;
};

NameQuestion.defaultProps = {
    isAnswered: false,
    onSendAnswer: () => alert("No tengo función establecida")
};

NameQuestion.propTypes = {
    isAnswered: PropTypes.bool,
    onSendAnswer: PropTypes.func.isRequired
};

export default NameQuestion;