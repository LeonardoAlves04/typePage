import React from "react";

const Header = () => {
  return (
    <div className="bg-cyan-500 flex justify-between max-w-[80%] lg:max-w-full">
      <img
        src="/assets/logo.png"
        alt="logo"
        className="p-0 lg:p-8 w-[3rem] h-[1rem] lg:w-40 lg:h-20 mt-[16px] lg:mt-[2px]"
      />

      <div className="flex items-center space-x-4">
        <a href="#cases" className="no-underline hover:underline">
          <h2 className="ml-4 text-sm lg:text-lg">Sobre</h2>
        </a>
        <a href="#methods" className="no-underline hover:underline">
          <h2 className="text-sm lg:text-lg">Produtos</h2>
        </a>
        <a href="#examples" className="no-underline hover:underline">
          <h2 className="text-sm lg:text-lg">Exemplos</h2>
        </a>
        <a href="#footer" className="no-underline hover:underline">
          <h2 className=" text-sm lg:text-lg">Dúvidas</h2>
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
