

import { useState } from "react";

const PropertyDescriptions = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <>
      <p className="mb25">

      </p>
      <p className={click ? "gpara second_para white_goverlay mt10 mb10" : ""}>
        
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <p className="mt10 mb10">
          Giải đấu Liên Quân Mobile thường niên do Tây Thạnh Junior tổ chức là sự kiện thể thao điện tử quy mô lớn nhất khu vực, 
          nơi quy tụ những đội tuyển hàng đầu và các tuyển thủ xuất sắc từ cả trường THPT Tây Thạnh và các trường lân cận. Với sức hút mạnh mẽ 
          từ cộng đồng game thủ, giải đấu không chỉ là sân chơi cạnh tranh đầy kịch tính mà còn là dịp để người hâm mộ chiêm ngưỡng những màn 
          trình diễn kỹ năng đỉnh cao và chiến thuật thông minh. Được tổ chức hàng năm, sự kiện này đã trở thành một biểu tượng của Tây Thạnh Junior,
           góp phần khẳng định vị thế của Liên Quân Mobile trong khu vực quận Tân Phú và làng game quốc tế.
          </p>
          <p className="mt10 mb10">
          Mỗi năm, giải đấu thu hút sự tham gia của những đội tuyển mạnh nhất từ trường THPT Tây Thạnh, THPT Bình Hưng Hòa, THPT Lê Trọng Tấn và THPT Trần Phú, 
          tạo nên những trận đấu đầy kịch tính và hấp dẫn.
          </p>
          <p className="mt10 mb10">
          Không chỉ là nơi phô diễn kỹ năng cá nhân của từng tuyển thủ, giải đấu còn là đấu trường của sự đoàn kết và chiến thuật tập thể, mang đến những khoảnh khắc 
          bùng nổ và cảm xúc thăng hoa. 
          </p>
        </div>
      </div>
      <p className="overlay_close">
        <a
          className="text-thm fz14"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={handleClick}
        >
          Show More <span className="flaticon-download-1 fz12"></span>
        </a>
      </p>
    </>
  );
};

export default PropertyDescriptions;
