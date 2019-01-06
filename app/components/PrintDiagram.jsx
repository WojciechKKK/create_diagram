import React, { Component } from 'react';


class PrintDiagram extends Component{
    constructor(props){
        super(props);
    }
    
    //get from props 'valChoiseDiagram' type of diagram - check how type of diagram you should print !!!
    render(){
        const { dataValues , title} = this.props
        return(
            <div className="app-print">
                <a style={{color: title[1], textAlign: 'center', display: 'block', fontSize: '2.5vw', fontWeight: '800'}}>{title[0]}</a>
                <table style={{backgroundColor: title[2],fontSize: '2vw'}}>
                    <thead></thead>
                    <tbody>
                       {dataValues.map(el => {
                           return <tr key={el[0]}>
                                    <th style={{color: title[3], paddingRight: '1vw'}}>
                                        {el[0]}
                                    </th>
                                    {Array.from({length: el[1]}, (x,i) => <td key={i} style={{backgroundColor: el[2]}}></td>)}
                                    <td style={{color: title[3]}}>{el[1]}</td>
                                </tr>
                       })}
                    </tbody>
                    <tfoot></tfoot> 
               </table><br />
            </div>
        )
    }
}

export default PrintDiagram