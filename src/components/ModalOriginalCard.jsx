import React from "react";
import { X, Download } from "lucide-react";
import { eventData } from "../data/eventData";

export function ModalOriginalCard({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="card-modal-title"
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="modal-close-btn"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 id="card-modal-title" className="font-tamil text-xl font-bold text-[#4A0E1C] mb-1">
          {eventData.tamilTitle}
        </h3>
        <p className="font-serif text-xs text-[#8B263E] tracking-widest uppercase mb-3">
          Original Invitation Card
        </p>

        <div style={{ borderRadius: "0.85rem", overflow: "hidden", border: "1px solid rgba(212,175,55,0.5)", maxHeight: "68vh" }}>
          <img
            src={eventData.images.fullPoster}
            alt="Original Tamil Christian Housewarming Invitation Card"
            style={{ width: "100%", height: "auto", display: "block", maxHeight: "68vh", objectFit: "contain" }}
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <a
            href={eventData.images.fullPoster}
            download="Santhiya-Housewarming-Invitation-Card.jpg"
            className="btn-primary-burgundy"
            style={{ fontSize: "0.8rem", padding: "0.6rem 1.25rem" }}
          >
            <Download className="w-4 h-4 text-[#F5D77F]" />
            Download Invitation Card
          </a>
        </div>
      </div>
    </div>
  );
}
