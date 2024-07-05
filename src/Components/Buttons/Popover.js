import React, { useState, useRef, useEffect } from "react";
import { createPopper } from "@popperjs/core";
import { CakeIcon } from "@heroicons/react/24/outline";
import { LuPartyPopper } from "react-icons/lu";
import { FaFaceGrinWink } from "react-icons/fa6";
const Popover = (props) => {
  const [showPopover, setShowPopover] = useState(false);
  const buttonRef = useRef(null);
  const popoverRef = useRef(null);



  useEffect(() => {
    if (buttonRef.current && popoverRef.current) {
      createPopper(buttonRef.current, popoverRef.current, {
        placement: "bottom",
        modifiers: [
          { name: "arrow", options: { element: "[data-popper-arrow]" } },
        ],
      });
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowPopover(false);
      }
    };

    if (showPopover) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopover]);

  const togglePopover = (e) => {
    e.preventDefault();
    setShowPopover((prev) => !prev);
  };

  return (
    <div className="relative flex flex-row gap-4 items-center align-center justify-center">
      <button
        name="occasion"
        id="occasion"
        ref={buttonRef}
        onClick={(e) => togglePopover(e)}
        className={`px-4 py-2 w-full md:w-[290px] h-12 md:h-14 text-xl md:text-3xl rounded-lg text-white bg-gray-400 ${
          props.Occasion === ""
            ? ""
            : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors duration-150 ease-in-out"
        } rounded`}
      >
        {props.Occasion ? (
          props.Occasion === "birthday" ? (
            <div className="flex justify-center items-center gap-2">
              <CakeIcon color="white" width={25} className="md:scale-[1.5]" />{" "}
              Birthday
            </div>
          ) : (
            <div className="flex justify-center items-center gap-2">
              <LuPartyPopper
                color="white"
                width={25}
                className="md:scale-[1.25]"
              />{" "}
              Anniversary
            </div>
          )
        ) : (
          "None"
        )}
      </button>
      <div
        ref={popoverRef}
        role="tooltip"
        className={`absolute z-10 w-64 md:w-72 text-black transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm  ${
          showPopover ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="px-3 py-2 text-2xl md:text-3xl border-solid   border-b border-gray-200 rounded-t-lg">
          <li
            role="button"
            onClick={() => {
              props.SetOccasion("");
              setShowPopover(!showPopover);
            }}
            className=" flex justify-between odd:bg-gray-100 even:bg-white py-1 md:h-16 px-1 "
          >
            <div className="flex align-center justify-center  items-center gap-2 md:gap-4 lg:px-2">
              <FaFaceGrinWink
                color="black"
                width={30}
                className="md:scale-[1.5] "
              />
              None
            </div>
            <div
              className={` min-h-full min-w-2 border-solid border-2 border-green-500 ${
                props.Occasion === "" ? "bg-green-500" : ""
              }`}
            />
          </li>
          <li
            role="button"
            onClick={() => {
              props.SetOccasion("birthday");
              setShowPopover(!showPopover);
            }}
            className="flex justify-between bg-white md:h-16 py-1 px-1"
          >
            <div className="flex items-center gap-2 md:gap-4 lg:px-2">
              <CakeIcon color="black" width={30} className="md:scale-[1.5]" />{" "}
              Birthday
            </div>
            <div
              className={` min-h-full min-w-2 border-solid border-2 border-green-500 ${
                props.Occasion === "birthday" ? "bg-green-500" : ""
              }`}
            />
          </li>
          <li
            role="button"
            onClick={() => {
              props.SetOccasion("anniversary");
              setShowPopover(!showPopover);
            }}
            className="flex justify-between odd:bg-gray-50 even:bg-white md:h-16 py-1 px-1"
          >
            <div className="flex  items-center gap-2 md:gap-4 lg:px-2">
              <LuPartyPopper
                color="black"
                width={40}
                className="md:scale-[1.5]"
              />{" "}
              Anniversary
            </div>
            <div
              className={` min-h-full min-w-2 border-solid border-2 border-green-500 ${
                props.Occasion === "anniversary" ? "bg-green-500" : ""
              }`}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Popover;
