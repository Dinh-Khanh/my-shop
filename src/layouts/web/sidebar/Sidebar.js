/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "./Sidebar.scss";
class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className="page-sidebar">
        <div className="product-portfolio">
          <h4>Danh mục sản phẩm</h4>
          <div className="page_sidebar-list">
            <a className="product-classify" href="">
              Áo mưa tiện lợi
            </a>
            <a className="product-classify" href="">
              Áo mưa cánh dơi
            </a>
            <a className="product-classify" href="">
              Áo mưa bộ
            </a>
            <a className="product-classify" href="">
              Áo mưa bít
            </a>
            <a className="product-classify" href="">
              Áo mưa phản quang
            </a>
            <a className="product-classify" href="">
              Áo mưa măng tô
            </a>
          </div>
        </div>
        <div className="connection-shop">
          <h4>Kết nối với shop</h4>
          <div className="contact-list page_sidebar-list">
            <a href="https://www.facebook.com/Qingkaa">
              <i className="fab fa-facebook-square facebook-icon"></i>
              <p>Lê Đình Khánh</p>
            </a>
            <a href="https://www.facebook.com/bkufcphumy1binhdinh/?ref=pages_you_manage">
              <i className="fas fa-users group-icon"></i>
              <p>Áo mưa Đình Khánh</p>
            </a>
            <a href="https://youtu.be/m_VzFgoXpro">
              <i className="fab fa-youtube youtube-icon"></i>
              <p>Khanh IC</p>
            </a>
          </div>
        </div>
        <div className="other">
          <h4>Khác</h4>
          <div className="other-list page_sidebar-list">
            <a href="">Hướng dẫn mua hàng</a>
            <a href="">Hướng dẫn thanh toán</a>
            <a href="">Kiểm tra đơn hàng</a>
            <a href="">Tuyển dụng</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;
