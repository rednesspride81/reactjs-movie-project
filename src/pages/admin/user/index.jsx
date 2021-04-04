import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserList } from "../../../store/actions/user.action";
import Loading from "../../loading";
import { withRouter } from "react-router";

class User extends Component {
  handleGetUserDetail = (taiKhoan) => {
    this.props.history.push(`/admin/user-detail/${taiKhoan}`);
  };

  userRender() {
    return this.props.userList.map((user, index) => {
      return (
        <div
          key={index}
          onClick={() => {
            this.handleGetUserDetail(user.taiKhoan);
          }}
        >
          <p>Số: {index}</p>
          <p>Tài Khoản: {user.taiKhoan}</p>
          <p>Họ Tên: {user.hoTen}</p>
          <p>Email: {user.email}</p>
          <p>Sđt: {user.soDt}</p>
          <p>Mật khẩu: {user.matKhau}</p>
          <p>Mã lại người dùng: {user.maLoaiNguoiDung}</p>
          <hr />
        </div>
      );
    });
  }
  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <div>
          <h2>Lấy danh sách user</h2>
          {this.userRender()}
        </div>
      );
    }
  }

  componentDidMount() {
    this.props.dispatch(getUserList());
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.user.userList,
    loading: state.common.loading,
  };
};
export default connect(mapStateToProps, null)(withRouter(User));
