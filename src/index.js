import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/App.js';
import Create from './components/CreatePost.js';
import ShowAll from './components/PostList.js';

ReactDOM.render(
<BrowserRouter>
<BaseLayout>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/create' component={Create} />
    <Route path='/showall' component={ShowAll} />
  </Switch>
</BaseLayout>
</BrowserRouter>

,document.getElementById('root')
);
registerServiceWorker();
