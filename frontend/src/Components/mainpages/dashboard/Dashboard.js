import React, {Component} from 'react';
import '../../../Styles/sidebar.css';

export default class Dashboard extends Component {

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 style={{marginLeft:295}}>Dashboard</h2>
                </div>

            </div>
        )
        
    }

}
