import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Match, Miss} from 'react-router';

import App from './components/App'
import AreaChooser from './components/AreaChooser';
import NotFound from './components/NotFound'


const Root = () => {
    return (
        <BrowserRouter>
            <div>
            <Match exactly pattern="/" component={AreaChooser}/>
            <Match pattern="/store/:storeId" component={App}/>
             <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
