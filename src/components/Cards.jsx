import React from "react";
import legend from './../assets/images/legend.png';
import gold from './../assets/images/gold.png';
import main from './../assets/images/logo.jpg';

function Cards() {
  return (
    <div className="container w-full py-20">
      <div className="w-full border-b-[1px] border-zinc-700 pb-5">
        <h1 className="text-4xl sm:text-6xl">Awards</h1>
      </div>
      <div className="py-10 cards w-full flex flex-col md:flex-row gap-10">
        <div className="card relative flex items-center justify-center w-full lg:w-1/2 h-96 bg-[#004D43] rounded-xl">
          <img
            src={main}
            alt="logo"
            className="w-[25%]"
          />
          <button className="absolute left-5 bottom-5 px-5 py-2 rounded-full border text-xs sm:text-base font-NueueMontreal border-zinc-200">
            2024-Present
          </button>
        </div>
        <div className="cardcontainer flex gap-5 w-full lg:w-1/2">
          <div className="card relative flex items-center justify-center w-1/2 h-96 bg-[#293231] rounded-xl">
            <img
              src={gold}
              alt="Gold's"
              className="w-[50%]"
            />
            <button className="absolute left-5 bottom-5 px-5 py-2 rounded-full border text-xs sm:text-base font-NueueMontreal border-zinc-200">
              2021–2023
            </button>
          </div>
          <div className="card relative flex items-center justify-center w-1/2 h-96 bg-[#293231] rounded-xl">
            <img
              src={legend}
              alt="Legends"
              className="w-[50%] mix-blend-lighten"
            />
            <button className="absolute left-5 bottom-5 px-5 py-2 rounded-full border text-xs sm:text-base font-NueueMontreal border-zinc-200">
              2019–2020
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
