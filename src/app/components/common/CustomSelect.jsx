"use client";


import { useEffect, useState, useRef } from "react";


export default function CustomSelect({
  value,
  onChange,
  options = [],
  apiSearch = null, // async function (query) => []
  labelKey = "label",
  label,
  valueKey = "value",
  renderLabel = null,
  placeholder = "Select option...",
  searchPlaceholder = "Search...",
  className = "",
  disabled = false,
  error,
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [apiOptions, setApiOptions] = useState(options || []);
  const [prevOptions, setPrevOptions] = useState(options);
  const [loading, setLoading] = useState(false);

  if (options !== prevOptions) {
    setPrevOptions(options);
    setApiOptions(options || []);
  }

  const wrapperRef = useRef(null);


  //  Function to get the text label
  const getLabel = (item) => {
    if (!item) return "";
    if (renderLabel) return renderLabel(item); // PRIORITY
    return item[labelKey]; // fallback
  };
  const findSelectedItem = () => {
    if (!value) return null;


    // If value is already an object → return it
    if (typeof value === "object") return value;


    // If value is just ID/string, find matching item
    return options.find((item) => item[valueKey] === value) || null;
  };

  // Compute displayed options:
  // If apiSearch is provided, use apiOptions. Otherwise filter options on the fly.
  const displayedOptions = apiSearch
    ? apiOptions
    : (options || []).filter((item) =>
        getLabel(item).toLowerCase().includes(search.toLowerCase())
      );


  //  Handle search (API only)
  useEffect(() => {
    if (!apiSearch) return;

    const debounceTimer = setTimeout(async () => {
      try {
        const res = await apiSearch(search);
        setApiOptions(res || []);
      } catch (err) {
        console.error("API search error:", err);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(debounceTimer);
  }, [search, apiSearch]);


  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const handleSelect = (item) => {
    onChange(item);
    setOpen(false);
    setSearch("");
  };
  const selectedItem = findSelectedItem();
  const selectedLabel = selectedItem ? getLabel(selectedItem) : placeholder;
  console.log(selectedLabel, "options");


  return (
    <div className="text-text-primary flex w-full flex-col gap-1">
      {label && <label className="">{label}</label>}
      <div
        className={`bg-light flex w-full items-center gap-3 rounded-lg py-1 transition-all duration-300 ease-in-out outline-none ${error
            ? "border border-red-400 ring-2 ring-red-300 focus:ring-red-500"
            : ""
          }`}
      >
        <div ref={wrapperRef} className={`relative w-full ${className}`}>
          {/* Select Box */}
          <button
            type="button"
            disabled={disabled}
            className={`flex h-[45px] w-full items-center justify-between px-3 text-sm ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
            onClick={() => !disabled && setOpen(!open)}
          >
            <span className={value ? "text-gray-900" : "text-gray-400"}>
              {selectedLabel}
            </span>
            <span className="text-gray-500">▼</span>
          </button>


          {/* Dropdown */}
          {open && (
            <div className="absolute z-50 mt-1 max-h-64 w-full overflow-hidden rounded-lg border bg-white shadow-lg">
              {/* Search Input */}
              <div className="border-b p-2">
                <input
                  type="text"
                  autoFocus
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    if (apiSearch) setLoading(true);
                  }}
                  placeholder={searchPlaceholder}
                  className="w-full rounded-lg border px-2 py-1 text-sm focus:ring-1 focus:ring-black/20"
                />
              </div>


              {/* Options List */}
              <div className="max-h-48 overflow-y-auto">
                {loading ? (
                  <div className="p-3 text-sm text-gray-400">Searching…</div>
                ) : displayedOptions?.length === 0 ? (
                  <div className="p-3 text-sm text-gray-400">
                    No options found
                  </div>
                ) : (
                  displayedOptions?.map((item) => (
                    <div
                      key={item[valueKey]}
                      className={`cursor-pointer px-3 py-2 text-sm hover:bg-gray-100 ${value && value[valueKey] === item[valueKey]
                          ? "bg-gray-200"
                          : ""
                        }`}
                      onClick={() => handleSelect(item)}
                    >
                      {getLabel(item)}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}

