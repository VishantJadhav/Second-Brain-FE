import type { ReactElement } from "react";

export function Sidebaritem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex cursor-pointer item-center text-gray-700 pl-4 hover:bg-gray-200 rounded max-w-52 transition-all duration-150">
      <div className="p-1">{icon}</div>

      <div className="p-1">{text}</div>
    </div>
  );
}
