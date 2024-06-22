"use client";
import { carProps } from "@/types";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: carProps;
}

const CarDetails = ({ isOpen, closeModal }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <span>{console.log(isOpen)}</span>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>
          <div></div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
