import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Signup() {

  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
  }

  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">

        <div className="bg-white rounded-2xl border min-w-48 p-8">
          <div className="flex text-bold justify-center font-semibold text-2xl">
            Signup
          </div>
          
          <Input ref={usernameRef} placeholder="Username" />
          <Input ref={passwordRef} placeholder="Password" />

          <div className="flex justify-center p-4 w-full">
            <Button onClick={signup} variant="primary" text="Signup" size="md" fullWidth={true} />
          </div>

        </div>
    </div>
  );
}
