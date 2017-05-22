/**
 * Created by WangCan on 2017/5/22.
 */

import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Collection from './components/collection';

let testData = {
    data: {
        id: 'id',
        type: 'type',
        imageUrl: '/assets/demo/test.jpg',
        name: 'name',
        author: {
            name:'authorName',
            avatarUrl: '/assets/demo/test.jpg',
            description: 'authorDescription'
        }
    },
    clickView: ()=>console.log('view'),
    clickPlay: ()=>console.log('play')
};


export default class App extends React.Component {
    render() {
        return <div>
            <MuiThemeProvider>
                <Collection data={testData.data} clickView={testData.clickView} clickPlay={testData.clickPlay}/>
            </MuiThemeProvider>
        </div>
    }
}
