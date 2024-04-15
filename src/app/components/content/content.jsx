import data from "../../data.json";
import Image from "next/image";

import { useState } from "react";
import Modal from "../modal/modal";

const Content = ({ selected }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  const listofImages =
    selected === "all"
      ? data
      : data.filter((data) => data.type.includes(selected));

  return (
    <>
      {listofImages.map((data) => (
        <div
          key={`${data.id}-${data.title}`}
          className="block my-12 sm:my-6 relative"
        >
          <div
            onClick={() => openModal(data)}
            className="relative w-full object-contain aspect-square bg-slate-100 transition-all duration-150 hover:bg-[#EDF1F7] cursor-pointer"
          >
            <Image
              className="object-contain w-full h-full transition-all duration-150 hover:translate-y-1 p-8"
              fill={true}
              src={data.url}
              alt={data.alt}
              sizes="100%"
            />
            {data.type.includes("want") && (
              <div className="absolute top-2 right-2 bg-slate-600 text-white text-xs px-2 py-1 rounded">
                ✦ Wishlist
              </div>
            )}
          </div>
          <div className="block gap-2">
            <div className="flex justify-between mt-4">
              <p className="text-sm text-slate-800">{data.title}</p>
              <p className="text-sm text-slate-800">{data.id}</p>
            </div>
            <p className="text-sm text-gray-400 pb-4">{data.description}</p>
          </div>
        </div>
      ))}
      {modalOpen && (
        <Modal onClose={closeModal}>
  <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 gap-6">
    <div className="aspect-square bg-slate-100">
      <div className="relative w-full h-full object-contain bg-slate-100 transition-all duration-150">
        <Image
          className="object-contain w-full h-full transition-all duration-150 p-12"
          fill={true}
          src={selectedImage.url}
          alt={selectedImage.alt}
          sizes="100%"
        />
        {selectedImage.type.includes("want") && (
          <div className="absolute top-2 right-2 bg-slate-600 text-white text-xs px-2 py-1 rounded">
            ✦ Wishlist
          </div>
        )}
      </div>
    </div>
    <div className="flex flex-col items-start justify-center">
      <h2 className="text-xl font-bold text-slate-800">
        {selectedImage.id} / {selectedImage.title}
      </h2>
      <h3 className="text-md text-slate-400 mb-6">
        {selectedImage.description}
      </h3>
      <p className="text-sm text-slate-800 mb-4">{selectedImage.body}</p>
      <p className="text-sm text-slate-400 mb-2">{selectedImage.notes}</p>
    </div>
  </div>
</Modal>
      )}
    </>
  );
};

export default Content;
