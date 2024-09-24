import ContactWithAgent from "../common/agent-view/ContactWithAgent";
import Categorie from "../common/listing/Categorie";
import ListingCreator from "../common/listing/ListingCreator";
import FeaturedListings from "../common/listing/FeaturedListings";
import FeatureProperties from "../common/listing/FeatureProperties";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar_listing_list">
        <div className="sidebar_advanced_search_widget">
          <div className="sl_creator">
            <h4 className="mb25">Liên hệ</h4>
          </div>
          {/* End .sl_creator */}
          <ContactWithAgent />
        </div>
      </div>
      {/* End .sidebar_listing_list */}

      <div className="terms_condition_widget">
        <h4 className="title">Liên quan</h4>
        <div className="sidebar_feature_property_slider">
          <FeatureProperties />
        </div>
      </div>
      {/* End .Featured Properties */}



    </>
  );
};

export default Sidebar;
