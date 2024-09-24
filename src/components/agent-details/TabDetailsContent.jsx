import Team from "../agent-view/agent-v2/Team";
import Comments from "../blog-details/Comments";
import Ratings from "../blog-details/Ratings";
import ReviewBox from "../blog-details/ReviewBox";
import DescriptionsText from "./DescriptionsText";
import Listings from "./Listings";

const TabDetailsContent = () => {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#description"
            role="tab"
            aria-controls="description"
            aria-selected="true"
          >
            Thông tin
          </a>
        </li>
        {/* End Description tab */}


        {/* End Listing tab */}


        {/* End Listing tab */}

        {/* End Reviews tab */}
      </ul>
      {/* End .nav nav-tabs */}

      <div className="tab-content" id="myTabContent2">
        <div
          className="tab-pane fade show active"
          id="description"
          role="tabpanel"
        >
          <div className="product_single_content">
            <div className="mbp_pagination_comments">
              <div className="mbp_first media">
                <div className="media-body agent-desc">
                  <DescriptionsText />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Description details content*/}


        {/* End Listing details content*/}

        <div
          className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
          id="agetns"
          role="tabpanel"
        >
          <div className="row  mt30">
            <Team />
          </div>
        </div>
        {/* End aget team content*/}

        <div className="tab-pane fade" id="review" role="tabpanel">
          <div className="product_single_content">
            <div className="mbp_pagination_comments">

              {/* End .total_review */}
              <Comments />
              <div className="custom_hr"></div>

              <div className="mbp_comment_form style2">
                <h4>Write a Review</h4>
                <ul className="review_star">
                  <li className="list-inline-item">
                    <span className="sspd_review">
                      <ul>
                        <Ratings />
                      </ul>
                    </span>
                  </li>
                  <li className="list-inline-item pr15">
                    <p>Your Rating & Review</p>
                  </li>
                </ul>
                <ReviewBox />
              </div>
            </div>
          </div>
        </div>
        {/* End Reviews details content*/}
      </div>
      {/* End tab-content */}
    </>
  );
};

export default TabDetailsContent;
