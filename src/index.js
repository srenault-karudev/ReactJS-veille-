import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Test';
import Search from './GuessCount';
import Greeting from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <div>
        <Greeting fullName="dolyveen" />
    </div>,


    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
