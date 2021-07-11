import MessageBox from './MessageBox';
import PropTypes from 'prop-types';

const ConfirmationQuestion = props => {
    return <MessageBox onSubmit = {() => props.onSendAnswer()} title = ""
        onSubmitText = "Iniciar">
            <div className = "row p-3">
                <p className = "pl-3">Si tus datos son correctos por favor iniciemos</p>
            </div>
    </MessageBox>;
};

ConfirmationQuestion.defaultProps = {
    isAnswered: false,
    onSendAnswer: () => alert("No tengo función establecida")
};

ConfirmationQuestion.propTypes = {
    isAnswered: PropTypes.bool,
    onSendAnswer: PropTypes.func.isRequired
};

export default  ConfirmationQuestion;