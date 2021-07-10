import Card from './Card';
import PropTypes from 'prop-types';

const AnswerBox = props => {
    return <div className = "row d-flex justify-content-end">
        <div className = "p-1 col-lg-5 col-md-7 col-11 runded-circle text-center">
            <Card customClass = "bg-primary p-2">
                <div className = "row d-flex align-items-center">
                    <div className = "col-md-9 col-8">
                        <p className = "m-0">{props.answer} </p>
                    </div>
                    <div className = "col-md-2 col-3">
                        <button className = "btn border border-dark" onClick = {props.onEditing}>
                            Editar
                        </button>
                    </div>
                </div>
            </Card>
        </div>
    </div>;
};

AnswerBox.defaultProps = {
    answer: 'Daniel Hipolito Tolentino',
    onEditing: () => alert("No tengo función establecida")
};

AnswerBox.propTypes = {
    answer: PropTypes.string.isRequired,
    onSubmit: PropTypes.func
};


export default AnswerBox;