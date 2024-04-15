import { useEffect } from "react";

const CloseIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
  
  const Modal = ({ onClose, children }) => {

    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === "Escape") {
            onClose();
          }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
        };
      }, [onClose]);

    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg max-w-md p-6 relative sm:m-4">
          <button
            className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            {CloseIcon}
          </button>
          <div className="mt-8"> {/* Adding margin between close button and content */}
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;