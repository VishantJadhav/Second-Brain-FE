export function Input({
  placeholder,
  ref,
}: {
  placeholder: string;
  ref?: any;
}) {
  return (
    <div className="flex justify-center m-4">
      <input
        placeholder={placeholder}
        ref={ref}
        type={"text"}
        className=" bg-slate-200/70 w-full p-2 text-center text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition "
      />
    </div>
  );
}
