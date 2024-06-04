import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <main>
      <div className="p-8">
        <h1 className="font-bold mb-2">Page Was Not Found</h1>
        <p className="border-l-4 border-red p-2">
          The page you were looking was not found, return to{" "}
          <Link href="/" className="font-bold hover:underline">
            Homepage.
          </Link>
        </p>
      </div>
    </main>
  );
}
