"use client";
 import clsx from "clsx";
import Pagination from "../common/Pagination";

const getNestedValue = (obj, path) => {
  if (!path) return undefined;
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
};

const BasicTable = ({
  columns,
  data,
  actions,
  total = 100,
  pageSize = 10,
  pagination,
  wrapperClassName,
}) => {
  return (
    <div
      className={clsx(
        "w-full bg-white rounded-xl overflow-hidden",
        wrapperClassName
      )}
    >
      <div className="w-full overflow-x-auto ">
        <table className="min-w-[900px] w-full border-collapse">
          
          <thead className="bg-white sticky top-0 z-10">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="px-4 py-4 text-left 
                  font-lexend font-light text-[1.1rem]  text-gray-muted"
                >
                  {col.label}
                </th>
              ))}

              {actions && (
                <th
                  className="px-4 py-4 text-left whitespace-nowrap
                  font-lexend font-light text-[1.1rem] text-gray-muted"
                >
                  Action
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
              >
                {columns.map((col, index) => {
                  const rawValue = getNestedValue(row, col.key);

                  const value = col.render
                    ? col.render(rawValue, row, rowIndex)
                    : rawValue ?? "-";

                  return (
                    <td
                      key={index}
                      className="px-4 py-3 whitespace-nowrap
                      font-lexend font-light text-base text-gray-800"
                    >
                      {value}
                    </td>
                  );
                })}

                {actions && (
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex gap-3">
                      {actions.map((Action, i) => (
                        <Action key={i} row={row} />
                      ))}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {pagination && (
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-3 flex justify-end">
          <Pagination pageSize={pageSize} total={total} />
        </div>
      )}
    </div>
  );
};

export default BasicTable;