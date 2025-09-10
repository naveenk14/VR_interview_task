import { Plus, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useMemo } from "react";

const DataTableCard = ({
  title,
  sorting = false,
  headers,
  rows,
  renderRow,
}) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedRows = useMemo(() => {
    console.log(sortConfig.key);
    if (!sortConfig.key) return rows;

    return [...rows].sort((a, b) => {
      let valueA = a[sortConfig.key];
      console.log(a);
      console.log(valueA);
      let valueB = b[sortConfig.key];
      console.log(valueB);

      valueA = valueA ?? "";
      valueB = valueB ?? "";

      if (!isNaN(valueA) && !isNaN(valueB)) {
        return sortConfig.direction === "asc"
          ? Number(valueA) - Number(valueB)
          : Number(valueB) - Number(valueA);
      }

      return sortConfig.direction === "asc"
        ? String(valueA).localeCompare(String(valueB))
        : String(valueB).localeCompare(String(valueA));
    });
  }, [rows, sortConfig]);

  const handleSort = (key) => {
    setSortConfig((prev) =>
      prev.key === key
        ? { key, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { key, direction: "asc" }
    );
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow overflow-x-auto">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-primary-dark">{title}</h3>
        <Plus className="cursor-pointer" />
      </div>

      <table className="w-full text-left border-separate border-spacing-y-2">
        <thead>
          <tr>
            {headers.map((header, i) => {
              const isActive = sortConfig.key === header.key;
              return (
                <th
                  key={i}
                  className="text-primary-light font-[500] text-[14px] cursor-pointer select-none"
                >
                  <div className="flex items-center gap-1">
                    {header.label}
                    {sorting && (
                      <div className="flex flex-col leading-none">
                        <ChevronUp
                          size={14}
                          onClick={() => handleSort(header.key)}
                          className={
                            isActive && sortConfig.direction === "asc"
                              ? "text-black"
                              : "text-gray-300"
                          }
                        />
                        <ChevronDown
                          size={14}
                          onClick={() => handleSort(header.key)}
                          className={
                            isActive && sortConfig.direction === "desc"
                              ? "text-black"
                              : "text-gray-300"
                          }
                        />
                      </div>
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sortedRows?.map((row, i) => (
            <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
              {renderRow(row, i)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTableCard;
