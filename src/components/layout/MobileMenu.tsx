import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export default function MobileMenu({ isOpen, closeMenu }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center pointer-events-auto transition-all duration-500 z-40 md:hidden pb-20 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <ul className="flex flex-col items-center gap-8 text-white text-3xl font-black uppercase tracking-widest text-center mt-12">
        <li>
          <Link
            href="/"
            onClick={closeMenu}
            className="hover:text-blue-600 transition-colors inline-block py-2"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            onClick={closeMenu}
            className="hover:text-blue-600 transition-colors inline-block py-2"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/membership"
            onClick={closeMenu}
            className="hover:text-blue-600 transition-colors inline-block py-2"
          >
            Membership
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="hover:text-blue-600 transition-colors inline-block py-2"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="mt-16">
        <button
          onClick={closeMenu}
          className="text-black bg-white px-8 py-4 text-xs uppercase font-bold tracking-[0.2em] rounded-full hover:bg-neutral-200 transition-colors"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}