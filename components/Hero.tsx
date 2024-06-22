"use client";
import Image from "next/image";
import Button from "./Button";
import { hero, herobg } from "@/public/index";

function Hero() {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Znajdź, rezerwuj lub wynajmnij auto - szybko i łatwo!
        </h1>

        <p className="hero__subtitle">
          Usprawnij korzystanie z wynajmu samochodu dzięki naszemu łatwemu
          procesowi rezerwacji
        </p>

        <Button
          title="Odkryj samochody"
          btnType="button"
          className="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={hero} alt="Hero" className="object-contain" fill />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
}

export default Hero;
