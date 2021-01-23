import React, { Component } from 'react';

class ButtonFunction extends Component {
    state = {  
    }

    HandleOpenDialog = () => {
        this.props.OpenDialog();
    }

    render() { 
        return (  
            <div className="wp-head-content">
                <div className="title-list">
                    <p>Danh sách khách hàng</p>
                    <div className="wp-btn-add" id="btnAdd">
                        <img src="../content/icon/add.png" />
                        <a href="#" onClick={this.HandleOpenDialog}>Thêm nhân viên</a>
                    </div>
                </div>
                <div className="title-list">
                    <div className="input-search">
                        <div className="input-search--icon">
                            <img src="../content/icon/search.png" />
                        </div>
                        <div className="input-search--txt">
                            <input type="text" placeholder="Tìm kiếm theo mã, Tên khác" />
                        </div>
                    </div>
                    <div className="refresh-icon">
                        <img src="../content/icon/refresh.png" />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ButtonFunction;