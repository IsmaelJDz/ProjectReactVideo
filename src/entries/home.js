import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
//import Playlist from '../playlist/components/playlist';

import data from '../api.json';



const app = document.getElementById('app');

//render(<Playlist data={data} /> , app);
render( <Home data={data} />, app);