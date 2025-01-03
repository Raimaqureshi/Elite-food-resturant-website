import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      {/* Support Section */}
      <div className="container mx-auto py-10 text-center">
        <h2 className="text-2xl font-semibold text-yellow-500">
          Still You Need Our Support?
        </h2>
        <p className="text-gray-400 mt-2">
          Don&apos;t wait, make a smart & logical quote here. It&apos;s pretty
          easy.
        </p>
        <div className="mt-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 py-2 rounded-l bg-gray-800 text-white border border-gray-600"
          />
          <button className="px-6 py-2 bg-yellow-500 text-black rounded-r font-medium">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-t border-gray-700">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm mb-4">
            Corporate clients and leisure travelers have been relying on
            Foodtuck for dependable, professional chauffeur services in major
            cities across the world.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="bg-yellow-500 p-3 rounded">
              <i className="fas fa-clock text-black w-[77] h-[71]"></i>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Opening Hours:</span>
              </p>
              <p className="text-sm text-gray-400">Mon - Sat (8:00 - 6:00)</p>
              <p className="text-sm text-gray-400">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link className="hover:text-yellow-500" href="/about">
                About
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Partners
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Team
              </a>
            </li>
            <Link className="hover:text-yellow-500" href="/contact">
              Contact
            </Link>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help?</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <Link className="hover:text-yellow-500" href="/faq">
              FAQ
            </Link>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Terms & Condition
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Reporting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Support Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Privacy
              </a>
            </li>
          </ul>
        </div>

        {/* Recent Post */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Post</h3>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-500 text-sm"
              >
                <Image
                  src="/images/234.png"
                  width={200}
                  height={200}
                  alt="Post 1"
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p>Is fast food good for your body?</p>
                  <p className="text-xs">February 28, 2022</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-500 text-sm"
              >
                <Image
                  src="/images/234.png"
                  width={200}
                  height={200}
                  alt="Post 2"
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p>Change your food habit with organic food</p>
                  <p className="text-xs">February 28, 2022</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-500 text-sm"
              >
                <Image
                  src="/images/234.png"
                  width={200}
                  height={200}
                  alt="Post 3"
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p>Do you like fast food for your life?</p>
                  <p className="text-xs">February 28, 2022</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#A0A0A099] text-center py-2 border-t border-gray-700 justify-between">
        <p className="text-white text-sm">
          Copyright © 2024 by Raima. All Rights Reserved.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-400 hover:text-yellow-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-500">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
