import React from "react";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <div className="bg-cyan-500 flex h-[53rem]">
        <div>
          <img src="/assets/foto-1.png" alt="logo" className="ml-60 mt-20" />
        </div>

        <div className="max-w-2xl mt-60 ml-60">
          <h1 className="text-5xl text-left font-bold">
            Nós alavancamos sua empresa junto com você!
          </h1>
          <p className="mt-10 text-md ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          <button className="io-button mt-8">
            Fale com a gente!
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>

      <a
        href="https://wa.me/5535991255868?text=Quero%20te%20contratar!KKKKKKKK"
        className="fixed w-[60px] h-[60px] bottom-10 right-10 bg-green-500 rounded-full text-center shadow-2xl"
      >
        <img src="/assets/wpp.png" className="mt-[10px]" />
      </a>
    </div>
  );
};

export default Home;
