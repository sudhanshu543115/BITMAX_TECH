import Link from "next/link";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
} from "react-icons/md";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b pb-8">
          <div>
            <p className="text-sm">Stay connected with</p>
            <h2 className="text-2xl font-bold uppercase">
              <span className="text-[#295f98]">Bit</span>
              <span className="text-[#e52020]">Max</span> Technology
            </h2>
          </div>

          <form className="flex w-full md:w-auto max-w-md gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 rounded-md border px-4 py-2 text-sm outline-none focus:border-[#295f98]"
            />
            <button
              type="submit"
              className="rounded-md bg-[#e52020] px-5 py-2 text-sm font-semibold text-white hover:bg-[#c31616] transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Links */}
        <div className="grid gap-10 py-10 sm:grid-cols-2 md:grid-cols-4 text-sm">

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-[#e52020]">About</Link></li>
              <li><Link href="/services" className="hover:text-[#e52020]">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#e52020]">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-[#e52020]">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/web" className="hover:text-[#e52020]">Web Development</Link></li>
              <li><Link href="/app" className="hover:text-[#e52020]">App Development</Link></li>
              <li><Link href="/ux" className="hover:text-[#e52020]">UI/UX Design</Link></li>
              <li><Link href="/crm" className="hover:text-[#e52020]">CRM Solutions</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/terms" className="hover:text-[#e52020]">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-[#e52020]">Privacy Policy</Link></li>
              <li><Link href="/refund" className="hover:text-[#e52020]">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>

            <p className="flex items-center gap-2 mb-2">
              <MdEmail className="text-[#e52020]" />
              <a href="mailto:info@bitmaxtechnology.com" className="hover:text-[#e52020]">
                info@bitmaxtechnology.com
              </a>
            </p>

            <p className="flex items-center gap-2 mb-2">
              <MdPhone className="text-[#e52020]" />
              <a href="tel:8595986867" className="hover:text-[#e52020]">
                8595986867
              </a>
            </p>

            <p className="flex items-start gap-2 text-sm leading-relaxed">
              <MdLocationOn className="mt-1 text-[#e52020]" />
              <span>
                Bhutani Alphathum, Tower A<br />
                Noida Expressway, Noida – 201305
              </span>
            </p>

            {/* Social */}
            <div className="mt-4 flex gap-4 text-lg">
              <a href="https://wa.me/919211318269" className="hover:text-[#25D366]">
                <FaWhatsapp />
              </a>
              <a href="https://www.instagram.com/bitm.axtechnology/" className="hover:text-[#E1306C]">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/people/BitMax-Technology/61575784970024/" className="hover:text-[#1877F2]">
                <FaFacebookF />
              </a>
              <a href="https://x.com/BitmaxInfo" className="hover:text-black">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t py-4 text-center text-sm text-gray-600">
        © 2025{" "}
        <span className="font-semibold">
          <span className="text-[#295f98]">Bit</span>
          <span className="text-[#e52020]">Max</span>
        </span>{" "}
        Technology. All rights reserved.
      </div>
    </footer>
  );
}
