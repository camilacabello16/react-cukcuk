import React, { Component } from 'react';

class Pagination extends Component {
    state = {  }
    render() { 
        return (  
            <div className="table-pagination">
                <div className="customer-visible">
                    <p>Hiển thị 1-10/1000 nhân viên</p>
                </div>
                <div className="pagination-number">
                    <div className="arrow-back">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-left"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>
                    </div>
                    <div className="arrow-back">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </div>
                    <div className="wp-pagi-nb">
                        <div className="pagi-nb pagi-num-active">1</div>
                        <div className="pagi-nb">2</div>
                        <div className="pagi-nb">3</div>
                        <div className="pagi-nb">4</div>
                    </div>
                    <div className="arrow-back">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                    <div className="arrow-back">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>
                    </div>

                </div>
                <div className="customer-visible-last">
                    <p>10 nhân viên/trang</p>
                </div>
            </div>
        );
    }
}
 
export default Pagination;