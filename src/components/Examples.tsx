import React from "react";

const Examples = () => {
  return (
    <div>
      <section id="examples">
        <div className="h-[60rem]">
          <h1 className="text-5xl text-center p-10 font-bold mt-[20px]">
            O melhor design para o site da sua empresa!
          </h1>

          <div className="flex mt-[10rem] max-w-7xl m-auto ">
            <div className="zoom p-5 shadow-2xl rounded-lg bg-white mr-5 bg-gradient-to-r from-yellow-300 to-orange-300">
              <h1 className="text-4xl text-center">Auditoria</h1>
              <p className="mb-[6rem] mt-[6rem] text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <p className="text-center">
                A melhor decisão para o seu negócio!
              </p>
            </div>

            <div className="zoom p-5 shadow-2xl rounded-lg bg-white mr-5 bg-gradient-to-r from-cyan-400 to-blue-400">
              <h1 className="text-4xl text-center">Trabalho em equipe</h1>
              <p className="mb-[6rem] mt-[6rem] text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <p className="text-center">Duas mentes pensam melhor que uma!</p>
            </div>

            <div className="zoom p-5 shadow-2xl rounded-lg bg-white mr-5 bg-gradient-to-r from-red-400 to-rose-400">
              <h1 className="text-4xl text-center">Criação</h1>
              <p className="mb-[6rem] mt-[6rem] text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <p className="text-center">Leve sua empresa para o topo!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Examples;
