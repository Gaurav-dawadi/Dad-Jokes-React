import React from 'react'
import axios from 'axios'

const API_URL = "https://icanhazdadjoke.com/"

class JokeList extends React.Component{
    state = {
        numOfJokes: 10,
        jokes: []
    }

    async componentDidMount(){
        while (this.state.jokes.length < this.state.numOfJokes){
            let res = await axios.get(API_URL, {headers: {Accept: 'application/json'}})
            this.setState({jokes: [...this.state.jokes, res.data.joke]});
        }
    }

    render(){
        return(
            <div className='JokeList'>
                <ul>
                    {this.state.jokes.map((joke, id) => {
                        return <li key={id} >{joke}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default JokeList