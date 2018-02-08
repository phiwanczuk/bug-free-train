import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App'
import AreaChooser from './components/AreaChooser';




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
