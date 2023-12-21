import { categoryOptions } from "../../../../utils/filterOptions";


const QuoteCategorySelector = ({ theme, textColor, register }) => {
  return (
    <div
      className={` ${
        theme === "light"
          ? "bg-neutral-100 outline-neutral-300"
          : "bg-neutral-900 outline-neutral-700"
      } block self-start relative text-lg outline outline-1 px-1 py-1 rounded-md`}
    >
      <select
        id="selectInput"
        {...register("category")}
        className={`${
          theme === "light"
            ? "bg-neutral-100 outline-neutral-300"
            : "bg-neutral-900 outline-neutral-700"
        } outline-1 bg-transparent capitalize focus:outline-none`}
        style={{
          color: textColor,
        }}
      >
        {categoryOptions.map(({ label, value }) => (
          <option key={value} className="bg-gray-800 capitalize" value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default QuoteCategorySelector;
