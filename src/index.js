/**
 * Created by WangCan on 2017/5/22.
 */
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDom from 'react-dom';
import React from 'react';
import App from './app';

injectTapEventPlugin();

ReactDom.render(
    <App/>,
    document.getElementById('root')
)