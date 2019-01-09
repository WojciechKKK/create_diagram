import React, { Component } from 'react'

class ElementCustonValue extends Component{
    constructor(){
        super();
        this.state = {
            valTitleColumn: '',         //for name
            valTitleNumber: '',         //for value
            valTitleColor: '#000000',   //for color
            allValues: [],              //all values
        }
    }
  
    setValTitleColumn = (e) => {
        this.setState({
            valTitleColumn: e.target.value
        })
    } 
    setValTitleNumber = (e) => {
        this.setState({
            valTitleNumber: e.target.value
        })
    } 
    setValTitleColor = (e) => { 
        this.setState({
            valTitleColor: e.target.value
        })
    } 

    //set state 
    addNewValue = () => {
        const { valTitleColumn, valTitleNumber, valTitleColor } = this.state;
        
        if(valTitleColumn == false || valTitleNumber == false ){
            alert('Uzupełnij pola')
        } else if(valTitleNumber > 100){
            alert('Wartość nie może przekraczać 100')
        } else {
            let final = [];
            final.push(valTitleColumn, valTitleNumber, valTitleColor);

            //set state
            let arrVal = this.state.allValues;
            arrVal.push(final)
            this.setState({
                valTitleColumn: '',
                valTitleNumber: '',
                valTitleColor: '#000000',
                allValues: arrVal
            })
        }
    }

    //delete new values
    deleteEl = (elem) => {
        this.setState({
            allValues: this.state.allValues.filter(el => el != elem)
        })
    }
    //previous
    showPrevElement = () => {
        if(typeof this.props.fnCloseElement == 'function'){
            this.props.fnCloseElement()
        }
    }
    //next
    printDiagram = () => {
        if(this.state.allValues == false){
            alert('Dodaj pola do wykresu')
        } else {
        if(typeof this.props.fnAddValue == 'function'){
            this.props.fnAddValue(this.state.allValues)
            }
        }
    }
    render(){
        const { valTitleColumn, valTitleNumber, valTitleColor, allValues }= this.state;
        return (
            <div className="app-nav-el-values">
                <div className="nav-el-values">
                    <label htmlFor="titleColumn">
                        <input maxLength="20" onChange={this.setValTitleColumn} value={valTitleColumn} id="titleColumn" type="text"></input>
                        Nazwa:
                    </label>
                    <label htmlFor="titleNumber">
                        <input type="number" maxLength="3" min="0" max="100" onChange={this.setValTitleNumber} value={valTitleNumber} id="titleNumber" ></input>
                        Wartość:
                    </label>
                    <label htmlFor="titleColor">
                        <input onChange={this.setValTitleColor} value={valTitleColor} id="titleColor" type="color"></input>
                        Kolor
                    </label>
                    <button className="btn-add-value" onClick={this.addNewValue}>Dodaj</button>
                </div>
                <div className="nav-el-chooise">
                {allValues.length != 0 
                ? <p className="title-data-nav">Dane do wykresu:</p>
                : null
                }
                {allValues.map((el,i) => {
                return (
                    <div className="data-nav-el-values" key={el}>{i+1}. 
                        <a className="info-nav-el-values" style={{backgroundColor: el[2]}}>{el[0]} - {el[1]}%</a>
                        <button title="Usuń" className="del-nav-el-values" onClick={() => this.deleteEl(el)}>x</button>
                    </div>
                )})}
                </div>
                <div className="container-btn">
                    <button className="btn-back-main" onClick={this.showPrevElement}>
                        <i className="back-button-icon"></i>
                        Back
                    </button>
                    <button className="btn-next-main" onClick={this.printDiagram}>
                        Rysuj wykres
                        <i className="next-button-icon"></i>
                    </button>
                </div>
            </div>
        )
    }
}


export default ElementCustonValue