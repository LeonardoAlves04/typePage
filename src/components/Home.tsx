import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cyan-500 flex h-[53rem]">
        <div>
          <img src="/assets/foto-1.png" alt="logo" className="ml-60 mt-20" />
        </div>

        <div className="max-w-2xl mt-60 ml-60">
          <h1 className="text-5xl text-left font-bold font-mono">
            Nós alavancamos sua empresa junto com você!
          </h1>
          <p className="mt-10 text-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="bg-inherit text-white border-2 border-rose-600 text-grey p-3 rounded-md mt-10 ">
            Fale com a gente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
