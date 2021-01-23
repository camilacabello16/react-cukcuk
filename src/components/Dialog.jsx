import React, { Component } from 'react';

class Dialog extends Component {
    state = {  
        employeeInfo: {}
    }

    componentWillMount = () => {
        this.setState({
            employeeInfo: this.props.employee
        })
    }

    CloseDialog = () => {
        this.props.CloseDialog();
    }

    render() { 
        let {employeeInfo} = this.state;
        let className = 'm-dialog';
        if(this.props.isOpenDialog == true){
            className += ' display-form';
        }
        return (  
            <div id="mDialog" className={className}>
                <div className="dialog-header">
                    <p>THÔNG TIN NHÂN VIÊN</p>
                    <div className="icon-close-dialog" id="iconCloseForm" onClick={this.CloseDialog}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </div>
                </div>
                <form id="formSubmitEmployee">
                    <div className="dialog-body">
                        <div className="wp-ava-img">
                            <div className="ava-img">
                                <img src="../content/img/default-avatar.jpg" />
                            </div>
                            <div className="ava-txt">
                                <p>(Vui lòng chọn ảnh có định dạng .jpg, .jpeg, .png, .gif.)</p>
                            </div>
                        </div>
                        <div className="wp-inp-content">
                            <div className="inp-content">
                                <div className="inp-content-title">
                                    <p>A. THÔNG TIN CHUNG:</p>
                                    <div className="line-green"></div>
                                </div>
                                <div className="inp-content-input">
                                    <div className="content-input-item">
                                        <label>Mã nhân viên (<span className="reqiure-input">*</span>)</label>
                                        <input type="text" placeholder="Nhập mã nhân viên..." id="employeeCode" name="EmployeeCode" value={employeeInfo.code}/>
                                    </div>
                                    <div className="content-input-item">
                                        <label>Họ và tên (<span className="reqiure-input">*</span>)</label>
                                        <input type="text" placeholder="Nhập họ tên..." id="employeeFullName" name="FullName" />
                                    </div>
                                    <div className="content-input-item">
                                        <label>Ngày sinh</label>
                                        <input type="date" id="employeeDateOfBirth" name="DateOfBirth" />
                                    </div>
                                    <div className="content-input-item">
                                        <label>Giới tính</label>
                                        <select id="employeeGender" name="Gender">
                                            <option>Chọn giới tính</option>
                                            <option value="0">Nam</option>
                                            <option value="1">Nữ</option>
                                            <option value="2">Khác</option>
                                        </select>
                                    </div>
                                    <div className="content-input-item">
                                        <label>Số CMTND/ Căn cước (<span className="reqiure-input">*</span>)</label>
                                        <input type="text" placeholder="Nhập CMTND/ Căn cước..." id="employeeId" name="IdentifyNumber" />
                                    </div>
                                    <div className="content-input-item">
                                        <label>Ngày cấp</label>
                                        <input type="date" id="employeeReleaseId" name="ReleaseDay" />
                                    </div>
                                    <div className="content-input-item">
                                        <label>Nơi cấp</label>
                                        <input type="text" placeholder="Nhập nơi cấp..." id="employeeReleasePlace" name="ReleaseLocation" />
                                    </div>
                                    <div className="content-input-item">
                                        <label>Email (<span className="reqiure-input">*</span>)</label>
                                        <input type="email" placeholder="Nhập email..." id="employeeEmail" name="Email" />
                                    </div>
                                    <div className="content-input-item">
                                        <label>Số điện thoại (<span className="reqiure-input">*</span>)</label>
                                        <input type="text" placeholder="Nhập số điện thoại..." id="employeePhoneNumber" name="PhoneNumber" />
                                    </div>
                                </div>
                            </div>
                            <div className="inp-content-bot">
                                <div className="inp-content-title">
                                    <p>B. THÔNG TIN CÔNG VIỆC:</p>
                                    <div className="line-green"></div>
                                </div>
                                <div className="inp-content-input">
                                    <div className="content-input-item">
                                        <label>Vị trí</label>
                                        <select id="selectPosition" name="PositionId">
                                            <option>Chọn vị trí</option>
                                        </select>
                                    </div>
                                    <div className="content-input-item">
                                        <label>Phòng ban</label>
                                        <select id="selectDepartment" name="DepartmentId">
                                            <option>Chọn phòng ban</option>
                                        </select>
                                    </div>
                                    <div className="content-input-item">
                                        <label>Mã số thuế cá nhân</label>
                                        <input type="text" placeholder="Nhập mã số thuế..." id="employeeTaxNumber" name="TaxNumber" />
                                    </div>
                                    <div className="content-input-item">
                                        <label>Mức lương cơ bản</label>
                                        <input type="text" placeholder="Nhập mức lương cơ bản..." id="employeeSalary" name="Salary" />
                                    </div>
                                    <div className="content-input-item">
                                        <label>Ngày gia nhập công ty</label>
                                        <input type="date" id="employeeJoinDate" name="JoinDate" />
                                    </div>
                                    <div className="content-input-item">
                                        <label>Tình trạng công việc</label>
                                        <select id="employeeStatusJob" name="StatusJob">
                                            <option value="1">Đang làm việc</option>
                                            <option value="0">Đã nghỉ</option>
                                        </select>
                                    </div>
                                    <input type="hidden" id="employeeGuidId" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dialog-btn">
                        <div className="wp-btn-commit">
                            <button type="submit" className="btn-submit btn-commit" id="btnCommit">Lưu</button>
                        </div>
                        <div className="wp-btn-cancel" id="btnCancel">
                        Xóa
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Dialog;