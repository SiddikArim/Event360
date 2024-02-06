import Container from "../ui/Container";
import GalleryDetails from "./GalleryDetails";
import ImgGallery from "./ImgGallery";

const Gallery = () => {
  return (
    <Container className="flex gap-5 mt-10">
      <ImgGallery />

      <GalleryDetails />
    </Container>
  );
};

export default Gallery;
