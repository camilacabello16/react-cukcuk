import React, { Component } from 'react';
import ButtonFunction from './ButtonFunction';
import TableEmployee from './TableEmployee';

class Table extends Component {
    state = {  }

    HandleOpenDialog = () => {
        this.props.OpenDialog();
    }

    OpenEmployeeInfo = (employeeInfo) => {
        this.props.OpenEmployeeInfo(employeeInfo);
    }

    render() { 
        return (  
            <div className="wp-content-page">
                <ButtonFunction OpenDialog={this.HandleOpenDialog} />
                <TableEmployee OpenEmployeeInfo={this.OpenEmployeeInfo} />
            </div>
        );
    }
}
 
export default Table;