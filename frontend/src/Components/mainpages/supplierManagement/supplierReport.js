import React, { Component } from 'react';
import Reportsupplier from './Reportsuppliertable';
import ReactToPrint from 'react-to-print';
export default class example extends Component {
    render() {
        return (
            <div>
                
                <div>
              <ReactToPrint
                trigger={() => {
                  
                  return  <button style={{marginLeft:1055, marginTop:50, background: "#072344"}} className="btn btn-secondary" onClick={this.generatepdf1} type='submit'>Generate PDF</button>
                }}
                content={() => this.componentRef}
              />
              <Reportsupplier ref={el => (this.componentRef = el)} />
            </div>
            </div>
        )
    }
}