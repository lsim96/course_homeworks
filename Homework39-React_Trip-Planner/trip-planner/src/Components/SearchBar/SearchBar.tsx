import { useEffect, useState } from "react";
import "./SearchBar.css";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(value);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return (
    <div className="SearchBar">
      <input
        type="text"
        value={value}
        placeholder="Search country by name"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
