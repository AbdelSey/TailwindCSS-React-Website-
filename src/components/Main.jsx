import React from "react";

const Main = () => {
  return (
    <main className="w-full h-full md:flex md:container md:mx-auto md:mt-10">
      <section className=" container p-10 w-[500px] md:w-[900px] md:h-[700px]">
        <div>
          <h1 className="text-[2em] font-bold mb-9">
            {" "}
            Turn your product into something that sticks forever!
          </h1>
          <p className="text-gray-500 text-sm ">
            We offer a beautiful, high-end website that hooks your audience by
            multiplying your engagement and impressions!
          </p>
        </div>

        <div className="flex flex-col items-center py-9 justify-evenly space-y-10 md:flex md:flex-row md:space-y-0 md:space-x-1">
          <button className="bg-orange-500 hover:bg-orange-200 py-4 rounded-bl-2xl rounded-tr-2xl w-[250px]">
            Get Started
          </button>
          <button className="bg-orange-500 hover:bg-orange-200   py-4 rounded-tl-2xl rounded-br-2xl w-[250px]">
            Our Pricing
          </button>
        </div>

        {/*  rating and reviews  */}

        <div className="container max-w-[500px] flex items-center justify-evenly relative md:max-w-[750px]">
          <div className="">
            <img
              className="w-[125px] h-[125px] ml-2 "
              src={
                "https://freesvg.org/img/16231559165-star-rating-condensed.png?w=80&h=80&fit=fill&fm=png"
              }
            />

            <span className="text-gray-400 text-sm mr-11 absolute bottom-[15px]">
              4.5 /5 from 200 reviews
            </span>
          </div>

          <div className="">
            <img
              className="w-[125px] h-[125px] ml-1  "
              src={
                "https://freesvg.org/img/16231559165-star-rating-condensed.png?w=80&h=80&fit=fill&fm=png"
              }
            />

            <span className="text-sm text-gray-400 absolute bottom-[13.5px]">
              5/5 from 334 reviews
            </span>
          </div>
        </div>
      </section>

      <section className="pt-5 px-4 md:w-[750px]">
        <img
          src={
            "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872"
          }
          alt="Sorry"
          className="md:h-[600px]"
        />
      </section>
    </main>
  );
};

export default Main;
