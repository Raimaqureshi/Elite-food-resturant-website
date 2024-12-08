"use client";
import Image from "next/image";
import { useState } from 'react';

import "@fortawesome/fontawesome-free/css/all.min.css";

export default function ProductDetailsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-">
    
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold ml-6">
          Food<span className="text-yellow-500">tuck</span>
        </h1>

        {/* Navigation Links (Medium aur Baray screens) */}
        <nav className="hidden md:flex gap-8 items-center">
          {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map((item) => (
            <a key={item} href="#" className="hover:text-yellow-500">
              {item}
            </a>
          ))}
        </nav>

        {/* Icons for medium to large screens */}
        <div className="hidden md:flex gap-4 items-center">
          
          {/* Search Icon */}
          <button className="hover:text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z" />
            </svg>
          </button>

          {/* Cart Icon */}
          <button className="hover:text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </button>

          {/* Menu Icon */}
          <button
            className="hover:text-yellow-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Button for Small Screens */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-900 p-4">
          <ul className="flex flex-col gap-4">
            {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-yellow-500 block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>


      <div className="bg-[url('/images/main.webp')] bg-cover bg-center w-full h-[200px] py-4 flex items-center justify-center">
  <div className="container mx-auto text-lg text-white text-center p-2 rounded">
  <h1 className="font-bold text-2xl">Shop Details</h1>
    <p className="text-sm mt-2">Home &gt; Shop <span className="text-yellow-500">Details</span></p>
  </div>
</div>

<div className="container mx-auto py-10">
  <div className="flex flex-wrap items-start gap-0">
    {/* Left Column: Small Images */}
    <div className="flex flex-col space-y-4 flex-shrink-0">
      <Image
        src="/images/ch2.png"
        alt="Dish 1 ${index + 1}`"
        width={100}
        height={100}
        className="rounded-lg cursor-pointer"
      />
      <Image
        src="/images/ch3.png"
        alt="Dish 2"
        width={100}
        height={100}
        className="rounded-lg cursor-pointer"
      />
      <Image
        src="/images/ch4.png"
        alt="Dish 3"
        width={100}
        height={100}
        className="rounded-lg cursor-pointer"
      />
      <Image
        src="/images/ch5.png"
        alt="Dish 4"
        width={100}
        height={100}
        className="rounded-lg cursor-pointer"
      />
    </div>

    {/* Middle Column: Large Image */}
    <div className="flex flex-col flex-grow items-center">
      <Image
        src="/images/ch1.png"
        alt="Main Dish"
        width={360}
        height={370}
        className="rounded-lg"
      />
    </div>

    {/* Right Column: Product Details */}
    <div className="flex flex-col flex-shrink-0 w-full lg:w-auto">
    <p className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 w-40 text-center text-lg mt-6 mb-4">
  In Stock
</p>
      <h2 className="text-3xl font-bold">Yummy Chicken Chup</h2>
      <p className="text-gray-600 mt-2 border-b-2 border-gray-500">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum laboriosam quibusdam sit maxime repellat enim exercitationem quos maiores qui mollitia, assumenda accusantium, pariatur adipisci earum asperiores hic autem officia!
      </p>
      
      <p className="text-xl text-gray-800 mt-4">$54.00</p>
      <div className="flex items-center mt-4 gap-4">
        <input
          type="number"
          className="w-16 p-2 border rounded-lg"
          defaultValue={1}
        />
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
          Add to Cart
        </button>
      </div>
      <ul className="text-sm text-gray-500 mt-6">
        <li>Category: <span className="text-gray-700">Pizza</span></li>
        <li>Tags: <span className="text-gray-700">Our Shop</span></li>
      </ul>
    </div>
  </div>
</div>
    
<div className="container mx-auto py-10 ">
      {/* Tabs for Description and Reviews */}
      <div className="flex items-center border-b mb-6">
        <button className="text-lg text-white border-b-2 border-yellow-500 px-4 py-2 bg-yellow-500">
          Description
        </button>
        <button className="text-lg font-semibold text-gray-600 px-4 py-2 hover:text-gray-800">
          Reviews (24)
        </button>
      </div>

      {/* Description Content */}
      <div className="text-gray-600">
        <p className="mb-4">
          Nam tristique pulvinar leo, vel viverra sem euismod tellus. Nam mattis
          eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum.
          Integer at justo eget sem auctor eget vitae arcu. Nam tempor malesuada
          porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo,
          sit amet interdum nisi volutpat ut. Nulla facilisi. In hac habitasse
          platea dictumst. Morbi id aliquam ex, aliquam in nisl.
        </p>
        <p className="mb-4">
          Suspendisse cursus sollicitudin placerat. Morbi id nisl justo, urna,
          id porttitor et dignissim nec. Pellentesque scelerisque hendrerit
          posuere. Sed at dolor nisi quis rutrum accumsan et sit massa mattis
          condimentum.
        </p>
        <p className="mb-4">
          Aliquam ullamcorper ac est massa mattis condimentum. Vestibulum
          suscipit cursus bibendum. Integer at justo eget vitae arcu. Aliquam
          pulvinar iaculis justo, sit amet interdum nisi volutpat ut.
        </p>

        {/* Key Benefits */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Key Benefits
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Aliquam ullamcorper ac est massa mattis condimentum.</li>
            <li>
              Vestibulum suscipit cursus id justo eget ultricies vulputate.
            </li>
            <li>Etiam nec massa et lacus faucibus ornare.</li>
            <li>Mauris eget diam magna, in blandit turpis.</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container mx-auto py-10">
  <div className="mt-6">
    <h3 className="text-2xl font-bold mb-6 ml-3">Similar Products</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Gap reduced */}
      <div className="bg-white rounded-lg m-2">
        <Image
          src="/images/lime.png"
          alt="Dish 1"
          width={200}
          height={150}
          className="rounded-lg"
        />
        <h4 className="font-bold mt-2">Fresh Lime</h4>
        <p className="text-sm text-gray-600">$38.00</p>
      </div>
      <div className="bg-white rounded-lg m-2">
        <Image
          src="/images/muffin.png"
          alt="Dish 2"
          width={200}
          height={150}
          className="rounded-lg"
        />
        <h4 className="font-bold mt-2">Chocolate Muffin</h4>
        <p className="text-sm text-gray-600">$28.00</p>
      </div>
      <div className="bg-white rounded-lg m-2">
        <Image
          src="/images/Burger.png"
          alt="Dish 3"
          width={200}
          height={150}
          className="rounded-lg"
        />
        <h4 className="font-bold mt-2">Burger</h4>
        <p className="text-sm text-gray-600">$21.00</p>
      </div>
      <div className="bg-white rounded-lg m-2">
        <Image
          src="/images/lime.png"
          alt="Dish 1"
          width={200}
          height={150}
          className="rounded-lg"
        />
        <h4 className="font-bold mt-2">Fresh Lime</h4>
        <p className="text-sm text-gray-600">$38.00</p>
      </div>
    </div>
  </div>
</div>


      {/* Footer */}
      <div className="bg-black text-white">
  {/* Support Section */}
  <div className="container mx-auto py-10 text-center">
    <h2 className="text-2xl font-semibold text-yellow-500">Still You Need Our Support?</h2>
    <p className="text-gray-400 mt-2">
      Don’t wait, make a smart & logical quote here. It's pretty easy.
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
        Corporate clients and leisure travelers have been relying on Foodtuck for dependable, professional chauffeur services in major cities across the world.
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
        <li><a href="#" className="hover:text-yellow-500">About</a></li>
        <li><a href="#" className="hover:text-yellow-500">News</a></li>
        <li><a href="#" className="hover:text-yellow-500">Partners</a></li>
        <li><a href="#" className="hover:text-yellow-500">Team</a></li>
        <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
      </ul>
    </div>

    {/* Help */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Help?</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li><a href="#" className="hover:text-yellow-500">FAQ</a></li>
        <li><a href="#" className="hover:text-yellow-500">Terms & Condition</a></li>
        <li><a href="#" className="hover:text-yellow-500">Reporting</a></li>
        <li><a href="#" className="hover:text-yellow-500">Support Policy</a></li>
        <li><a href="#" className="hover:text-yellow-500">Privacy</a></li>
      </ul>
    </div>

    {/* Recent Post */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Recent Post</h3>
      <ul className="space-y-4">
        <li>
          <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-yellow-500 text-sm">
            <img
              src="/images/234.png"
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
          <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-yellow-500 text-sm">
            <img
              src="/images/234.png"
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
          <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-yellow-500 text-sm">
            <img
              src="/images/234.png"
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
      Copyright © 2022 by Ayeman. All Rights Reserved.
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
    </div>
  );
}