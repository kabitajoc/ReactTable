import React from "react";

interface FilterProps {
  filter: string;
  setFilter: any;
}

const GlobalFilter = ({ filter, setFilter }: FilterProps) => {
  return (
    <span>
      search={""}
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
};

export default GlobalFilter;
