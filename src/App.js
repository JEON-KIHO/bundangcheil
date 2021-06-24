import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/main/Main";
import EnterTicket from "./components/enterTicket/EnterTicket";
import Arrive from './components/arrive/Arrive';

function App() {
    return (
        <Router>
            <>
                <Switch>
                    <Route exact path='/' component={ Main } />
                    <Route exact path='/enterTicket' component={ EnterTicket } />
                    <Route exact path='/arrive' component={ Arrive } />
                </Switch>
            </>
        </Router>
    );
}

export default App;
