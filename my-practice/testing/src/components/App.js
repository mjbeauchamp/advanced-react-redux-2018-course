import React, {Component} from 'react'
import CommentBox from './CommentBox'
import CommentList from './CommentList'
import {Provider} from 'react-redux'
import store from '../store'


class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <div>
                    <CommentBox />
                    <CommentList />
                </div>
            </Provider>
        )
    }
}

export default App;