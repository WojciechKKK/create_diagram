import React, { Component } from 'react'
import ElementCustonValue from './ElementCustonValue.jsx'
import SettingsDiagram from './SettingsDiagram.jsx'
import PrintDiagram from './PrintDiagram.jsx'
import SelectDiagram from './SelectDiagram.jsx'

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            showSettingsDiagram: false,            //show TitleColor Comp
            valOptions: [],                   // value from TitleColor Comp
            valElementCustom: [],             //value from ElementCustomValue
            valChoiceDiagram: '',           //value from Choose Diagram Comp
            showElementCustomValue: false,      //show ElementCustomValue Comp
            showChoiseDiagram: true,           // show select
            showPrintDiagram: false           // show PrintDiagram Comp
        }
    }
    
    //function parent's - delete nav element
    deleteThisElement = () => { 
        if(typeof this.props.fnDelElement == 'function'){
            this.props.fnDelElement(this.props.element)
        };
    }

    //add val options to state
    setOptions = (elem) => {
        this.setState({
            valOptions: this.state.valOptions.concat(elem)
        })
    }

    //add val name to state from children 
    addValueFromElement = (elem) => {
        this.setState({
            valElementCustom: this.state.valElementCustom.concat(elem),
            showPrintDiagram: !this.state.showPrintDiagram,
            showElementCustomValue: !this.state.showElementCustomValue
        });
    }

    //close || show ChoiseDiagram and set value: empty || full
    closeChoiseDiagram = (param) => {
        this.setState({
            showChoiseDiagram: !this.state.showChoiseDiagram,
            showSettingsDiagram: !this.state.showSettingsDiagram,
            valChoiceDiagram: param
        });
        //set active element from nav
        if(param == ''){
            this.checkActiveNav(1,0)
        } else {
            this.checkActiveNav(0,1)
        }
    }

    //close TitleColor component
    closeSettingsDiagram = () => { 
        this.setState({
            showSettingsDiagram: !this.state.showSettingsDiagram,
            showElementCustomValue: !this.state.showElementCustomValue
        });
        this.checkActiveNav(1,2)
    }

   //close ElementCustomValue component
    closeElementCustomValue = () => { 
        this.setState({
            showElementCustomValue: !this.state.showElementCustomValue,
            showSettingsDiagram: !this.state.showSettingsDiagram,
            valOptions: []
        });
        this.checkActiveNav(2,1)
    }
    
    checkActiveNav = (remove, add) => {
        let allMain = document.getElementById(`${this.props.element}`); //find Main
        let allNavEl = allMain.getElementsByClassName('main-nav-el-text');
        allNavEl[remove].classList.remove('active-main-nav-el');
        allNavEl[add].classList.add('active-main-nav-el');
    }

    render(){
        const { showSettingsDiagram, showElementCustomValue, valElementCustom, valOptions, showChoiseDiagram, showPrintDiagram, valChoiceDiagram } = this.state
        return( 
            <main id={this.props.element} className="app-main">
                {
                    showPrintDiagram
                    ? <PrintDiagram dataValues={valElementCustom} title={valOptions} fnDeleteEl={this.deleteThisElement} valChoiseDiagram={valChoiceDiagram} />
                    : <div className="main-nav-el">
                        <div className="main-nav-el-text active-main-nav-el">Wybór diagramu</div>
                        <div className="main-nav-el-text">Wygląd</div>
                        <div className="main-nav-el-text">Wartości</div>
                    </div>
                }
                <div className="main-nav-comp">
                    {
                        showChoiseDiagram
                        ? <SelectDiagram fnCloseElement={this.closeChoiseDiagram}/>
                        : null
                    }
                    {
                        showSettingsDiagram
                        ? <SettingsDiagram fnCloseElement={this.closeSettingsDiagram} fnShowPrevEl={this.closeChoiseDiagram} fnSetValue={this.setOptions} />
                        : null
                    } 
                    {
                        showElementCustomValue
                        ? <ElementCustonValue fnCloseElement={this.closeElementCustomValue} fnAddValue={this.addValueFromElement} />
                        : null
                    }
                 </div>
                 <div className="btn-del-main" onClick={this.deleteThisElement}>x</div>
            </main>
        )
    }
}







export default Main
































// class ShowDiagram extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             print: false,
//             propsForPrint: []
//         }
//     }

//     deleteValueElement = (elem) => {
//         if(typeof this.props.fnDeleteValue == 'function'){
//             this.props.fnDeleteValue(elem)
//         }
//     }

//     showPrint = () => {
//         this.setState({
//             print: !this.state.print,
//             propsForPrint: this.props.data
//         })
//     }

//     render(){
//         const { print, propsForPrint }= this.state
//         return(
//             <div>
//                 <div>
//                     Dane:
//                     {this.props.data.map((el,i) => {
//                     return <div key={el[0]}>{i+1}.
//                         <a style={{color: el[2]}}>Nazwa: {el[0]}, Wartość: {el[1]}</a>
//                         <button onClick={() => this.deleteValueElement(el)}>delete</button>
//                         </div>
//                     })}
//                 </div>
               
//                 {
//                     print
//                     ?  <PrintDiagram dataValues={propsForPrint} />
//                     :  <button onClick={this.showPrint}>Print</button>
//                 }
                

               
//             </div>
//         )
//     }
// }

