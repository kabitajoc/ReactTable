import React from "react";

interface FilterProps {
  filter: string;
  setFilter: any;
  column: any;
}

const ColumnFilter = ({ column }: FilterProps) => {
  const { filtervalue, setFilter } = column;
  return (
    <span>
      search={""}
      <input
        value={filtervalue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};

export default ColumnFilter;
