import styled from 'styled-components';

const Card = props => {

    const StyledCard = styled.div.attrs(props =>  {return {className: props.className}})`
      height: ${props.size}vh;
      `;
    return <StyledCard className = {`w-100 ${props.customClass}`} >
        {props.children}
    </StyledCard>
    
    // return <div className = {props.customClass}>
    //     {props.children}
    // </div>
};

export default Card;