import React from "react";
import { ModalWrapper } from "../ModalWrappers";
 
export const DetailStudent = ({ grades, modalIsOpen, closeModal }) => {
  return (
    <ModalWrapper modalIsOpen={modalIsOpen} closeModal={closeModal}>
      <div className="w-96 mb-20 flex flex-col items-center ">
        <h2 className="text-1 mb-6">Detail Student</h2>

         {/* WE CONTROL THE COLOR CONDITION FOR GRADES ACCORDING TO ITS VALUE  */}
        {grades < 3.0 ? (
          <p style={{color: "red"}} className="text-2"><b>{grades}</b></p>
        ): grades > 3.0 && grades <3.9 ?(
          <p style={{color: "yellow"}} className="text-2"><b>{grades}</b></p>
        ):(
          <p style={{color: "green"}} className="text-2"><b>{grades}</b></p>
        )}
         {/* END   */}

        <div className="flex flex-col items-center nombre-position">
          <span className="font-bold text-xl"></span>
          <span className="text-xl position"></span>
        </div>
      </div>

    </ModalWrapper>
  );
};
