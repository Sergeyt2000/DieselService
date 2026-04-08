import { useState } from "react";
import BookingModal from "../BookingModal/BookingModal.jsx";
import css from "./FloatingButton.module.css";

export default function FloatingButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className={css.floatingBtn}
        onClick={() => setIsModalOpen(true)}
        aria-label="Записатися на СТО"
      >
        📞 <span>Записатися</span>
      </button>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
