import Image from "next/image";
import Ot from "../components/assets/bg.jpg";

export default function Hello() {
  return (
    <main>
      <div className="relative h-screen p-8">
        <div className="absolute inset-0 -z-10">
          <Image
            src={Ot}
            alt="Photo by Njox"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-center font-bold text-white text-4xl">
            The Legacy of Manchester United
          </h1>
          <p className="text-center font-light text-white mt-4">
            Celebrating the rich history of the Red Devils
          </p>
          <button className="rounded bg-darkRed text-white p-2 mt-4">
            Explore More
          </button>
        </div>
      </div>
    </main>
  );
}
