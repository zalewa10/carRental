"use client";

import { manufacturers } from "@/constants";
import { carlogo } from "@/public";
import { setManufacturerProps } from "@/types";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { useState, Fragment } from "react";

export default function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: setManufacturerProps) {
  const [query, setquery] = useState("");
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="realtive w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src={carlogo}
              alt="Car logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </ComboboxButton>
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setquery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setquery("")}
          >
            <ComboboxOptions>
              {filteredManufacturers.map((item, index) => (
                <ComboboxOption
                  value={item}
                  key={index}
                  className={({ focus }) =>
                    `relative search-manufacturer__option ${
                      focus ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {item}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
