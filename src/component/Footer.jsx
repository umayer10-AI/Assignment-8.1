import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-20">
      <div className="mt-12 border-t border-t-gray-600" />

      <div className="absolute inset-0 -z-10 dark:bg-[#0a0a0b]" />

      <div className="absolute inset-0 -z-10 bg-linear-to-tr from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          <div className="flex justify-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h2 className="text-3xl">📚</h2>
                <h2 className="text-xl font-semibold">
                  BookBorrow
                </h2>
              </div>

              <p className="text-sm text-gray-300">
                A simple online platform to borrow and share books anytime, making reading accessible and convenient for everyone.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              <h3 className="text-sm font-semibold mb-4">
                About
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <Link href="/about" className="hover:text-green-400 dark:hover:text-white">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/books" className="hover:text-green-400 dark:hover:text-white">
                    Browse Books
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-green-400 dark:hover:text-white">
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              <h3 className="text-sm font-semibold mb-4">
                Contact Info
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <MdEmail /> support@bookborrow.com
                </li>
                <li className="flex items-center gap-2">
                  <FaPhoneAlt /> +880 1234-567890
                </li>
                <li className="flex items-center gap-2">
                  <MdLocationOn /> Dhaka, Bangladesh
                </li>
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-center">
              Follow Us
            </h3>

            <div className="flex justify-center gap-4 text-lg">
              <Link href="#"><FaFacebook /></Link>
              <Link href="#"><FaGithub /></Link>
              <Link href="#"><FaLinkedin /></Link>
            </div>

            <div className="flex justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
                bg-linear-to-r from-blue-500 via-purple-500 to-blue-600 text-white 
                text-sm font-medium hover:scale-[1.02] transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} BookBorrow. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;