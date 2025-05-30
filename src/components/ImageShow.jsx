function ImageShow({ image }) {
  return <img src={image.urls.small} alt={image.alt_description} style={{ width: '200px' }} />;
}

export default ImageShow;
