import Card from './Card';
import { faChalkboardTeacher} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ChatHeader = () => <Card customClass = "bg-primary">
    <div className = "container">
        <div className = "row p-3 d-flex align-items-center">
            <div className = "col-9">
                <h4 className = "font-weight-bold mb-2 text-gray-800">Registro de candidato</h4>
            </div>
            <div className = "col-3">
                <FontAwesomeIcon icon = {faChalkboardTeacher} className = {`fa-2x`} />
            </div>
        </div>
    </div>
</Card>;

export default ChatHeader;