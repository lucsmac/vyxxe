import { Logo } from "./";

export function Header() {
  return (
    <header className="flex justify-center sticky top-0 w-full py-5 bg-dark-blue font-body">
      <div className="flex justify-between w-full max-w-[1200px] px-4 text-amber-100 text-lg font-normal">
        <Logo />
        <nav>
          <ul className="h-full flex justify-center items-center gap-x-5">
            <li className="cursor-pointer">
              <a className="py-2 border-b border-transparent hover:border-current">
                Home
              </a>
            </li>
            <li className="cursor-pointer">
              <a className="py-2 border-b border-transparent hover:border-current">
                About
              </a>
            </li>
            <li className="cursor-pointer">
              <a className="py-2 border-b border-transparent hover:border-current">
                Artist
              </a>
            </li>
            <li className="cursor-pointer">
              <a className="py-2 border-b border-transparent hover:border-current">
                News
              </a>
            </li>
            <li className="cursor-pointer">
              <a className="py-2 border-b border-transparent hover:border-current">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
