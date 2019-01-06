import React, { Component } from 'react';

class SettingsDiagram extends Component{
    constructor(){
        super();
        this.state = {
            titleValInput: 'Title diagram',     //title diagram
            colorTekstValInput: '#000000',      //title color
            bcgkColorValInput: '#FFFFFF',       //bcgk color
            fontColorValInput: '#000000',       //font color
            allValues: [],                      //all val for parent
        }
    }
    //for input title
    setValTitle = (e) => {
        this.setState({
            titleValInput: e.target.value
        })
    }
    //for input title color
    setValTekstColor = (e) => {
        this.setState({
            colorTekstValInput: e.target.value
        })
    }
    //for input bcgk color
    setValBcgkColor = (e) => {
        this.setState({
            bcgkColorValInput: e.target.value
        })
    }
    //for input font color
    setValFontColor = (e) => {
        this.setState({
            fontColorValInput: e.target.value
        })
    }

    //set all value to state
    addValueFromElement = () => {
        const { titleValInput, colorTekstValInput, bcgkColorValInput,  fontColorValInput } = this.state
        let final = this.state.allValues;
        final.push(titleValInput, colorTekstValInput, bcgkColorValInput,  fontColorValInput);
        this.setState({
            allValues: final
        })
       //console.log(this.state.allValues)
    }

    //close SettingsDiagram -> from parent
    closeThisElement = () => {
        if(this.state.titleValInput == 'Title diagram'){
            alert('Uzupełnij tytuł diagramu')
        } else {
        //set state with value
        this.addValueFromElement();
        //parents function:
        if(typeof this.props.fnCloseElement == 'function'){
            //send values
            this.props.fnSetValue(this.state.allValues)
            //hide element
            this.props.fnCloseElement();
            }
        }
    }

    // show previous element ->  from parent
    showBackThisElement = () => {
        if(typeof this.props.fnShowPrevEl == 'function'){
            this.props.fnShowPrevEl('');
        }
    }
    render(){
        const { titleValInput, colorTekstValInput, bcgkColorValInput, fontColorValInput, } = this.state
        return(
                <div className="setting-view">

                {/* <img src="https://img.icons8.com/ultraviolet/40/000000/new-presentation.png"></img>
                <img src="https://img.icons8.com/ultraviolet/40/000000/bulleted-list.png"></img>
                <img src="https://img.icons8.com/ultraviolet/40/000000/one-to-one.png"></img> */}

                    <label htmlFor="title">Tytuł:
                        <input id="title"  onChange={this.setValTitle} val={titleValInput} type="text"></input>
                        <input id="color" onChange={this.setValTekstColor} val={colorTekstValInput} type="color"></input>
                    </label>
                    <div className="setting-view-element">
                        <label htmlFor="bcgkColor">Tło wykresu:
                            <input id="bcgkColor" onChange={this.setValBcgkColor} val={bcgkColorValInput} type="color"></input>
                        </label>
                        <label htmlFor="fontColor">Kolor czcionki:
                            <input id="fontColor" onChange={this.setValFontColor} val={fontColorValInput} type="color"></input>
                        </label>
                    </div>
                    <div className="container-btn">
                        <button className="btn-back-main" onClick={this.showBackThisElement}>
                            <i className="back-button-icon"></i>
                            Back
                        </button>
                        <button className="btn-next-main" onClick={this.closeThisElement}>
                            Next
                            <i className="next-button-icon"></i>
                        </button>
                    </div>
                </div>
        )
    }
}

export default SettingsDiagram