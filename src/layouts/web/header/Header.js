/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.scss";
import logo from "~/assets/images/logo/DinhKhanh.png";

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div className="header-wrapper">
          <div className="logo">
            <img className="logo-img" src={logo} alt="" />
          </div>
          <div className="search">
            <i className="fas fa-search search-icon"></i>
            <input
              className="search-main"
              placeholder="Tìm kiếm sản phẩm trên KhanhShop..."
            ></input>
          </div>
          <div className="cart">
            <i className="fas fa-shopping-cart cart-icon header-icon"></i>
            <p>Giỏ hàng</p>
          </div>
          <div className="user">
            <i className="far fa-user user-icon header-icon"></i>
            <p>Tài khoản</p>
          </div>
        </div>

        <div className="subheader-container">
          <div className="subheader">
            <div className="nav">
              <a href="#">Trang chủ</a>
              <a href="#">Blog</a>
              <a href="#">Giới thiệu</a>
              <a href="#">Hệ thống cửa hàng</a>
            </div>
            <div className="email">
              <i className="fas fa-envelope email-icon subnav-icon"></i>
              <a href="mailto:khanh.le.6739@hcmut.edu.vn">
                khanh.le.6739@hcmut.edu.vn
              </a>
            </div>
            <div className="phone">
              <i className="fas fa-phone-alt phone-icon subnav-icon"></i>
              <a href="tel:0339595905">0339595905</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
