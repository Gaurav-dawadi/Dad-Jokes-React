import React from 'react'
import axios from 'axios'
import './css/jokelist.css';

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
            jokeList.push({ajoke: res.data.joke, avote: 0})
        }
        this.setState({jokes: jokeList, isLoaded:true});
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
                        {this.state.jokes.map((obj, id) => {
                            console.log(obj)
                            return <div key={id}>{obj.ajoke} - {obj.avote}</div>
                        })}
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