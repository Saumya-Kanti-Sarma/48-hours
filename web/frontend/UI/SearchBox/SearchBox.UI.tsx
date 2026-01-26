import { Search } from "lucide-react";

type InputProps = {
  inputType?: "text" | "email" | "phone" | "password";
  placeHolder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
};

const SearchBox = ({
  inputType = "text",
  placeHolder = "Search...",
  onChange,
  onSearch,
}: InputProps) => {
  return (
    <div className="flex items-center w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:var--(black)">
      <input
        type={inputType}
        placeholder={placeHolder}
        onChange={onChange}
        className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-400 bg-transparent outline-none font-sans text-xl"
      />

      <button
        onClick={onSearch}
        aria-label="Search"
        className="flex items-center justify-center px-4 py-3 text-gray-600 hover:opacity-20 rounded-r-lg transition-colors"
      >
        <Search size={20} />
      </button>
    </div>
  );
};

export default SearchBox;
