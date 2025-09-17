import { useState } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import { Button } from "./Button";

export function CreateContentModal({open, onClose}) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-500/90 left-0 top-0 fixed flex justify-center">
          <div className="flex flex-col justify-center">
            <div className="bg-white rounded-2xl">
              {/* Close Icon  */}
              <div onClick={onClose} className="flex justify-end mt-3 mr-3 cursor-pointer">
                <CloseIcon />
              </div>

              <div className="flex justify-center text-xl">
                Add Link
              </div>

              <div>
                <Input placeholder={"Name of the Link"}/>
                <Input placeholder={"Link"}/>
              </div>
              
              <div className="flex justify-center p-2 m-4">
                <Button variant="primary" text="Submit" size="md" />
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Input({onChange, placeholder} : {onChange: ()=> void}) {
  return <div className="flex justify-center m-4">
          <input placeholder={placeholder} onChange={onChange} type={"text"} className=" bg-slate-200/70 w-full p-2 text-center text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition "/>
        </div>
}
