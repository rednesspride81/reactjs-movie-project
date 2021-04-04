import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./style.scss";

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { menuToggle: false };
  // }
  // changeMenuToggle = () => {
  //   let menuToggle = !this.state.menuToggle;
  //   this.setState({
  //     menuToggle,
  //   });
  // };
  // changeClassMEnuToggle = () => {
  //   if (this.state.menuToggle) {
  //     return " active";
  //   }
  //   return "";
  // };
  render() {
    return (
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <NavLink className="navbar-brand" to="/">
              <img src={Logo} alt="logo" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div
                // className={"navbar-toggler-icon" + this.changeClassMEnuToggle()}
                className="navbar-toggler-icon"
                // onClick={this.changeMenuToggle}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <div
              className={"collapse navbar-collapse"}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" exact="true">
                    Trang Chủ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#showtimes">
                    Lịch Chiếu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#showtimes">
                    Cụm Rạp
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#news">
                    Tin Tức
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login" exact="true">
                    Đăng Nhập
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup" exact="true">
                    Đăng Ký
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
