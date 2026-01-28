import { Search } from "lucide-react";

type InputProps = {
  inputType?: "text" | "email" | "phone" | "password";
  placeHolder?: string;
  inputStyles?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
};

const SearchBox = ({
  inputType = "text",
  placeHolder = "Search...",
  onChange,
  onSearch, inputStyles
}: InputProps) => {
  return (
    <div className={`flex justify-between items-center w-md bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:var--(black) ${inputStyles} overflow-hidden`}>
      <input
        type={inputType}
        placeholder={placeHolder}
        onChange={onChange}
        className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-400 bg-transparent outline-none font-sans text-xl w-75 max-[485px]:text-sm"
      />

      <button
        onClick={onSearch}
        aria-label="Search"
        className="flex items-center justify-center px-4 py-3 text-gray-600 hover:opacity-20 rounded-r-lg transition-colors max-[326px]:p-0"
      >
        <Search size={20} />
      </button>
    </div>
  );
};

export default SearchBox;
