"use client";
import { gas, hero, steeringwheel, tire } from "@/public";
import { carProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: carProps;
}

export default function CarCard({ car }: CarCardProps) {
  const { make, model, year, transmission, drive, city_mpg } = car;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px]">
        <span className="self-start text-[14px] font-extrabold">249PLN</span>
        <span className="self-end text-[14px] font-medium">/dzień</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image src={hero} alt="Auto" fill className="object-contain" priority />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={steeringwheel}
              alt="Skrzynia biegów"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatyczna" : "Manualna"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={gas} alt="Paliwo" width={20} height={20} />
            <p className="text-[14px]">
              {(235.214583 / city_mpg).toFixed(2)} l/100km
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={tire} alt="Ikonka" width={20} height={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <Button
            title="Zobacz więcej"
            btnType="button"
            handleClick={() => setIsOpen(true)}
            className="w-full py-[16px] rounded-full bg-primary-blue text-white leading-[17px] font-bold"
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
}
