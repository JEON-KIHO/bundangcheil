import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./components/Users";
import MainPage from "./components/MainPage";

function App() {
    return (
        <Router>
            <>
                <Switch>
                    <Route exact path='/' component={ Users } />
                    <Route exact path='/main' component={ MainPage } />
                </Switch>
            </>
        </Router>
    );
}

export default App;
