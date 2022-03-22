import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Link,Route} from 'react-router-dom';
import Working from './Working';
import Person from './Person';

class Main extends Component {
    render() {
        return(
            <Router>
                <Fragment>
                    <h1>Click on Buttons bellow to Navigate to pages you like</h1>
                    <button><Link to="/working">Click to show Films</Link></button>
                    <button><Link to="/person">Click to show Persons</Link></button>
                </Fragment>
                
                    <Route exact path="/working" component={Working} />
                    <Route exact path="/person" component={Person} />
                
            </Router>
        );
    }
}

export default Main;