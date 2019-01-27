import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_TRACKS':
            return {
                ...state,
                track_list: action.payload,
                heading: 'Search Result1'
            };
        default:
            return state;
    }
}

export class Provider extends Component {

    state = {
        track_list: [],
        heading: 'Top 10 Tracks',
        dispatch: (action) => {
            this.setState(
                (state) => {
                    return reducer(state, action);
                }
            );
        }
    }


    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=in&f_has_lyrics=1&apikey=b3415c216f51049c251281d446679fd9`)
            .then((res) => {
                this.setState({ track_list: res.data.message.body.track_list });
            })
            .catch();
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;