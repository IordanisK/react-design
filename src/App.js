import React from "react";

import { Footer, Possibility, Features, WhatGPT3, Header, Ad } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <CTA />
        <Possibility />
        <Ad />
        <Footer />
    </div>
);

export default App;