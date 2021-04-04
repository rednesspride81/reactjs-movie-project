import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../../store/actions/user.action";
import { withRouter } from "react-router";
import Loading from "../../loading";
class UserDetail extends Component {
  renderBookTicketInfo = () => {
    return this.props.userInfo.thongTinDatVe?.map((ticketInfo, index) => {
      return (
        <div key={index}>
          <p>Giá vé: {ticketInfo.giaVe}</p>
          <p>Mã vé: {ticketInfo.maVe}</p>
          <p>Ngày đặt: {ticketInfo.ngayDat}</p>
          <p>Tên Phim: {ticketInfo.tenphim}</p>
        </div>
      );
    });
  };
  render() {
    const {
      email,
      hoTen,
      loaiNguoiDung,
      maNhom,
      matKhau,
      soDT,
      taiKhoan,
    } = this.props.userInfo;
    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <div className="container">
          <h1 className="text-center">USER DETAIL</h1>
          {/* <p>taiKhoan: {this.props.match.params}</p> */}
          <p>email: {email}</p>
          <p>hoTen: {hoTen}</p>
          <p>loaiNguoiDung: {loaiNguoiDung}</p>
          <p>maNhom: {maNhom}</p>
          <p>matKhau: {matKhau}</p>
          <p>soDT: {soDT}</p>
          <p>taiKhoan: {taiKhoan}</p>
          {this.renderBookTicketInfo()}
        </div>
      );
    }
  }
  componentDidMount() {
    this.props.dispatch(getUserInfo(this.props.match.params));
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.user.userInfo,
    loading: state.common.loading,
  };
};
export default connect(mapStateToProps)(withRouter(UserDetail));
