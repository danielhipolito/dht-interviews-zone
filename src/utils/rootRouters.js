import { Switch, Route } from 'react-router-dom';
import InterviewsZone from "../components/InterviewsZone";

const RootRouters = ()=> {
    return  <div>
        <Switch>
            <Route path="/" component = {InterviewsZone}/>
        </Switch>
    </div>;
};

export default RootRouters;
