import { CloseIcon } from "../icons/CloseIcon";
import { Button } from "./Button";
import { Input } from "./Input";

interface CreateContentModalProps {
  open : boolean;
  onClose : () => void;
}

export function CreateContentModal({open, onClose} : CreateContentModalProps) {
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


