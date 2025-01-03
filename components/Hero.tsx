import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="bg-black">
    <section className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
       
        <div className="flex flex-col items-center space-y-4 py-4 w-1/4">
        
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-orange-500 "
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white"
          >
            <i className="fab fa-pinterest"></i>
          </a>
        </div>

        <div className="flex-1 text-left px-4">
          <h1
            className="text-2xl font-great-vibes text-custom-orange mb-4">
            It&apos;s Quick & amazing!
          </h1>
          <h2 className="text-4xl font-semibold mb-4">
            <span className="text-custom-orange">Th</span>e Art of Speed Food
            Quality
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
          </p>
          <a
            href="#Menu" 
            className="mt-8 px-6 py-3 bg-custom-orange text-white rounded-full hover:bg-custom-orange-dark transition"
          >
            see Menu
          </a> 
        </div>
        <div className="border-l-2 border-gray-300 h-full"></div>

        <div className="w-1/3 ml-8">
          <Image
            src="/images/hero1.png"
            alt="Hero Image"
            width={400}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    <section className="bg-black text-white py-12">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:space-x-8">
    
    {/* Left Content */}
    <div className="md:w-1/2 text-left ml-6">
      <h1 className="text-2xl font-great-vibes text-custom-orange mb-4">about us</h1>
      <h2 className="text-4xl font-semibold mb-4">
        <span className="text-custom-orange">We</span> Create the best foody products
      </h2>
      <p className="text-lg leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
      </p>
      <ul className="space-y-4 mb-6">
        <li className="flex items-start">
          <span className="text-white mr-2">
            <i className="fas fa-check"></i>
          </span>
          <p>Fresh and high-quality ingredients in every dish.</p>
        </li>
        <li className="flex items-start">
          <span className="text-white mr-2">
            <i className="fas fa-check"></i>
          </span>
          <p>Fast and friendly service you can rely on.</p>
        </li>
        <li className="flex items-start">
          <span className="text-white mr-2">
            <i className="fas fa-check"></i>
          </span>
          <p>Creating memorable dining experiences for all.</p>
        </li>
      </ul>
      <a
        href="#about"
        className="mt-8 px-6 py-3 bg-custom-orange text-white rounded-full hover:bg-custom-orange-dark transition"
      >
        Read More
      </a>
    </div>

    <div className="md:w-1/2 grid grid-rows-2 grid-cols-1 gap-4 mt-8 md:mt-8">
      <div className="row-span-2">
        <Image
          src="/images/abl.png"
          alt="Large Image"
          width={400}
          height={300}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    
      <div className="grid grid-cols-2 gap-4">
        <Image
          src="/images/abs1.png"
          alt="Small Image 1"
          width={200}
          height={150}
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <Image
          src="/images/abs2.png"
          alt="Small Image 2"
          width={200}
          height={150}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>
<section className="mt-6">
<div className="max-w-full bg-black mx-auto text-center">
<h1 className="text-2xl font-great-vibes text-custom-orange mb-2">Food Category</h1>
<h2 className="text-4xl text-white font-semibold mb-4">
            <span className="text-custom-orange">Ch</span>oose food item
          </h2>
          <div className="grid grid-cols-4 gap-4 ml-2 mr-2">
      <div>
        <Image
          src="/images/fc1.jpg"
          alt="Food Item 1"
          width={200}
          height={200}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div>
        <Image
          src="/images/fc2.png"
          alt="Food Item 2"
          width={200}
          height={200}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div>
        <Image
          src="/images/fc3.png"
          alt="Food Item 3"
          width={200}
          height={200}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div>
        <Image
          src="/images/fc4.png"
          alt="Food Item 4"
          width={200}
          height={200}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>
<section className="bg-black py-12 mt-6">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 px-4">
    {/* Images Section */}
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-3 flex gap-4">
        <Image
          src="/images/wc1.png"
          alt="Dish 1"
          width={256}
          height={281}
          className="rounded-sm"
          layout="fixed"
          style={{ height: "320px", width: "256px" }}
        />
        <Image
          src="/images/wc2.png"
          alt="Dish 2"
          width={261}
          height={261}
          className="rounded-sm mt-16"
           layout="fixed"
           style={{ height: "261px", width: "261px" }}
        />
      </div>
      <Image
        src="/images/wc3.png"
        alt="Dish 3"
        width={244}
        height={306}
        className="w-full h-auto rounded-lg shadow-lg"
      />
      <Image
        src="/images/wc4.png"
        alt="Dish 4"
        width={221}
        height={226}
        className="w-full h-auto rounded-lg shadow-lg"
      />
      <div className="space-y-2">
      <Image
        src="/images/wc5.png"
        alt="Dish 5"
        width={161}
        height={168}
        className="w-full h-auto rounded-lg shadow-lg"
      />
      <Image
        src="/images/wc6.png"
        alt="Dish 6"
        width={161}
        height={160}
        className="w-full h-auto rounded-lg shadow-lg"
      /></div>
    </div>

    {/* Content Section */}
    <div className="md:w-1/2 text-right">
      <h1 className="text-2xl font-great-vibes text-custom-orange mb-2">Why Choose Us</h1>
      <h2 className="text-4xl text-white font-semibold mb-4 justify-center">
        <span className="text-custom-orange">Ex</span>traordinary Taste and Experienced
      </h2>
      <p className="text-white mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
      </p>

      <div className="gap-4 m-6">
        <div className="flex  items-center w-20 h-20 text-white bg-custom-orange">
          <i className="fas fa-utensils text-3xl mb-2 items-center"></i>
        </div>
        <p className="text-white text-sm bg-black">Fast Food</p>
        <div className="flex flex-col items-center text-white bg-custom-orange">
          <i className="fas fa-hamburger text-3xl mb-4 w-102 h-100"></i>
          <p className="text-white text-sm bg-black">Lunch</p>
        </div>
        <div className="flex flex-col items-center text-white bg-custom-orange">
          <i className="fas fa-coffee text-3xl mb-2"></i>
          <p className="text-white text-sm bg-black">Dinner</p>
        </div>
      </div>

      <div className="bg-white text-black p-4 my-4 rounded shadow-lg w-64 flex">
        <h3 className="text-4xl font-bold text-custom-orange">30+</h3>
        <p className="text-sm">Years of <span className="text-xl text-black font-bold"> Experienced</span></p>
       
      </div>
    </div>
  </div>
</section>

</div>

  );
};

export default Hero;