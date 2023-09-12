import React from "react";

const Header = () => {
  return (
    <div className="bg-cyan-500 flex justify-between max-w-sm lg:max-w-full">
      <img
        src="/assets/logo.png"
        alt="logo"
        className="p-0 lg:p-8 w-[4rem] h-[1rem] lg:w-40 lg:h-20 mt-[18px] lg:mt-[10px]"
      />

      <div className="flex items-center">
        <a href="#cases" className="no-underline hover:underline">
          <h2 className="ml-3 lg:ml-0 mr-3 text-lg">Sobre</h2>
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

      <div className="flex justify-end items-center mr-[20px] space-x-3 invisible lg:visible">
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
