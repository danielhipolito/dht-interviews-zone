import { Switch, Route } from 'react-router-dom';

import Initial from "../components/Initial";

const RootRouters = ()=> {

    return(
        <div>
            <Switch>
                <Route path="/" component={Initial}/>
            </Switch>
        </div>
    );

};

export default RootRouters;
