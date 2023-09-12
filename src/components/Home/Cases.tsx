import React from "react";

const Cases = () => {
  return (
    <div>
      <section id="cases">
        <div className="lg:flex lg:mt-20 h-[80rem] lg:h-[65rem] max-w-sm lg:max-w-full">
          <div className="flex flex-col lg:ml-40">
            <div className="lg:max-w-xl">
              <div className="zoom bg-indigo-500 text-white p-5 shadow-2xl rounded-lg mt-10 lg:mt-40">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="zoom bg-indigo-600 text-white mt-10 p-5 shadow-2xl rounded-lg">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="zoom bg-indigo-700 text-white mt-10 p-5 shadow-2xl rounded-lg">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="zoom bg-indigo-800 text-white  mt-10 p-5 shadow-2xl rounded-lg lg:mb-60">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:m-auto">
            <img
              src="/assets/foto-2.png"
              alt="company"
              className="lg:h-[40rem] lg:mb-10 lg:ml-[280px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cases;
