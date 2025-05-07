import Link from "next/link";

const Navigation = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-secondary text-sm py-3">
      <div className="container mx-auto">
        <nav className="w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <Link
            className="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80"
            href="/"
            aria-label="Brand"
          >
            Euro AI Pass
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
