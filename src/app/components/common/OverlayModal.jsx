"use client";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import Button from "./Button";

const OverlayModal = ({
  isOpen,
  onClose,
  children,
  showCloseIcon = true,
  closeOnBackdropClick = true,
  closeOnEsc = true,
  className = "",
  backdropClass = "bg-black/20 backdrop-blur-[1px]",
  modalClass = "",
  showBackdrop = true,
  containerId = "__modal-root",
}) => {
  const modalRef = useRef(null);


  // Animate modal on mount
  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.25, ease: "power2.out" },
      );
    }
  }, [isOpen]);


  // ESC to close
  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;


    const handleEsc = (e) => {
      if (e.key === "Escape") onClose?.();
    };


    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, closeOnEsc, onClose]);


  // Prevent body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);


  if (!isOpen) return null;


  const content = (
    <section
      className={`fixed inset-0 z-[999] flex items-center justify-center overflow-y-auto px-3 sm:px-4 ${showBackdrop ? backdropClass : ""} ${className}`}
      onClick={closeOnBackdropClick ? onClose : undefined}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-md sm:max-w-lg ${modalClass}`}
      >
        {showCloseIcon && (
          <Button
            onClick={onClose}
            className="flex justify-center items-center cursor-pointer absolute top-2 right-2 aspect-square h-8 rounded-full p-1"
            aria-label="Close modal"
          >
            <i className="ri-close-line text-lg"></i>
          </Button>
        )}

        {children}
      </div>
    </section>
  );


  const container =
    typeof window !== "undefined" && document.getElementById(containerId);
  return container ? createPortal(content, container) : content;
};


export default OverlayModal;