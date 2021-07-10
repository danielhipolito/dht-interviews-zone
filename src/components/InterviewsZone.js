import NavBar from './NavBar';
import Interviewer from './Interviewer';
import Card from './Card';
import styled from 'styled-components';

const InterviewsZone = () => {
        // const Heading = styled.div.attrs(props =>  {return {className: props.className}})`
    //   font-weight: bold;
    //     color: #968c8c;
    //   `;
    return <div className = "container-fluid">
        <NavBar/>
        <Card customClass = "bg-info container p-md-1" size = {83}>
            <Interviewer/>
        </Card>
    </div>;
};

export default InterviewsZone;