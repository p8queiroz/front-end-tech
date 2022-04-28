import {
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  ImageWithZoom,
  Slide,
  Slider,
} from 'pure-react-carousel';
import React from 'react';
//import s from './CarouselPage.scss';

const CarouselPage: React.FC = () => {
  return (
    <CarouselProvider
      visibleSlides={3}
      totalSlides={6}
      step={3}
      naturalSlideWidth={400}
      naturalSlideHeight={500}
      hasMasterSpinner
    >
      <h2 className={'s.headline'}>Carousel (With Master Loading Spinner)</h2>
      <p>
        This spinner will go away after all the images have loaded. You might want to use Chrome dev
        tools to throttle the network connection so you can see the spinner.
      </p>
      <Slider className={'s.slider'}>
        <Slide index={0}>
          <ImageWithZoom src="https://loremflickr.com/640/360" />
        </Slide>
        <Slide index={1}>
          <ImageWithZoom src="https://loremflickr.com/640/360" />
        </Slide>
        <Slide index={2}>
          <ImageWithZoom src="https://loremflickr.com/640/360" />
        </Slide>
        <Slide index={3}>
          <ImageWithZoom src="https://loremflickr.com/640/360" />
        </Slide>
        <Slide index={4}>
          <ImageWithZoom src="https://loremflickr.com/640/360" />
        </Slide>
        <Slide index={5}>
          <ImageWithZoom src="https://loremflickr.com/640/360" />
        </Slide>
      </Slider>
      <ButtonFirst>First</ButtonFirst>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
      <ButtonLast>Last</ButtonLast>
      <DotGroup />
    </CarouselProvider>
  );
};

export default CarouselPage;
