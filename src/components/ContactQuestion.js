import MessageBox from './MessageBox';
import {useState, useEffect} from 'react';
import 'moment/locale/es';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import PropTypes from 'prop-types';

const ContactQuestion = props => {
    const [contactData,setContactData] = useState({});
    const [answeredQuestion,setAnsweredQuestion] = useState("");

    useEffect(()=>{
        if(answeredQuestion) {
            document.getElementById(answeredQuestion).focus();
        }
    },[contactData]);

    const handleContactData = e => {
        setAnsweredQuestion(e.target.id);
        setContactData({...contactData,[e.target.name]:e.target.value});
    };
    const handlePhone = phone => {
        setContactData({...contactData,"phone":phone});
    };
    const validateContactData = () => {
        const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegEx.test(String(contactData.email).toLowerCase())) {
            alert("Email Invalido");
            setContactData({...contactData,"email":"ejemplo@ejemplo.com"});
        }
        else {
            if(!contactData.phone || contactData.phone.length <= 8) {
                alert("Celular invalido");
                setContactData({...contactData,"phone":"525532211229"});
            }
            else {
                props.onSendAnswer(`Celular: ${contactData.phone}
                Correo: ${contactData.email}`);
            }
        }
    };
    
    return <MessageBox onSubmit = {validateContactData} 
        title = "Datos de contacto">
        <form>
            <div className = "row p-3">
                <div className = "col-md-6">
                    <input placeholder = "Correo electrónico" className = "form-control" type = "email"
                        id = "email" onChange = {handleContactData} name = "email"
                        value = {contactData.email} disabled = {props.isAnswered}/>
                </div>
                <div className = "col-md-6">
                    <PhoneInput
                        inputClass ="w-100"
                        country={'mx'}
                        value = {contactData.phone}
                        onChange={handlePhone}
                        enableSearch
                        inputProps={{
                            id: "phone",
                            name: 'phone',
                            required: true
                            }}
                        preferredCountries = {["us","mx","pt"]}
                        required
                        disabled = {props.isAnswered}
                    />
                </div>
            </div>
        </form>
    </MessageBox>;
};

ContactQuestion.defaultProps = {
    isAnswered: false,
    onSendAnswer: () => alert("No tengo función establecida")
};

ContactQuestion.propTypes = {
    isAnswered: PropTypes.bool,
    onSendAnswer: PropTypes.func.isRequired
};

export default ContactQuestion;