import React, { Component } from 'react';
import ItemReportTable from './ItemReportTable';
import ReactToPrint from 'react-to-print';
export default class example extends Component {
    render() {
        return (
            <div>
                
                <div>
              <ReactToPrint
                trigger={() => {
                  
                  return  <button style={{marginLeft:1055, marginTop:50, background: "#072344"}} className="btn btn-secondary" onClick={this.generatepdf} type='submit'>Generate PDF</button>
                }}
                content={() => this.componentRef}
              />
              <ItemReportTable ref={el => (this.componentRef = el)} />
            </div>
            </div>
        )
    }
}