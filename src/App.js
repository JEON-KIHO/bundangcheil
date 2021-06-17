import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/main/Main";
import EnterTicket from "./components/enterTicket/EnterTicket";

function App() {
    return (
        <Router>
            <>
                <Switch>
                    <Route exact path='/' component={ Main } />
                    <Route exact path='/enterTicket' component={ EnterTicket } />
                </Switch>
            </>
        </Router>
    );
}

export default App;
