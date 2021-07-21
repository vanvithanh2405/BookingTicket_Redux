import React, { Component } from 'react';
import './BookingTicket.css';
import SeatInfo from './SeatInfo';
import SeatList from './SeatList';
import danhSachGheData from './../Data/danhSachGhe.json'
export default class BookingTicket extends Component {


    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
            return <div key={index} >
                <SeatList hangGhe={hangGhe} soHangGhe={index} />
            </div>
        })
    }







    render() {
        return (
            <div className="bookingMovie" style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: "url(./img/bgmovie.jpg)", backgroundSize: '100%' }}>
                <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)' }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8 text-center">
                                <div className="text-warning display-4">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
                                <div className="mt-2 text-light" style={{ fontSize: '30px', marginRight:'19rem' }}>Màn hình</div>
                                <div className="mt-2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <div className="screen"></div>
                                    {this.renderHangGhe()}
                                </div>
                                
                            </div>

                            <div className="col-4">
                                <div style={{ fontSize: '40px' }} className="text-light mt-2" >DANG SÁCH GHẾ BẠN CHỌN</div>
                                <SeatInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
