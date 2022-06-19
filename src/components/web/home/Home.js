import { Component } from "react";
import banner from "~/assets/images/slider/slider-img.jpg";
import productImg from "~/assets/images/product-img/Áo-Mưa-Cánh-Dơi-Vải-Dù-Tổ-Ong-scaled.jpg";
import "./Home.scss";
import axios from "axios";
class Home extends Component {
  state = {
    response: [
      {
        id: 0,
        createdDate: null,
        modifiedDate: null,
        createdBy: null,
        moddifiedBy: null,
        name: "",
        description: "",
        price: 0,
        categoryId: 0,
      },
    ],
  };
  componentDidMount() {
    this.loadProduct();
  }
  loadProduct = async () => {
    axios
      .get(
        "https://9440-42-112-81-198.ap.ngrok.io/my-shop-backend/api-product?categoryid=2"
      )
      .then((res) => {
        console.log(res);
        const persons = res.data;
        this.setState({ persons });
      });
  };
  render() {
    const product = Object.keys(this.state.response).map((key) => {
      return (
        <div className="product-member" key={key}>
          <div className="product_member-img">
            <img src={productImg} alt="" />
          </div>
          <div className="product_member-description">
            <p className="product_member-text">{key.description}</p>
            <span className="product_member-price">{key.price}</span>
          </div>
        </div>
      );
    });
    return (
      <div className="page-main">
        <div className="page_main-slider">
          <img className="slider-img" src={banner} alt="" />
        </div>
        <div className="page_main-product">
          <h4>Sản phẩm mới</h4>
          <div className="product-list">{product}</div>
        </div>
      </div>
    );
  }
}

export default Home;
