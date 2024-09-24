import Social from "../common/footer/Social";

const AddressSidebar = () => {
  return (
    <div className="contact_localtion">
      <h4>    </h4>
      <p>     </p>
      <div className="content_list">
        <h5>Địa chỉ TTJ Studio</h5>
        <p>
        28/102 đường số 18, phường Bình Hưng Hoà, quận Bình Tân, TP.HCM
        </p>
      </div>
      <div className="content_list">
        <h5>Phone</h5>
        <p>081 759 1280</p>
      </div>
      <div className="content_list">
        <h5>Email</h5>
        <p>taythanh.junior@gmail.com</p>
      </div>
      <div className="content_list">
        <h5>YouTube</h5>
        <p>@taythanh.junior</p>
      </div>
      <h5>Follow Us</h5>
      <ul className="contact_form_social_area">
        <Social />
      </ul>
    </div>
  );
};

export default AddressSidebar;
