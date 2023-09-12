import React from "react";
import ReactCountryFlags from "react-country-flag";

const Footer = () => {
  return (
    <div className="bg-cyan-500 lg:h-[27rem] mt-[35rem] lg:mt-0 max-w-sm lg:max-w-full">
      <section id="footer">
        <img
          src="/assets/logo.png"
          alt="logo"
          className="p-2 lg:p-5 lg:ml-[5rem]"
        />
        <div className="lg:flex">
          <p className="lg:max-w-xl text-justify lg:ml-[6rem] mb-[5px] text-sm lg:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMakers including versions of Lorem Ipsum.
          </p>

          <div className="lg:ml-[48rem] cursor-pointer">
            <h1 className="font-bold mb-[20px]">Dúvidas</h1>
            <p>Sede</p>
            <p>Plataforma</p>
            <p>Entregas</p>
          </div>

          <div className="lg:ml-[40px] cursor-pointer">
            <h1 className="font-bold mb-[20px]">Orçamento</h1>
            <p>Aparelhos</p>
            <p>Sites</p>
            <p>Serviços</p>
          </div>

          <div className="lg:ml-[40px] cursor-pointer">
            <h1 className="font-bold mb-[20px]">Contato</h1>
            <p>E-mail</p>
            <p>Telefone</p>
            <p>Linkedin</p>
          </div>
        </div>

        <div className="flex lg:justify-end mr-[5rem] cursor-pointer">
          <p className="mr-4">
            Brasil <ReactCountryFlags countryCode="BR" svg />
          </p>

          <p className="mr-4">
            Portugal <ReactCountryFlags countryCode="PT" svg />
          </p>
          <p className="mr-4">
            Argentina <ReactCountryFlags countryCode="AR" svg />
          </p>
          <p className="mr-4">
            Estados Unidos <ReactCountryFlags countryCode="US" svg />
          </p>
        </div>
        <div className="w-[90%] h-[1px] bg-black m-auto"></div>
        <div className="flex space-x-3 justify-center mt-5">
          <img src="/assets/visa.png" alt="visa" />
          <img src="/assets/mastercard.png" alt="visa" />
          <img src="/assets/stripe.png" alt="visa" />
          <img src="/assets/american.png" alt="visa" />
          <img src="/assets/bancontact.png" alt="visa" />
          <img src="/assets/bitcoin.png" alt="visa" />
        </div>

        <div className="flex justify-between">
          <p className="ml-[6rem] mt-[40px]">
            © 2023/2030 - Todos os direitos reservados.
          </p>
          <p className="mr-[6rem] mt-[40px] cursor-pointer">
            Termos de serviço
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
