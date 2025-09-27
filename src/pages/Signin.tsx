import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Signin() {
  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">

        <div className="bg-white rounded-2xl border min-w-48 p-8">
          <div className="flex text-bold justify-center font-semibold text-2xl">
            Signin
          </div>
          
          <Input placeholder="Username" />
          <Input placeholder="Password" />

          <div className="flex justify-center p-4 w-full">
            <Button variant="primary" text="Signin" size="md" fullWidth={true} />
          </div>

        </div>
    </div>
  );
}
