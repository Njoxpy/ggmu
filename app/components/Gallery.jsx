// import images
import Image from "next/image";
import legend1 from "../components/assets/glory.jpg";
import legend2 from "../components/assets/njox.jpeg";

const images = [
  { src: "/image1.jpg", alt: "Manchester United Winning the League" },
  { src: "/image2.jpg", alt: "Old Trafford" },
  { src: "../components/assets/njox.jpeg", alt: "Old Trafford" },
  // Add more images here
];

const Gallery = () => {
  return (
    <main>
      <div className="p-8">
        <h2 className="font-bold text-darkRed text-center">Iconic Moments</h2>
        <div>
          <Image
            // src={legend1}
            alt="FA Cup Champions"
            className="rounded w-full"
          />
          <p>Manchester United Winning FA Cup</p>
        </div>
      </div>
    </main>
  );
};

export default Gallery;

/*
Large images in a responsive carousel.
Lightbox for full-screen view on click.

Image Carousel: Showcase iconic photos with captions.
Lightbox Feature: Allow users to click on images to see a larger view.

*/
