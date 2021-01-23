import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Table from './components/Table';
import Dialog from './components/Dialog';

class App extends Component {
  state = {  
      isOpenDialog: false,
      isAdd: false,
      employee: {}
  }

  ClickOpenDialog = () => {
    this.setState({
        isOpenDialog: true,
        isAdd: true
    })
  }

  HandleCloseDialog = () => {
    this.setState({
        isOpenDialog: false
    })
  }

  HandleOpenEmployeeInfo = (employeeInfo) => {
    console.log(1);
    this.setState({
        isOpenDialog: true,
        employee: employeeInfo,
        isAdd: false
    })
  }

  render() { 
    let classInsert = 'insert-opacity';
    if(this.state.isOpenDialog == true){
        classInsert += ' display-form'
    }
    return ( 
        <React.Fragment>
            <div className="wp-page">
                <Menu />
                <div className="page-right">
                    <Header />
                    <Table  
                        OpenDialog={this.ClickOpenDialog}
                        OpenEmployeeInfo={this.HandleOpenEmployeeInfo}
                    />
                </div>
            </div>
            <div className={classInsert} id="insertOpacity"></div>
            <Dialog 
                employee={this.state.employee}
                isOpenDialog={this.state.isOpenDialog} 
                CloseDialog={this.HandleCloseDialog} 
            />
        </React.Fragment>
    );
  }
}
 
export default App;
