import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = props => {
    const StyledCard = styled.div.attrs(props =>  {return {className: props.className}})`
        height: ${props.size}vh;
        overflow-y: auto;
        overflow-x: hidden !important; 
        border-radius:15px; 
        scrollbar-color:  #F93F83;
        @media (max-width: 992px) {
            height: 100%;
        }
        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
        background-color: #F5F5F5;
        border-radius: 10px;
        } 
        &::-webkit-scrollbar {
            width: 12px;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
            background-color: #F93F83;
        }
    `;
    return <StyledCard className = {`${props.customClass}`} >
        {props.children}
    </StyledCard>
};

Card.defaultProps = {
    size: '',
    customClass: '',
    children: <p> No data</p>
};

Card.propTypes = {
    size: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
        ]).isRequired,
    customClass: PropTypes.string
};

export default Card;