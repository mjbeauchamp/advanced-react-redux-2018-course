import React from 'react'
//import ReactDOM from 'react-dom'
import App from '../App'
import {shallow} from 'enzyme'
import CommentBox from '../CommentBox'
import CommentList from '../CommentList'

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />)
})

it("shows a comment box", () => {
    expect(wrapped.find(CommentBox).length).toBe(1)
})

it("shows the comment list", () => {
    expect(wrapped.find(CommentList).length).toBe(1)
})


//THIS VERSION OF THE CODE IS FOR IF YOU'RE NOT USING ENZYME
// it("shows a comment box", () => {
//     //Creates a "virtual" div in the virtual DOM that the testing environment creates
//     const div = document.createElement('div');
    
//     //Renders the App componenet into the div we created in the virtual DOM
//     ReactDOM.render(<App />, div)
//     console.log(div.innerHTML)
//     expect(div.innerHTML).toContain('Comment Box')


//     //Removes the App component from the virtual DOM
//     //This is cleanup after the test is run. We don't want to end up with leftover compoenents in the virtual DOM
//     ReactDOM.unmountComponentAtNode(div);
// })