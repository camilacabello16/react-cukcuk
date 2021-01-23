import React, { Component } from 'react';
import Pagination from './Pagination';

class TableEmployee extends Component {
    state = {  
        Employees: [
            {
                id: 0,
                code: 'NV1',
                name: 'Hiếu',
                gender: 'name',
                dateOfBirth: '28-10-2000',
                phone: '0963042088',
                email: 'hieuangel2810@gmail.com',
                position: 'Giám đốc',
                department: 'Kỹ thuật',
                salary: '1000000000',
                status: 'Đang làm việc'
            },
            {
                id: 1,
                code: 'NV2',
                name: 'Hiếu',
                gender: 'name',
                dateOfBirth: '28-10-2000',
                phone: '0963042088',
                email: 'hieuangel2810@gmail.com',
                position: 'Giám đốc',
                department: 'Kỹ thuật',
                salary: '1000000000',
                status: 'Đang làm việc'
            },
            {
                id: 2,
                code: 'NV3',
                name: 'Hiếu',
                gender: 'name',
                dateOfBirth: '28-10-2000',
                phone: '0963042088',
                email: 'hieuangel2810@gmail.com',
                position: 'Giám đốc',
                department: 'Kỹ thuật',
                salary: '1000000000',
                status: 'Đang làm việc'
            },
            {
                id: 3,
                code: 'NV4',
                name: 'Hiếu',
                gender: 'name',
                dateOfBirth: '28-10-2000',
                phone: '0963042088',
                email: 'hieuangel2810@gmail.com',
                position: 'Giám đốc',
                department: 'Kỹ thuật',
                salary: '1000000000',
                status: 'Đang làm việc'
            }
        ]
    }

    OpenEmployeeInfo = () => {
        console.log(this);
        this.props.OpenEmployeeInfo(this.state.Employees[0]);
    }

    render() { 
        return (  
            <div className="wp-table-content">
                <div className="table-content">
                    <table style={{width: '100%'}} className="table-data" border="0" cellSpacing="0" id="table-customer">
                        <thead>
                            <tr>
                                <th>Mã nhân viên</th>
                                <th>Họ và tên</th>
                                <th>Giới tính</th>
                                <th>Ngày sinh</th>
                                <th>Điện thoại</th>
                                <th>Email</th>
                                <th>Chức vụ</th>
                                <th>Phòng ban</th>
                                <th>Mức lương cơ bản</th>
                                <th>Tình trạng công việc</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Employees.map((employee) => 
                                <tr key={employee.id} onClick={this.OpenEmployeeInfo} id={employee.id}>
                                    <td>{employee.code}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.gender}</td>
                                    <td>{employee.dateOfBirth}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.position}</td>
                                    <td>{employee.department}</td>
                                    <td>{employee.salary}</td>
                                    <td>{employee.status}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <Pagination />
            </div>
        );
    }
}
 
export default TableEmployee;