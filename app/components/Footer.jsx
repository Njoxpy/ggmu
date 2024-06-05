import Link from "next/link";

export default function Footer() {
  const github = "https://github.com/Njoxpy";

  return (
    <main>
      <div className="footerBody">
        <Link href="https://www.facebook.com/manchesterunited/" target="_blank" className="link">
          Facebook
        </Link>
        <Link href="Facebook" target="_blank" className="link">
          Instagram
        </Link>
        <Link href="Facebook" target="_blank" className="link trabsition duration-100 ease-out p-2">
          Twitter
        </Link>

        <div>
          <p className="text-center pt-2">© 2024 Glory Glory Manchester United. All rights reserved</p>
          <p className="text-center">
            Made By{" "}
            <a href={github} target="_blank" rel="noopener noreferrer" className="githubLink">
              NjoxPy
            </a>
          </p>
        </div>
      </div>
      <div></div>
    </main>
  );
}


/*
- What are the examples of things I can add into the footer as ackoknoledge and credits
*/