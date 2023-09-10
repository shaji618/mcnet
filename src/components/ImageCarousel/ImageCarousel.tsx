import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import filteredMasjid from '../../assets/mosque-photos/filteredMasjid.jpg';
import rainbowMasjid from '../../assets/mosque-photos/rainbowMasjid.jpg';
import sundaySchool from '../../assets/mosque-photos/sundaySchool.jpg';
import './ImageCarousel.css';

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

const ImageCarousel = () => {
  return (
    <ImageGallery
      autoPlay={shouldShowControls}
      items={images}
      showPlayButton={shouldShowControls}
      showBullets={shouldShowControls}
      showFullscreenButton={false}
      slideInterval={5000}
      stopPropagation
    />
  );
};

export default ImageCarousel;
