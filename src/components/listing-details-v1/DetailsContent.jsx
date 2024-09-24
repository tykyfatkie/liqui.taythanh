import Comments from "../blog-details/Comments";
import Ratings from "../blog-details/Ratings";
import ReviewBox from "../blog-details/ReviewBox";
import AdditionalDetails from "../common/listing-details/AdditionalDetails";
import Attachments from "../common/listing-details/Attachments";
import FloorPlans from "../common/listing-details/FloorPlans";
import PropertyDescriptions from "../common/listing-details/PropertyDescriptions";
import PropertyDetails from "../common/listing-details/PropertyDetails";
import PropertyFeatures from "../common/listing-details/PropertyFeatures";
import PropertyItem from "../common/listing-details/PropertyItem";
import PropertyLocation from "../common/listing-details/PropertyLocation";
import PropertyVideo from "../common/listing-details/PropertyVideo";
import WalkScore from "../common/listing-details/WalkScore";
import WhatsNearby from "../common/listing-details/WhatsNearby";

const DetailsContent = () => {
  return (
    <>
      <div className="listing_single_description">

        <h4 className="mb30">Giới thiệu về giải đấu</h4>
        <PropertyDescriptions />
      </div>
      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Thông tin giải đấu</h4>
          </div>
          <AdditionalDetails />
        </div>
      </div>


      <div className="shop_single_tab_content style2 mt30">
        <PropertyVideo />
      </div>
      {/* End property-video  */}
    </>
  );
};

export default DetailsContent;
