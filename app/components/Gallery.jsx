// import images
import Image from "next/image";
import GalleryDetails from "./GalleryDetails";

const images = [
  // 1908
  {
    src: "../components/assets/gallery/1908 First League Title.jpeg",
    alt: "Manchester United First League Title 1908",
  },
  // 1910 OT Opening.
  {
    src: "../components/assets/gallery/old trafford opening1910.jpeg",
    alt: "Old Trafford",
  },
  // 1968 European Cup Triumph
  {
    src: "../components/assets/gallery/Europen Cup Triumph 1968.jpg",
    alt: "Old Trafford",
  },
  // first fa cup victory
  { src: "../components/assets/gallery/fa cup.jpg", alt: "Old Trafford" },
  // munich air disaster
  {
    src: "../components/assets/gallery/munich disaster.jpeg",
    alt: "Old Trafford",
  },
  // 1999 treble
  {
    src: "../components/assets/gallery/1999 treble quality.jpg",
    alt: "Old Trafford",
  },
  // champions league moscow 2008
  {
    src: "../components/assets/gallery/UEFA Champions Moscow 2008.webp",
    alt: "Old Trafford",
  },
  // sir alex ferguson retirement 2013
  {
    src: "../components/assets/gallery/Sir Alex Ferguson Retirement 2013.webp",
    alt: "Old Trafford",
  },
  // carabao 2023
  {
    src: "../components/assets/gallery/carabao cup champions 2024.webp",
    alt: "Old Trafford",
  },
  // carabo.webp carabao 2
  // fa cup 2024
  {
    src: "../components/assets/gallery/fa champions 2024.webp",
    alt: "Old Trafford",
  },
];

const subtitle =
  "Discover the essence of Manchester United's legacy through our gallery of iconic moments. Each image encapsulates the triumphs and resiliencethat define the club's storied history. Click through to explore and relive the passion of Manchester United Football Club.";

const Gallery = () => {
  return (
    <main>
      <div className="p-8">
        <h2 className="gallery-heading">
          Iconic Moments in Manchester United History
        </h2>
        <p className="p-2 text-gray">{subtitle}</p>
        <div className="">
          <Image
            // src={legend1}
            alt="FA Cup Champions"
            className="image-gallery"
          />
        </div>
      </div>
      <div>
        <GalleryDetails />
      </div>
    </main>
  );
};

export default Gallery;
