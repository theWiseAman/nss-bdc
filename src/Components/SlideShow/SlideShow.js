// import "./SlideShow.scss"
// import AwesomeSlider from "react-awesome-slider";
// import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
// import AnimationStyles from 'react-awesome-slider/src/styled/fall-animation/fall-animation.scss';


// const SlideShow = () => (
//     <div className="slideshow-container">
//         <AwesomeSlider
//             animation="fallAnimation"
//             cssModule={[CoreStyles, AnimationStyles]}
            
//             transitionDelay={500}
//         >
//             <div data-src="/assets/mbs2.jpg" />
//             <div data-src="/assets/mbs1.jpg" />
//         </AwesomeSlider>
//     </div>
// );

// export default SlideShow;

import ImageGallery from 'react-image-gallery';
import "./SlideShow.scss"

const images = [
  {
    original: '/assets/mbs1.jpg',
  },
  {
    original: '/assets/mbs2.jpg',
  }
];

const SlideShow = () => (
    <div className="slideshow-container">
        <h1>Gallery</h1>
        <ImageGallery
            items={images}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            originalWidth={"100%"}
        />    
    </div>
);

export default SlideShow;