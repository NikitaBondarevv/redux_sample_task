import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import { App } from './app.component';

const Container = <Provider store={store}><App /></Provider>;

ReactDOM.render(Container, document.getElementById('app'));

