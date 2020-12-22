import React from 'react';
import Generator from './components/Generator';
import Letter from './components/Letter';
import './stylesheets/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Generator} />
                <Route exact path='/name' component={Generator} />
                <Route exact path="/name/:recip" component={Letter} />
            </Switch>
        </Router>
    );
};

export default App;