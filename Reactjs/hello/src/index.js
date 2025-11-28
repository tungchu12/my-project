import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Headers, OurReputation } from './App';
import { Footers } from './App';
import { Showinfo } from './App';   
import { data } from './App';  
import { Form } from './App';

import { CountClick } from './App';
import { LoopClick } from './App';
import { useState } from "react";
const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(<Headers />);
 
const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(<Footers />);

const banner = ReactDOM.createRoot(document.getElementById('banner'));
banner.render(<Showinfo  name ="123"/>);

const reputation = ReactDOM.createRoot(document.getElementById('our_reputation'));
reputation.render(<OurReputation data={data}/>);

const form = ReactDOM.createRoot(document.getElementById('form'));
form.render(<Form />);

const countclick = ReactDOM.createRoot(document.getElementById('count_click'));
countclick.render(<CountClick />)