import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../redux/action/BookingTickerAction'
class SeatInfo extends Component {
    render() {
        return (
            <div className="mt-3">
                <button className="gheDuocChon"></button> <span className="text-light ml-4" style={{ fontSize: '30px' }}>Ghế đã đặt</span>
                <br />
                <button className="gheDangChon"></button> <span className="text-light ml-4" style={{ fontSize: '30px' }}>Ghế đang đặt</span>
                <br />
                <button className="ghe" style={{ marginLeft: 0 }}></button> <span className="text-light ml-4" style={{ fontSize: '30px' }}>Ghế chưa đặt</span>

                <div>
                    <table className="table mt-4" border="2">
                        <thead>
                            <tr className="text-light" style={{ fontSize: '25px' }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="text-light" style={{ fontSize: '18px' }}>
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia.toLocaleString()}</td>
                                    <td>
                                        <button onClick={() => {
                                            this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                                        }} className="btn btn-danger">X</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr className="text-warning" style={{ fontSize: '18px' }}>
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>
                                    {this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                        return tongTien += gheDangDat.gia;
                                    },0).toLocaleString()}
                                </td>

                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BookingTicketReducer.danhSachGheDangDat
    }
}


export default connect(mapStateToProps)(SeatInfo)

