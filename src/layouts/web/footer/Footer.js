/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "~/assets/images/logo/DinhKhanh.png";
import "./Footer.scss";
class Footer extends React.Component {
  state = {};
  render() {
    return (
      <div id="footer">
        <div className="phone-contact">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="phone-contact-detail">
            <p className="phone_contact-message">
              Gọi mua hàng ngay hỗ trợ từ 8h - 17h
            </p>
            <a className="footer-phone" href="">
              0339595905
            </a>
            <p>
              Địa chỉ: 34/7b, Đường số 34, P. Linh Đông, TP. Thủ Đức, Tp.HCM
            </p>
          </div>
        </div>
        <div className="footer-link">
          <div className="footer_link-member">
            <a href="">Bảo hành</a>
          </div>
          <span></span>
          <div className="footer_link-member">
            <a href="">Đổi trả</a>
          </div>
          <span></span>
          <div className="footer_link-member">
            <a href="">Bảo mật</a>
          </div>
          <span></span>
          <div className="footer_link-member">
            <a href="">Điều khoản</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
