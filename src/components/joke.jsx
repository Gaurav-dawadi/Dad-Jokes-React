import React from 'react'

class Joke extends React.Component{
    render(){
        return(
            <div className='Joke'>
                <div className='Joke-buttons'>
                    <i className="fas fa-arrow-up" onClick={this.props.upVote}/>
                    <span>{this.props.vote}</span>
                    <i className="fas fa-arrow-down" onClick={this.props.downVote}/>
                </div>
                <div className='Joke-text'>{this.props.text}</div>
            </div>
        )
    }
}

export default Joke 