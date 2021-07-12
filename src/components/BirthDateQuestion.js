import MessageBox from './MessageBox';
import {useState, useEffect} from 'react';
import moment from 'moment';
import 'moment/locale/es';
import PropTypes from 'prop-types';

const BirthDateQuestion = props => {
    const [birthDate,setBirthDate] = useState({day:25,month:12,year:1997});
    const months = moment.months();
    const dayMin = 1;
    const dayMax = 31;
    const yearMin = 1960;
    const yearMax = 2015;

    const handleBirthDate = e => {
        setBirthDate({...birthDate,[e.target.name]:e.target.value});
    };
    const validateDate = () => {
        if(!birthDate.day || !( birthDate.day >= dayMin && birthDate.day <= dayMax)  ) {
            alert("dia invalido");
            setBirthDate({...birthDate,"day":1});
        }
        else {
            if(!birthDate.year || !( birthDate.year >= yearMin && birthDate.year <= yearMax)) {
                alert("Año invalido");
                setBirthDate({...birthDate,"year":1997});
            }
            else {
                props.onSendAnswer(Object.values(birthDate).join(" "))
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
                        max = {dayMax}
                        disabled = {props.isAnswered} />    
                </div>
                <div className = "col-md-4">
                    <select id="month" className="form-control" name = "month" value = {birthDate.month}
                        onChange = {handleBirthDate} value = {birthDate.month} disabled = {props.isAnswered} >
                        {months.map((month,idx) =><option value = {idx + 1 } key = {idx}>{month}</option>)}
                    </select>
                </div>
                <div className = "col-md-4">
                    <input placeholder = "Año" className = "form-control" id = "year" type = "number"
                    onChange = {handleBirthDate} name = "year" value = {birthDate.year} min = {yearMin}
                     max = {yearMax}
                    disabled = {props.isAnswered} /> 
                </div>
            </div>
        </form>
    </MessageBox>;
};

BirthDateQuestion.defaultProps = {
    isAnswered: false,
    onSendAnswer: () => alert("No tengo función establecida")
};

BirthDateQuestion.propTypes = {
    isAnswered: PropTypes.bool,
    onSendAnswer: PropTypes.func.isRequired
};

export default BirthDateQuestion;