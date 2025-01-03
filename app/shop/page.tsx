import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Menu() {
    return (
        <div className="bg-white">
        <div className="bg-[url('/images/main.webp')] bg-cover bg-center w-full h-[200px] py-4 flex items-center justify-center">
  <div className="container mx-auto text-lg text-white text-center p-2 rounded">
  <h1 className="font-bold text-2xl">Shop Details</h1>
    <p className="text-sm mt-2">Home &gt; Shop <span className="text-yellow-500">Details</span></p>
  </div>
</div>
<div className="flex items-center space-y-2">
      {/* Label */}
      <label htmlFor="sortBy" className="text-gray-700 font-medium">
        Sort By:
      </label>

      {/* Input Field with Down Arrow */}
      <div className="relative">
        <input
          type="text"
          id="sortBy"
          name="sortBy"
          placeholder="Newest"
          className="border border-gray-300 rounded-md p-2 pl-4 pr-10 w-56 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Down Arrow */}
        <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <i className="fas fa-chevron-down text-gray-500"></i>
        </span>
      </div>
      <label htmlFor="sortBy" className="text-gray-700 font-medium">
        Show:
      </label>

      {/* Input Field with Down Arrow */}
      <div className="relative">
        <input
          type="text"
          id="show"
          name="sortBy"
          placeholder="Newest"
          className="border border-gray-300 rounded-md p-2 pl-4 pr-10 w-56 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Down Arrow */}
        <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <i className="fas fa-chevron-down text-gray-500"></i>
        </span>
      </div>
    </div>
 </div>
    );
  }