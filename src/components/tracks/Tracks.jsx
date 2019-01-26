import React from 'react';
import { Consumer } from '../../context';
import Spinner from '../layouts/Spinner';

const Tracks = () => {
    return (
        <Consumer>
            {(value) => {
                const { track_list } = value;
                if (track_list === undefined || track_list.length === 0) {
                    return <Spinner />
                } else {
                    return <h1>track</h1>
                }
            }}
        </Consumer>
    );
};

export default Tracks;

// API key = b3415c216f51049c251281d446679fd9