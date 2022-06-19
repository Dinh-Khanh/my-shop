import React from "react";
import Header from "../../layouts/web/header/Header";
import Footer from "~/layouts/web/footer/Footer";
import Sidebar from "~/layouts/web/sidebar/Sidebar";
import Home from "~/components/web/home/Home";
class Web extends React.Component {
  render() {
    return (
      <div className="Web">
        <Header />
        <div id="page-container">
          <div className="page">
            <Sidebar />
            <Home />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Web;
