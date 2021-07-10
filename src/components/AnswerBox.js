import Card from './Card';
import PropTypes from 'prop-types';

const AnswerBox = props => {
    return <div className = "row d-flex justify-content-end">
        <div className = "p-1 col-lg-4 col-md-7 col-10 runded-circle text-center">
            <Card customClass = "bg-primary p-2">
                <p className = "m-0">{props.answer} </p>
            </Card>
        </div>
    </div>;
};

AnswerBox.defaultProps = {
    answer: 'Daniel Hipolito Tolentino'
};

AnswerBox.propTypes = {
    answer: PropTypes.string.isRequired
};


export default AnswerBox;