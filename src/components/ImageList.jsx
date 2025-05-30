import ImageShow from './ImageShow';

function ImageList({ images }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {images.map((img) => (
        <ImageShow key={img.id} image={img} />
      ))}
    </div>
  );
}

export default ImageList;
