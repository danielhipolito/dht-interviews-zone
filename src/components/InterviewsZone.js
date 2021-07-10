import NavBar from './NavBar';
import Interviewer from './Interviewer';
import Card from './Card';
import styled from 'styled-components';

const InterviewsZone = props => {
        // const Heading = styled.div.attrs(props =>  {return {className: props.className}})`
    //   font-weight: bold;
    //     color: #968c8c;
    //   `;

    return <div className = "container-fluid">
        <NavBar/>
        <div className = "container p-md-1 p-0">
            <Card customClass = "bg-info" size = {83}>
                <Interviewer/>
            </Card>
        </div>
    </div>;
};

export default InterviewsZone;