import ReactDOM from 'react-dom';
import React, { Component } from 'react'
import '../styles/style.css'
import AppCreateDiagram from '../components/AppCreateDiagram.jsx'


const App = () =>  <AppCreateDiagram />

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
