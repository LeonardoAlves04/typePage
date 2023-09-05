import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-cyan-500 flex justify-between ">
      <img src="/assets/logo.png" alt="logo" className="p-10" />

      <div className="flex items-center ">
        <a href="#cases" className="no-underline hover:underline">
          <h2 className="mr-3 text-lg">Sobre</h2>
        </a>
        <a href="#methods" className="no-underline hover:underline">
          <h2 className="mr-3 text-lg">Produtos</h2>
        </a>
        <a href="#examples" className="no-underline hover:underline">
          <h2 className="mr-3 text-lg">Exemplos</h2>
        </a>
        <a href="#footer" className="no-underline hover:underline">
          <h2 className="mr-3 text-lg">Dúvidas</h2>
        </a>
      </div>

      <div className="flex justify-end items-center mr-[20px] space-x-3">
        <button className="cta mr-[20px]">
          <span>Cadastro</span>
        </button>

        <button className="cta">
          <span>Entrar</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
