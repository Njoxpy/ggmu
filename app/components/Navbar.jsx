import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="header p-4 flex justify-end">
        <h1>GGMU</h1>
        <div>
          <nav>
            <Link href="/" className="hover-text-link p-2">
              Home
            </Link>
            <a href="/timeline" className="hover-text-link p-2">
              Timeline
            </a>
            <a href="/gallery" className="hover-text-link p-2">
              Gallery
            </a>
            <a href="/legends" className="hover-text-link p-2">
              Legends
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
