import Link from "next/link";

export default function Footer() {
  const github = "https://github.com/Njoxpy";

  return (
    <main>
      <div className="bg-gray text-white p-4">
        <Link href="Facebook" className="hover:underline p-2">
          Facebook
        </Link>
        <Link href="Facebook" className="hover:underline p-2">
          Instagram
        </Link>
        <Link href="Facebook" className="hover:underline trabsition duration-100 ease-out p-2">
          Twitter
        </Link>

        <div>
          <p className="text-center">© 2024 Manchester United. All rights reserved</p>
          <p>
            Made By{" "}
            <a href={github} target="_blank" rel="noopener noreferrer">
              NjoxPy
            </a>
          </p>
        </div>
      </div>
      <div></div>
    </main>
  );
}