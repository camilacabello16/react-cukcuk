import React, { Component } from 'react';

class Menu extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="page-left">
                <div className="menu-logo">
                    <div className="menu-logo__icon"></div>
                    <div className="menu-logo__img"></div>
                </div>
                <div className="menu-list">
                    <div className="menu-list__item">
                        <div className="menu-list__item--icon">
                            <img src="../content/icon/dashboard.png" />
                        </div>
                        <div className="menu-list__item--txt">Tổng quan</div>
                    </div>
                    <div className="menu-list__item">
                        <div className="menu-list__item--icon">
                            <img src="../content/icon/report.png" />
                        </div>
                        <div className="menu-list__item--txt">Báo cáo</div>
                    </div>
                    <div className="menu-list__item">
                        <div className="menu-list__item--icon">
                            <img src="../content/icon/dashboard.png" />
                        </div>
                        <div className="menu-list__item--txt">Mua hàng</div>
                    </div>
                    <div className="menu-list__item">
                        <div className="menu-list__item--icon">
                            <img src="../content/icon/dic-employee.png" />
                        </div>
                        <div className="menu-list__item--txt">Danh mục khách hàng</div>
                    </div>
                    <div className="menu-list__item">
                        <div className="menu-list__item--icon">
                            <img src="../content/icon/dic-employee.png" />
                        </div>
                        <div className="menu-list__item--txt">Danh mục khách hàng</div>
                    </div>
                    <div className="menu-list__item">
                        <div className="menu-list__item--icon">
                            <img src="../content/icon/setting.png" />
                        </div>
                        <div className="menu-list__item--txt">Thiết lập hệ thống</div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Menu;