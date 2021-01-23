import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="wp-content-header">
                <div className="content-header">
                    <div className="name-restaurant">
                        <p>Nhà hàng Biển Đông</p>
                    </div>
                    <div className="ava-user">
                        <div className="ava-user--img">
                            <img src="../content/icon/avatar-default.png" />
                        </div>
                        <div className="ava-user--name">
                            <p>Bùi Đức Hiếu</p>
                        </div>
                        <div className="ava-user--icon">
                            <img src="../content/icon/option.png" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Header;