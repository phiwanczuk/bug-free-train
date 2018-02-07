import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import AreaChooser from './components/AreaChooser';




ReactDOM.render(<AreaChooser />, document.getElementById('root'));
registerServiceWorker();
