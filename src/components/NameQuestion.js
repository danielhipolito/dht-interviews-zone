import MessageBox from './MessageBox';
import {useState, useRef, useEffect} from 'react';

const NameQuestion = props => {
    const [candidateName,setCandidateName] = useState({});
    const [edited,setEdited] = useState("");
    const itemEls = useRef([]);

    useEffect(()=>{
        if(edited) {
            itemEls.current.forEach(itemEl=> {
                if(itemEl) {
                    if(itemEl.id.includes(edited))
                        itemEl.focus();
                }              
            });
        }
    },[candidateName]);

    const handleCandidateName = e => {
        setEdited(e.target.id);
        setCandidateName({...candidateName,[e.target.name]:e.target.value});
    };
    
    return <MessageBox onSubmit = {() => props.onSendName(candidateName)}>
        <form>
            <div className = "row p-3">
                <div className = "col-md-6">
                    <input placeholder = "Primer Nombre" className = "form-control"  id="firstName" type = "text"
                        onChange = {handleCandidateName} name = "firstName" value = {candidateName.firstName}
                        ref = {itemEl => (itemEls.current = [...itemEls.current, itemEl]) }/>    
                </div>
                <div className = "col-md-6 mb-2">
                    <input placeholder = "Segundo Nombre" className = "form-control" id="secondName"
                    onChange = {handleCandidateName} name = "secondName" value = {candidateName.secondName}
                    ref = {itemEl => (itemEls.current = [...itemEls.current, itemEl]) }/>
                </div>
                <div className = "col-md-6">
                    <input placeholder = "Apellido Paterno" className = "form-control" id = "fathersLastName"
                    onChange = {handleCandidateName} name = "fathersLastName" value = {candidateName.fathersLastName}
                    ref = {itemEl => (itemEls.current = [...itemEls.current, itemEl]) }/>
                </div>
                <div className = "col-md-6">
                    <input placeholder = "Apellido Materno" className = "form-control" id = "mothersLastName"
                    onChange = {handleCandidateName} name = "mothersLastName" value = {candidateName.mothersLastName}
                    ref = {itemEl => (itemEls.current = [...itemEls.current, itemEl]) }/>
                </div>
            </div>
        </form>
    </MessageBox>;
};

export default NameQuestion;