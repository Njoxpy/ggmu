import React from "react";
import Link from "next/link";
import Image from "next/image";

// image
import logo from "../components/assets/logo/logo.png";

export default function Navbar() {
  return (
    <div>
      <div className="header p-4 flex justify-end">
        <Image
          src={logo}
          width="auto"
          height={50}
          alt="Manchester United Logo"
        />
        <div>
          <div>
            <p>
              <svg
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                ></path>
              </svg>
            </p>
          </div>

          <nav>
            <Link
              href="/"
              className="hover-text-link p-2 font-bold uppercase hover:underline transition duration-100 ease-in"
            >
              Home
            </Link>
            <a
              href="/timeline"
              className="hover-text-link p-2 font-bold uppercase hover:underline"
            >
              Timeline
            </a>
            <a
              href="/gallery"
              className="hover-text-link p-2 font-bold uppercase hover:underline"
            >
              Gallery
            </a>
            <a
              href="/legends"
              className="hover-text-link p-2 font-bold uppercase hover:underline"
            >
              Legends
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
