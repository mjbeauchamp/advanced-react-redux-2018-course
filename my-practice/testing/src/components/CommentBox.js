import React, {Component} from 'react'


class CommentBox extends Component {
    state = {
        comment: ""
    }

    updateText = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            comment: ""
        })
    }

    render(){
        console.log(this.state.comment)
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea onChange={this.updateText} cols="30" rows="10" value={this.state.comment}></textarea>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}

export default CommentBox;