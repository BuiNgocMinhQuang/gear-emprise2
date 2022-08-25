import image1 from "../../../assets/images/menu1.png";
import image2 from "../../../assets/images/menu2.png";
import image3 from "../../../assets/images/menu3.png";
import image4 from "../../../assets/images/menu4.png";
import image5 from "../../../assets/images/menu5.png";
import "./MenuBody.scss";
function MenuBody() {
  return (
    <div className="menu-body">
      <div className="menu-line-1">
        <a href="/gaming-pc" className="item-menu-body">
          <img src={image1} alt="menu1" />
          <p>Gaming Pc</p>
        </a>
        <a href="gaming-laptop" className="item-menu-body">
          <img src={image2} alt="menu2" />
          <p>Gaming laptop</p>
        </a>
        <a href="/gear" className="item-menu-body">
          <img src={image3} alt="menu3" />
          <p>Gearshop</p>
        </a>
      </div>

      <div className="menu-line-2">
        <a href="/accessories" className="item-menu-body">
          <img src={image4} alt="menu4" />
          <p>accessories</p>
        </a>
        <a href="/special-offer" className="item-menu-body">
          <img src={image5} alt="menu5" />
          <p>special offer</p>
        </a>
      </div>
    </div>
  );
}

export default MenuBody;
