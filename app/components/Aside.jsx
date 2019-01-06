import React, { Component } from 'react'

class Aside extends Component{
    constructor(){
        super()
    }
    addThisElement = () => {
        if(typeof this.props.fnAddElement == 'function'){
            this.props.fnAddElement();
        }
    }
    render(){
        return(
            <aside className="app-aside">
                <button onClick={this.addThisElement} className="button-new-diagram">
                        Dodaj
                </button>
            </aside>
        )
    }
}

export default Aside