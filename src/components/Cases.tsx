import React from "react";

const Cases = () => {
  return (
    <div>
      <section id="cases">
        <div className="flex mt-20">
          <div className="flex flex-col ml-40">
            <div className="max-w-xl">
              <div className="zoom bg-indigo-500 text-white p-5 shadow-2xl rounded-lg mt-40">
                <p>
                  s s Lorem Ipsum is simply dummy text of the printing and
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
              <div className="zoom bg-indigo-800 text-white  mt-10 p-5 shadow-2xl rounded-lg mb-60">
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

          <div className="m-auto">
            <img
              src="/assets/foto-2.png"
              alt="company"
              className="h-[40rem] mb-40"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cases;
