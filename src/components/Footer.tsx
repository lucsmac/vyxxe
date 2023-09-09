import {
  Facebook,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { Logo } from "./";

export function Footer() {
  return (
    <footer className="flex justify-center py-5 bg-dark-blue font-body">
      <div className="flex items-center flex-col gap-y-6">
        <Logo size="lg" />
        <nav className="flex text-zinc-50">
          <ul className="flex gap-x-2 border-r pr-4 mr-2 border-zinc-50/20">
            <li className="p-2 cursor-pointer">
              <a className="uppercase font-medium hover:text-amber-100">Home</a>
            </li>
            <li className="p-2 cursor-pointer">
              <a className="uppercase font-medium hover:text-amber-100">
                About
              </a>
            </li>
            <li className="p-2 cursor-pointer">
              <a className="uppercase font-medium hover:text-amber-100">
                Artist
              </a>
            </li>
            <li className="p-2 cursor-pointer">
              <a className="uppercase font-medium hover:text-amber-100">News</a>
            </li>
            <li className="p-2 cursor-pointer">
              <a className="uppercase font-medium hover:text-amber-100">
                Style guide
              </a>
            </li>
            <li className="p-2 cursor-pointer">
              <a className="uppercase font-medium hover:text-amber-100">
                Image Licensing
              </a>
            </li>
          </ul>
          <div>
            <ul className="flex gap-x-4 items-center h-full">
              <li>
                <a>
                  <FacebookIcon
                    strokeWidth="1"
                    color="white"
                    fill="white"
                    size={24}
                  />
                </a>
              </li>
              <li>
                <a>
                  <InstagramIcon color="white" size={24} />
                </a>
              </li>
              <li>
                <a>
                  <TwitterIcon fill="white" color="white" size={24} />
                </a>
              </li>
              <li>
                <a>
                  <YoutubeIcon color="white" size={24} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <p className="mt-8 text-zinc-50">
          © This is a Kreshnik Beqi template powered by Webflow
        </p>
      </div>
    </footer>
  );
}
