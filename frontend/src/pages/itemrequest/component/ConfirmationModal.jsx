// src/confirmationModal.js
import React from "react";
import { Label, TextField, SecButton } from "../../../components/ui";

const confirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <div className="flex justify-center items-center m-4 p-2">
          <Label labelName="Confirm Item Request" isTitle={true} />
        </div>
        <div className="flex justify-center items-center m-4 p-2">
          <Label labelName="Are you sure you want to save item request?" />
        </div>

        <div className="flex justify-end space-x-4">
          <SecButton btnColor="bg-gray-300" onClick={onClose}>
            Cancel
          </SecButton>
          <SecButton btnColor="bg-blue-400" onClick={onConfirm}>
            Confirm
          </SecButton>
        </div>
      </div>
    </div>
  );
};

export default confirmationModal;
