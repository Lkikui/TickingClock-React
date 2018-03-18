import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function updateTime() {
    var time = new Date().toLocaleTimeString();

    const timeElement = (
        React.createElement('p', null, `${time}`)
    );
    
    ReactDOM.render(timeElement, document.getElementById('root'));
}

setInterval(updateTime, 1000);