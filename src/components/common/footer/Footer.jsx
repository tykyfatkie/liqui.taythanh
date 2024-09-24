import { Link } from "react-router-dom";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
        <div className="footer_about_widget">
          <h4>About Site</h4>
          <p>
            Đây là website gồm các thông tin của giải Liên Quân Mobile trường THPT Tây Thạnh.
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">

      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h4>Liên hệ</h4>
          <ul className="list-unstyled">
            <li>
              <a href="mailto:info@findhouse.com">Email: taythanh.junior@gmail.com</a>
            </li>
            <li>
              <a href="#">Địa chỉ: Trường THPT Tây Thạnh, P.Tây Thạnh, Q.Tân Phú, TP.HCM</a>
            </li>
            <li>
              <a href="tel:+8417591280">SĐT: 0817591280</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_social_widget">
          <h4>Fanpage</h4>
          <ul className="mb30">
            <Social />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
