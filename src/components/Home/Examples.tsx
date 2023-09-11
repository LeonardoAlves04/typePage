import React from "react";

const Examples = () => {
  return (
    <div>
      <section id="examples">
        <div className="h-[60rem]">
          <h1 className="text-5xl text-center p-10 font-bold mt-[20px]">
            O melhor design para o site da sua empresa!
          </h1>

          <div className="flex mt-[10rem] max-w-7xl m-auto justify-center space-x-8">
            <div className="flex flex-col rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] h-[25rem] w-[25rem]">
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                  <div>
                    <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                      Plano básico
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      Perfeito para começar um negócio!
                    </p>
                  </div>
                  <div className="text-sm mt-[25px]">
                    <p className="zoom">6 meses</p>
                    <p className="zoom">Call's mensais</p>
                    <p className="line-through">Suporte personalizado</p>
                    <p className="line-through">
                      Participar do programa de promoção
                    </p>
                    <p className="line-through">
                      Networking com empresas parceiras
                    </p>
                  </div>
                  <div className="mt-[2rem]">
                    <p>
                      <span className="text-4xl font-light tracking-tight text-black">
                        R$ 50
                      </span>
                      <span className="text-base font-medium text-gray-500"></span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex px-6 pb-8 sm:px-8 ">
                <a
                  aria-describedby="tier-company"
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  href="#"
                >
                  Contratar
                </a>
              </div>
            </div>
            <div className="flex flex-col 0 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] h-[25rem] w-[25rem]">
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                  <div>
                    <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                      Plano avançado
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      Para você que quer levar seu negócio a outro nivel!
                    </p>
                  </div>
                  <div className="text-sm mt-[25px]">
                    <p className="zoom">1 ano</p>
                    <p className="zoom">Suporte personalizado</p>
                    <p className="zoom">Call's semanais</p>
                    <p className="line-through">
                      Participar do programa de promoção
                    </p>
                    <p className="line-through">
                      Networking com empresas parceiras
                    </p>
                  </div>
                  <div className="mt-[2rem]">
                    <p>
                      <span className="text-4xl font-light tracking-tight text-black">
                        R$100
                      </span>
                      <span className="text-base font-medium text-gray-500"></span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex px-6 pb-8 sm:px-8 ">
                <a
                  aria-describedby="tier-company"
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  href="#"
                >
                  Contratar
                </a>
              </div>
            </div>

            <div className="flex flex-col  rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] h-[25rem] w-[25rem]">
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                  <div>
                    <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                      Plano premium -
                      <span className="text-red-400">recomendado!</span>
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      Sua empresa sendo uma das melhores!
                    </p>
                  </div>
                  <div className="text-sm mt-[10px]">
                    <p className="zoom">Vitalício</p>
                    <p className="zoom">Suporte personalizado</p>
                    <p className="zoom">Call's diárias</p>
                    <p className="zoom">Participar do programa de promoção</p>
                    <p className="zoom">Networking com empresas parceiras</p>
                  </div>
                  <div className="mt-[12px]">
                    <p>
                      <span className="text-4xl font-light tracking-tight text-black">
                        R$150
                      </span>
                      <span className="text-base font-medium text-gray-500"></span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex px-6 pb-8 sm:px-8">
                <a
                  aria-describedby="tier-company"
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  href="#"
                >
                  Contratar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Examples;
