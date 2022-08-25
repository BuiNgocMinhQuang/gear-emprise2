import "./Service.scss";
import service1 from "../../../assets/images/service1.png";
import service2 from "../../../assets/images/service2.png";
import service3 from "../../../assets/images/service3.png";
function Service() {
  return (
    <div className="wrapper">
      <div className="item-service">
        <img src={service1} alt="" />
        <div className="content">
          <h1>FINANCING</h1>
          <h2>Play Now and Pay Later</h2>
          <p className="desktop">
            Once you join us, we will have you covered. With every system,
            ORIGIN PC provides a free phone and online lifetime service
            guarantee.
          </p>
          <p className="moible">
            Once you join us, we will have you covered. With every system,...
          </p>
        </div>
      </div>

      <div className="item-service">
        <img src={service2} alt="" />
        <div className="content">
          <h1>AFFILIATES</h1>
          <h2>Join the Best</h2>
          <p className="desktop">
            Once you join us, we will have you covered. With every system,
            ORIGIN PC provides a free phone and online lifetime service
            guarantee.
          </p>
          <p className="moible">
            Once you join us, we will have you covered. With every system,...
          </p>
        </div>
      </div>

      <div className="item-service">
        <img src={service3} alt="" />
        <div className="content">
          <h1>SUPPORT</h1>
          <h2>24/7 Based Support</h2>
          <p className="desktop">
            Once you join us, we will have you covered. With every system,
            ORIGIN PC provides a free phone and online lifetime service
            guarantee.
          </p>
          <p className="moible">
            Once you join us, we will have you covered. With every system,...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
