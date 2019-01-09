import React, { Component } from 'react'

class SelectDiagram extends Component {
    constructor(){
        super();
        this.state = {
            choiseDiagram: ''
        }
    }
    //close el and send value chooise
    closeThisElement = () => {
        if(this.state.choiseDiagram == false){
            alert('Wybierz diagram')
        } else{
        if(typeof this.props.fnCloseElement == 'function'){
            this.props.fnCloseElement(this.state.choiseDiagram);
            }
        }
    }
    //for form control
    // setValDiagram = (e) => {
    //     this.setState({
    //         choiseDiagram: e.target.value
    //     })
    // }


    //color for diagram
    chooseColorDiagram = (e) => {
        let all = document.querySelector(".app-select-diagram")
        let allNameDiagram = all.getElementsByClassName("nameDiagram");
        for(var i = 0 ; i < allNameDiagram.length; i++){
            allNameDiagram[i].style.color = ''
        }
        e.currentTarget.children[2].style.color = 'white';
    }

    chooseSlupkowy = (e) => {
        this.setState({
            choiseDiagram: 'Słupkowy'
        });
        
        this.chooseColorDiagram(e)
    }
  
    chooseKolowy = (e) => {
        this.setState({
            choiseDiagram: 'Słupkowy'
        });
        this.chooseColorDiagram(e)
    }

    choosePunktowy = (e) => {
        this.setState({
            choiseDiagram: 'Słupkowy'
        });
        this.chooseColorDiagram(e)
    }


    render(){
        return(
            <div className="app-select-diagram">
                <div className="diagramFirst" onClick={this.chooseSlupkowy}>
                    <div className="imgDiagramFirst"></div><br />
                    <a className="nameDiagram">Słupkowy</a>
                </div>
                <div className="diagramSecond">
                    <div className="imgDiagramSecond"></div><br />
                    <a className="nameDiagram">Kołowy</a>
                </div>
                <div className="diagramThird">
                    <div className="imgDiagramThird"></div><br />
                    <a className="nameDiagram">Punktowy</a>
                </div>
                <div className="container-btn">
                    <button className="btn-next-main" onClick={this.closeThisElement}>
                        Next
                        <i className="next-button-icon"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default SelectDiagram