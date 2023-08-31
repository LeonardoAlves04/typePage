import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-cyan-500 flex justify-between">
      <img src="/assets/logo.png" alt="logo" className="p-10" />

      <div className="flex items-center ">
        <a href="#cases">
          <h2 className="mr-3">Sobre</h2>
        </a>
        <a href="#methods">
          <h2 className="mr-3">Produtos</h2>
        </a>
        <a href="#examples">
          <h2 className="mr-3">Exemplos</h2>
        </a>
        <a href="#footer">
          <h2 className="mr-3">Dúvidas</h2>
        </a>
      </div>

      <div className="flex justify-end items-center">
        <button className="bg-rose-600 text-white p-3 rounded-md mr-5 h-12">
          Cadastro
        </button>

        <button className="bg-rose-600 text-white p-3 rounded-md mr-10 h-12">
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Header;
