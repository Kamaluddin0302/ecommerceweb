import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView} from

"mdbreact";
import Fristimage from './../../images/TB1eUFXd5_1gK0jSZFqXXcpaXXa.jpg_1200x1200Q100.jpg'
import Secondimage from './../../images/seccondimage.jpg'
import Thirdimage from './../../images/thirdimage.jpg'

const CarouselPage = () => {
  return (
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src= {Secondimage}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src= { Thirdimage}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={Fristimage}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
  );
}

export default CarouselPage;