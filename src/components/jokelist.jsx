import React from 'react'
import axios from 'axios'
import Joke from './joke'
import './css/jokelist.css'
import uuid from 'react-uuid'

const API_URL = "https://icanhazdadjoke.com/"

class JokeList extends React.Component{
    state = {
        numOfJokes: 10,
        jokes: [],
        isLoaded: false
    }

    async componentDidMount(){
        let jokeList = [];
        while (jokeList.length < this.state.numOfJokes){
            let res = await axios.get(API_URL, {headers: {Accept: 'application/json'}})
            console.log(res.data.joke)
            jokeList.push({id: uuid(), ajoke: res.data.joke, avote: 0})
        }
        this.setState({jokes: jokeList, isLoaded:true});
    }

    handleVote(id, delta){
        this.setState(st => ({
            jokes: st.jokes.map(j => j.id === id ? {...j, avote: j.avote + delta} : j)
        }))
    }


    render(){
        if (this.state.isLoaded === true){
            return(
                <div className='JokeList'>
                    <div className='JokeList-sidebar'>
                        <h1 className='JokeList-title'>
                            <span>Dad</span> Jokes
                        </h1>
                        {/* <img src=''/> */}
                        <button className='JokeList-getmore'>New Jokes</button>
                    </div>
                    
                    <div className='JokeList-jokes'>
                        {this.state.jokes.map(obj =>( 
                            <Joke
                                key={obj.id}
                                text={obj.ajoke} 
                                vote={obj.avote}
                                upVote={() => this.handleVote(obj.id, 1)}
                                downVote={() => this.handleVote(obj.id, -1)}
                            />
                        ))}
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className='JokeList'>
                    <h1>Loading....</h1>
                </div>
            )
        }
    }
}

export default JokeList