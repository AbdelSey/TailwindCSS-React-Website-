import React from "react";

const Navbar = () => {
  return (
    <header className="h-16 bg-red-200">
      <nav className="flex items-center justify-around">
        <ul className="flex items-center justify-between space-x-2 text-sm md:text-lg md:space-x-10">
          <li> Products </li>
          <li> Resources </li>
          <li> Support </li>
        </ul>

        <div className="flex items-center">
          <img
            className="w-[50px] mt-2"
            src={
              "https://static.vecteezy.com/system/resources/previews/001/191/987/non_2x/circle-logo-png.png"
            }
          ></img>
        </div>

        <ul className="flex items-center justify-between space-x-3 text-sm md:text-lg md:space-x-10">
          <li>Company</li>
          <li>Pricing</li>

          <button
            className="py-2 px-5 bg-orange-500 rounded-bl-2xl rounded-tr-2xl  hover:bg-orange-300"
            type="submit"
          >
            {" "}
            Contact Us{" "}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
