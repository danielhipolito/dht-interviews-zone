import MessageBox from './MessageBox';
import {useState, useRef, useEffect} from 'react';
import moment from 'moment';
import 'moment/locale/es';

const BirthDateQuestion = props => {
    const [birthDate,setBirthDate] = useState({day:25,month:12,year:1997});
    const [answeredQuestion,setAnsweredQuestion] = useState("");
    const itemEls = useRef([]);
    const months = moment.months();
    const dayMin = 1;
    const dayMax = 31;
    const yearMin = 1;
    const yearMax = 31;

    useEffect(()=>{
        if(answeredQuestion) {
            itemEls.current.forEach(itemEl=> {
                if(itemEl) {
                    if(itemEl.id.includes(answeredQuestion))
                        itemEl.focus();
                }              
            });
        }
    },[birthDate]);

    const handleBirthDate = e => {
        setAnsweredQuestion(e.target.id);
        setBirthDate({...birthDate,[e.target.name]:e.target.value});
    };
    const validateDate = () => {
        if(!birthDate.day || !( birthDate.day >= dayMin && birthDate.day <= dayMax)  ) {
            alert("dia invalido");
            setBirthDate({...birthDate,["day"]:1});
        }
        else {
            if(!birthDate.year || !( birthDate.year >= yearMin && birthDate.year <= yearMax)) {
                alert("Año invalido");
                setBirthDate({...birthDate,["year"]:1997});
            }
            else {
                props.onSendName(birthDate);
            }
        }
    };
    
    return <MessageBox onSubmit = {validateDate} 
        title = "¿Cual es tu fecha de nacimiento ?">
        <form>
            <div className = "row p-3">
                <div className = "col-md-4">
                    <input placeholder = "Dia" className = "form-control"  id = "day" type = "number"
                        onChange = {handleBirthDate} name = "day" value = {birthDate.day} min = {dayMin}
                        ref = {itemEl => (itemEls.current = [...itemEls.current, itemEl])} max = {dayMax}/>    
                </div>
                <div className = "col-md-4">
                    <select id="month" className="form-control" name="month" value = {birthDate.month}
                        onChange = {handleBirthDate} value = {birthDate.month}>
                        {months.map((month,idx) =><option value = {idx + 1 } key = {idx}>{month}</option>)}
                    </select>
                </div>
                <div className = "col-md-4">
                    <input placeholder = "Año" className = "form-control" id = "year" type = "number"
                    onChange = {handleBirthDate} name = "year" value = {birthDate.year} min = {yearMin}
                    ref = {itemEl => (itemEls.current = [...itemEls.current, itemEl]) } max = {yearMax}/> 
                </div>
            </div>
        </form>
    </MessageBox>;
};

export default BirthDateQuestion;