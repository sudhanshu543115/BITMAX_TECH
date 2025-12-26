"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function contact() {
  return (
    <section className=" py-20 mt-10">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-3xl font-bold text-slate-900">
          Get in touch!
          <span className="mt-2 block h-1 w-12 bg-red-500"></span>
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* LEFT FORM */}
          <div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full rounded-lg bg-gray-100 px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-red-500"
              />

              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter a valid email address"
                  className="w-full rounded-lg bg-gray-100 px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-red-500"
                />
                <Mail className="absolute right-4 top-4 h-5 w-5 text-green-500" />
              </div>

              <textarea
                rows="5"
                placeholder="Enter your message"
                className="w-full resize-none rounded-lg bg-gray-100 px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>

              <button
                type="submit"
                className="rounded-full bg-red-500 px-8 py-3 font-semibold text-white transition hover:bg-red-600"
              >
                Submit
              </button>
            </form>
          </div>

          {/* RIGHT INFO */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 text-red-500" />
              <p className="text-sm font-medium">
                info@bitmaxtechnology.com
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-1 text-green-600" />
              <p className="text-sm font-medium">
                (IVR) : 8595986867
              </p>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 text-red-500" />
              <p className="text-sm leading-relaxed">
                Bhutani Alphathum,<br />
                Unit - 1034, Tower A, Floor 10th,<br />
                Noida Expressway, Noida – 201305
              </p>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-xl border shadow">
              <iframe
                src="https://www.google.com/maps?q=Bhutani%20Alphathum%20Noida&output=embed"
                width="100%"
                height="280"
                allowFullScreen=""
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
