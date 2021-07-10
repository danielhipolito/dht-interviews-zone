import { Switch, Route } from 'react-router-dom';
import Interviewer from "../components/Interviewer";

const RootRouters = ()=> {
    return  <div>
        <Switch>
            <Route path="/" component = {Interviewer}/>
        </Switch>
    </div>;
};

export default RootRouters;
