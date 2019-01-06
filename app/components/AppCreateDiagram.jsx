import React, { Component } from 'react'
import Aside from './Aside.jsx'
import Main from './Main.jsx'

const Body = (props) => <div className="app-body">{props.children}</div>
const Header = () => <div className="app-header"><p><i className="prev-diagram"></i>Stwórz własny wykres!<i className="back-diagram"></i></p></div>
const Container = (props) => <div className="container">{props.children}</div> 
const Footer = () => <footer><a href="mailto:test@gmail.com">Contact</a></footer>


class AppCreateDiagram extends Component{
    constructor(){
        super();
        this.state = {
            itemsNav: [],           //for new diagram -> Comp Main
            counter: 0              // fof key -||-
        }
    }
    //add new element Main
    addNewNav = () => {
        let counterPlus = this.state.counter+1 ;
        this.setState({
            counter: counterPlus,
            itemsNav: this.state.itemsNav.concat(counterPlus)
        })
        console.log(this.state.itemsNav)
        console.log(this.state.counter)
    }
    //delete new element Main
    deleteNewNav = (elem) => {
        this.setState({
            itemsNav: this.state.itemsNav.filter(el => el != elem)
        })
    }
    render(){
        const { itemsNav } = this.state
        return (
            <Body>           
                <Header />
                <Aside fnAddElement={this.addNewNav} />
                <Container>
                    {itemsNav.map(el => <Main key={el} element={el} fnDelElement={this.deleteNewNav}/> )}
                </Container>
                <Footer />
            </Body>
        )
    }
}


export default AppCreateDiagram