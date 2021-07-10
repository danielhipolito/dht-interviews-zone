import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = props => {
    const StyledCard = styled.div.attrs(props =>  {return {className: props.className}})`
        height: ${props.size}vh;
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