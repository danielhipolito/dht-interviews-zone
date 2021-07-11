import NavBar from './NavBar';
import Interviewer from './Interviewer';
import Card from './Card';

const InterviewsZone = () => {
    return <div className = "container-fluid">
        <NavBar/>
        <Card customClass = "bg-info container p-md-1 p-0" size = "83" >
            <Interviewer/>
        </Card>
    </div>;
};

export default InterviewsZone;