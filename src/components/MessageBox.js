import styled from 'styled-components';
import Card from "./Card";
import PropTypes from 'prop-types';

const MessageBox = props => {
    const StyledImg = styled.img.attrs(props =>  {return {className: props.className}})`
        height: 100%;
        background-size:100%;
        background-position:center;
        width: 100%;
        background-image: url("https://i.pinimg.com/originals/4e/b3/f7/4eb3f7fe5216576fbc26ec189139211a.jpg"); 
    `;

    const StyledIndicator = styled.div.attrs(props =>  {return {className: props.className}})`
        height: 1.2rem;
        width: 1.2rem;
        position: absolute;
        bottom: 11px;
        right: 13px;
        @media (max-width: 992px) {
            font-size:13px;
            height: 1.1rem;
            width: 1.1rem;
            bottom: 11px;
            right: 12px;
        }
        @media (max-width: 768px) {
            font-size:12px;
            height: 1rem;
            width: 0.9rem;
            bottom: 9px;
            right: 7px;
        }
    `;

    const StyledImgContainer = styled.div.attrs(props =>  {return {className: props.className}})`
        position: relative;
        height: 9rem;
        width: 7rem;
        @media (max-width: 992px) {
            height: 8rem;
            width: 6rem;
        }
        @media (max-width: 768px) {
            height: 5rem;
            width: 4.5rem;
        }
    `;

    return <div className = "row mt-2 ">
        <div className = "col-md-2 col-3 d-flex justify-content-center">
            <StyledImgContainer>
                <StyledIndicator className ="rounded-circle bg-secondary text-info text-center">
                    ✓
                </StyledIndicator>
                <StyledImg  className = "rounded-circle"/>
            </StyledImgContainer>
        </div>
        <div className = "col-md-10 col-9">
            <div className = "row ">
                <div className = "col-lg-12">
                    <h5> {props.title} </h5>
                    {/* <h5>¿Cual es tu nombre ?</h5> */}
                </div>
                <div className = "col-lg-12  ">
                    <div className = "row">
                        <div className = "col-md-10">
                            <Card customClass = "bg-light">
                                {props.children}
                            
                            </Card>
                        </div>
                        <div className = {`col-md-2 d-flex align-items-center justify-content-md-center 
                            justify-content-end`}>
                            <button className = "btn btn-secondary" onClick = {props.onSubmit}>
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>          
};
MessageBox.defaultProps = {
    title: '¿Cual es tu nombre?',
    onSubmit: () => alert("¿Que se supone que tendría que hacer?"),
    children: <input type = "text" placeholder = "Tu respuesta aqui"/>  
};
  
MessageBox.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    onSubmit: PropTypes.func
};
  

export default MessageBox;