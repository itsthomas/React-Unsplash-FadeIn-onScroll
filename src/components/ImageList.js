import React, { Component } from "react";
import Masonry from "react-masonry-component";
import ScrollAnimation from "react-animate-on-scroll";

const masonryOptions = {
  transitionDuration: 1
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

class Gallery extends Component {
  render() {
    console.log(this.props);
    // map method generates a new Array
    const childElements = this.props.images.map(item => {
      return (
        <ScrollAnimation
          animateIn="bounceInLeft" // Use any animation from https://daneden.github.io/animate.css/
          animateOut=""
          duration={4}
          animateOnce={true}
          className="masonry_item"
          key={item.id}
        >
          <img
            src={item.urls.regular}
            alt={item.description}
            className="masonry_item_img"
          />
        </ScrollAnimation>
      );
    });

    return (
      <Masonry
        className={"masonry"} // default ''
        elementType={"div"} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
        {childElements}
      </Masonry>
    );
  }
}

export default Gallery;

// Second way: We could just return the map resutl
// const Gallery = props => {
//   // map method generates a new Array
//   return props.images.map((item, index) => {
//     return (
//       <img
//         style={{ maxWidth: '68vw' }}
//         key={index}
//         className="image-container"
//         src={item.urls.regular}
//         alt={description}
//       />
//     );
//   });
// };

// export default Gallery;

// ========== 3. Using destructuring =========
// const Gallery = props => {
//   console.log(props);
//   // map method generates a new Array
//   const list = props.images.map(({ id, urls, description }) => {
//     return (
//       <img
//         style={{ maxWidth: '78vw' }}
//         key={id}
//         src={urls.regular}
//         alt={description}
//       />
//     );
//   });

//   return <div>{list}</div>;
// };

// export default ImageList;
