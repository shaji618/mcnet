import { ReactElement } from 'react';
import ImageGallery from 'react-image-gallery';

import filteredMasjid from '@assets/mosque-photos/filteredMasjid.jpg';
import rainbowMasjid from '@assets/mosque-photos/rainbowMasjid.jpg';
import sundaySchool from '@assets/mosque-photos/sundaySchool.jpg';

import 'react-image-gallery/styles/css/image-gallery.css';
import '@components/ImageCarousel/ImageCarousel.css'

const images = [
  {
    original: filteredMasjid
  },
  {
    original: rainbowMasjid
  },
  {
    original: sundaySchool
  }
];

const shouldShowControls = images.length > 1;

const ImageCarousel = (): ReactElement => {
  return (
    <ImageGallery
      autoPlay={shouldShowControls}
      items={images}
      showBullets={shouldShowControls}
      showFullscreenButton={false}
      showPlayButton={shouldShowControls}
      slideInterval={5000}
      stopPropagation
    />
  );
};

export default ImageCarousel;
