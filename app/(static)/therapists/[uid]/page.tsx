import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className=" max-w-7xl mx-auto md: h-screen md:flex md:items-center md:-mt-12">
      <div className=" p-4 md:p-0 grid md:grid-cols-2">
        <div className=" flex items-center">
            <img src="https://m.media-amazon.com/images/M/MV5BMDU5NjIyNzgtYmJhOS00OTRmLWFlZGYtZjFiY2NlMTk2YTMzXkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg" className=" max-h-96 md:max-h-[35rem] mx-auto my-auto rounded-md md:rounded-lg" />
        </div>
        <div className="">
          <div className="p-8  shadow">

            <div className="mt-20 text-center border-b pb-12">
              <h1 className="text-4xl font-medium text-gray-700 dark:text-white">
                Jessica Jones,{" "}
                <span className="font-light text-gray-500 dark:text-gray-100">27</span>
              </h1>
              <p className="font-light text-gray-600 mt-3 dark:text-gray-100">
                Bucharest, Romania
              </p>
                
              <p className="mt-8 text-gray-500 dark:text-gray-200">
                Solution Manager - Creative Tim Officer
              </p>
              <p className="mt-2 text-gray-500 dark:text-gray-200">
                University of Computer Science
              </p>
            </div>

            <div className="mt-8 flex flex-col justify-center">
              <p className="text-gray-600 dark:text-gray-300 text-center font-light lg:px-16">
                An artist of considerable range, Ryan — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure. An artist of considerable
                range.
              </p>
            </div>
            <div className="space-x-8 py-8 flex justify-between md:justify-center">
                <button className="text-white py-2 px-4 uppercase rounded bg-purple-400 hover:bg-purple-500 shadow hover:shadow-lg font-medium">
                  Book a Session
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
