import { getCategoryColor } from "../../../../utils/getCategoryColor";
import { setTextColor } from "../../../../store/slices/quoteSlices/updateQuoteSlice";
import { Transition, Popover } from "@headlessui/react";
import { useDispatch } from "react-redux";
import categoryColors from "../../../../utils/getCategoryColor";

const QuoteColorSelector = ({ theme, textColor }) => {
  const dispatch = useDispatch();
  const handleUpdateTextColor = (color) => {
    dispatch(setTextColor(color));
  };

  return (
    <Popover className="relative w-full z-40">
      <Popover.Button className="w-full h-full">
        <div
          className={`${
            theme === "light"
              ? "bg-neutral-300 outline-neutral-300"
              : "bg-neutral-900 outline-neutral-700"
          } outline outline-2 flex justify-center items-center !w-[2.15rem] !h-[2.15rem] rounded-full`}
        >
          <i
            className="block !w-[1.75rem] rounded-full !h-[1.75rem]"
            style={{
              backgroundColor: textColor,
            }}
          ></i>
        </div>
      </Popover.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel
          className={`${
            theme === "light"
              ? "bg-white outline-neutral-300"
              : "bg-neutral-900 outline-neutral-700"
          } outline outline-1 absolute transform translate-x-[50%] right-[50%] z-40 shadow-lg rounded-lg  w-[40vw] max-w-[15rem] py-6 px-3
                        `}
        >
          <div className="flex gap-3 flex-wrap w-full">
            {categoryColors.map((color, idx) => (
              <Popover.Button
                className={`${
                  theme === "light"
                    ? "outline-neutral-300"
                    : "outline-neutral-700"
                } outline rounded-full !w-[2.5rem] !h-[2.5rem]`}
                key={idx}
                style={{
                  backgroundColor: getCategoryColor(color),
                }}
                onClick={(e) => {
                  handleUpdateTextColor(getCategoryColor(color));
                }}
              ></Popover.Button>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default QuoteColorSelector;
