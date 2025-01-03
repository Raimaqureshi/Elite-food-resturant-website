import React from "react";

const FAQPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <header className="bg-[url('/images/main.webp')] bg-cover bg-center w-full h-[200px] text-white py-8">
        <h1 className="text-center text-4xl font-bold mt-6">FAQ Page</h1>
        <p className="text-center">Home&gt; <span className="text-custom-orange">faq</span></p>
      </header>
      <main className="py-12 justify-center text-center">
        <section className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold">Questions Look Here</h2>
          <p className="text-xs mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
          <div className="justify-center text-center grid grid-cols-2 gap-4 space-y- lg:w-auto">
            <div className="bg-gray-200 border p-4 rounded-lg">
              <h3 className="font-bold ">How we serve food?</h3>
              <p className="mt-2 text-sm text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur expedita totam rem illo. Doloribus, soluta impedit? Ratione necessitatibus possimus corrupti repellat quis laborum repudiandae itaque minima, quo, porro voluptate.
              </p>
            </div>
            <div className="bg-gray-200 border p-4 rounded-lg">
              <h3 className="font-bold">How can we get in touch with you?</h3>
              <p className="mt-2 text-sm text-gray-800">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minus aut molestias deleniti soluta aliquid vel illum repellat quibusdam magni beatae molestiae magnam rerum, modi ratione recusandae totam veritatis dolores.
              </p>
            </div>
            <div className="bg-gray-200 border p-4 rounded-lg">
              <h3 className="font-bold">How is our food quality?</h3>
              <p className="mt-2 text-sm text-gray-800">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, asperiores? Accusamus, natus commodi quod ut optio provident totam consectetur, vel id autem, ratione aliquam nemo eum excepturi corporis. Facilis, ducimus.
              </p>
            </div>
            <div className="bg-gray-200 border p-4 rounded-lg">
              <h3 className="font-bold">What will be delivered? And when?</h3>
              <p className="mt-2 text-sm text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum blanditiis ut cupiditate inventore? Accusantium blanditiis mollitia optio pariatur expedita officia culpa quis earum natus, cum eum architecto distinctio dicta alias?
              </p>
            </div>
            <div className="bg-gray-200 border p-4 rounded-lg">
              <h3 className="font-bold">How do we give home delivery?</h3>
              <p className="mt-2 text-sm text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque mollitia ipsam laboriosam ea consequuntur odio libero exercitationem vitae, aliquam harum. Sequi ducimus ut obcaecati? Quaerat ad quisquam reprehenderit vero illo.
              </p>
            </div>
            <div className="bg-gray-200 border p-4 rounded-lg">
              <h3 className="font-bold">Is this resturant 24 hours open?</h3>
              <p className="mt-2 text-sm text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, ipsum animi vel quae quibusdam deserunt esse. Reiciendis impedit, ipsam enim autem, quidem eum ex porro natus vitae ducimus laboriosam facilis.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-black text-white py-6 text-center">
        <p>Still Need Support? Contact us for more help!</p>
      </footer>
    </div>
  );
};

export default FAQPage;
