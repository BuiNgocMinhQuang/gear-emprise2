import "./index.scss";
import "../../components/GlobalStyles/GlobalStyle.scss";
import image1 from "../../assets/images/image-home.jpeg";
import Button from "react-bootstrap/Button";
import "./Carousel";
import CarouselContainer from "./Carousel";
import MenuBody from "./MenuBody";
import Review from "./Review";
import Service from "./Service";
function Home() {
  return (
    <div className="homepage">
      <CarouselContainer />
      <MenuBody />
      <Review />
      <div className="image-home">
        <img src={image1} alt="" />
        <div className="content">
          <h1>PLAY NOW, PAY LATER</h1>
          <p>
            Easy Pre-Approved Online Financing Available On All Systems For
            Qualifying Customers
          </p>
          <Button variant="outline-secondary" className="btn-shopnow">
            LEARN MORE
          </Button>
        </div>
      </div>
      <div className="container-default">
        <Service />
      </div>
    </div>
  );
}

export default Home;
