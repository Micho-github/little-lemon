import React, { useEffect } from "react";
import moment from "moment";
import { useFormik } from "formik";
import BookingSchema from "../Schemas/BookingSchema";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { getCurrentWeek, getCurrentMonth } from "../Handlers/DateHandler";
import Popover from "../Buttons/Popover";
import * as API from '../../API/BookingAPI'
import { useNavigate } from "react-router-dom";

const BookingForm = ({
  filters,
  ClickedFilter,
  SetClickedFilter,
  ClickedTimeSlot,
  SetClickedTimeSlot,
  date,
  ClickedDay,
  SetClickedDay,
  ClickedTable,
  SetClickedTable,
  Guests_Number,
  SetGuests_Number,
  Occasion,
  SetOccasion,
  FormIsValid,
  SetFormIsValid
}) => {

  const navigate = useNavigate();
  const RestaurantRender = [
    {
      type: "Table",
      Table_number: "Table 6",
      Is_valid: true,
    },
    {
      type: "Table",
      Table_number: "Table 7",
      Is_valid: false,
    },
    {
      type: "Table",
      Table_number: "Table 8",
      Is_valid: true,
    },
    {
      type: "Table",
      Table_number: "Table 3",
      Is_valid: true,
    },
    {
      type: "Table",
      Table_number: "Table 4",
      Is_valid: true,
    },
    {
      type: "Table",
      Table_number: "Table 5",
      Is_valid: true,
    },
    {
      type: "Table",
      Table_number: "Table 1",
      Is_valid: false,
    },
    {
      type: "door",
    },
    {
      type: "Table",
      Table_number: "Table 2",
      Is_valid: true,
    },
  ];

  // const TimeSlots = () => {
  //   const addhour = (time) => {
  //     time.add("hour", 1);
  //     time.set("minute", 0);
  //   };
  //   const addminutes = (time) => {
  //     time.set("minute", 30);
  //   };
  //   const timeSlots = [];
  //   let currentTime = moment().set("hour", 18).set("minute", 0);
  //   const endTime = moment().set("hour", 24).set("minute", 0);
  //   if (date.format("DD/MM") === ClickedDay.fulldate) {
  //     if (currentTime.hour > 6) {
  //       currentTime = moment();
  //       currentTime.minutes() > 30
  //         ? addhour(currentTime)
  //         : addminutes(currentTime);
  //     }
  //   }

  //   while (currentTime <= endTime) {
  //     timeSlots.push(currentTime.format("hh:mm A"));
  //     currentTime.add(30, "minutes");
  //   }
  //   return timeSlots;
  // };'
  
  const TimeSlots = API.fetchAPI(date.toDate());

  const handleClick = (e, filter) => {
    e.preventDefault();
    SetClickedFilter(filter);
    SetClickedDay({ fulldate: "" });
    SetClickedTimeSlot("");
  };

  const handleDayClick = (e, dayinfo) => {
    e.preventDefault();
    if (ClickedDay.fulldate === dayinfo.fulldate) {
      SetClickedDay("");
    } else {
    SetClickedDay(dayinfo);
  }
};

  const handleTimeClick = (e, time) => {
    e.preventDefault();
    if (ClickedTimeSlot === time) {
      SetClickedTimeSlot("");
    } else {
    SetClickedTimeSlot(time);
  }
};

  const handleTableClick = (e, Table) => {
    e.preventDefault();
    if (Table.Table_number === ClickedTable) {
      SetClickedTable("");
    } else {
      SetClickedTable(Table.Table_number);
    }
  };

  const handleGuests = (e) => {
    e.preventDefault();
    const value = e.target.value;

    if (value === "") {
      SetGuests_Number(0);
    } else {
      const parsedValue = parseInt(value, 10);

      if (isNaN(parsedValue)) {
        SetGuests_Number(0);
      } else if (parsedValue > 12) {
        SetGuests_Number(12);
      } else if (parsedValue < 0) {
        SetGuests_Number(0);
      } else {
        SetGuests_Number(parsedValue);
      }
    }
  };

  const handleChange = (e, type) => {
    e.preventDefault();
    if (type === "add") {
      SetGuests_Number((prevNumber) => Math.min(prevNumber + 1, 12));
    } else if (type === "sub") {
      SetGuests_Number((prevNumber) => Math.max(prevNumber - 1, 0));
    }
  };

  const formik = useFormik({
    initialValues: {
      Date: ClickedDay.fulldate,
      Time: ClickedTimeSlot,
      Table: ClickedTable,
      Number_Of_Guests: Guests_Number,
      Occasion: Occasion,
    },
    validationSchema: BookingSchema,
    onSubmit: (values) => {
      const FormValues = {
        Date: ClickedDay.fulldate,
        Time: ClickedTimeSlot,
        Table: ClickedTable,
        Number_Of_Guests: Guests_Number,
        Occasion: Occasion,
      }
      console.log(FormValues);
      SetFormIsValid(true);
      navigate('/ConfirmBooking')
    },

  });

  useEffect(() => {
    formik.setValues({
      Date: ClickedDay.fulldate,
      Time: ClickedTimeSlot,
      Table: ClickedTable,
      Number_Of_Guests: Guests_Number,
      Occasion: Occasion,
    });
  }, [ClickedDay, ClickedTimeSlot, ClickedTable, Guests_Number, Occasion]);

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-1">
      <div className="flex flex-row space-x-5 mt-2 overflow-x-auto  py-3 md:my-3">
        {filters.map((filter) => (
          <button
            onClick={(e) => handleClick(e, filter)}
            key={filter}
            className={` rounded-full text-[1.25rem] font-bold font-serif px-4 py-3 md:text-3xl lg:text-2xl ${
              ClickedFilter === filter
                ? "bg-[#495E57] text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="flex flex-row lg:grid lg:grid-cols-12 gap-2 py-3 overflow-x-auto font-monster">
        {ClickedFilter === "This Week" &&
          getCurrentWeek(date).map((dayInfo, index) => (
            <button
              className={`flex flex-col  min-h-24 md:min-h-36 min-w-16 md:min-w-24 text-lg md:text-2xl lg:text-xl rounded-lg items-center justify-center gap-2 text-center align-center ${
                ClickedDay.fulldate === dayInfo.fulldate
                  ? "bg-[#495E57] text-white font-bold"
                  : "bg-gray-200 "
              }`}
              key={index}
              onClick={(e) => handleDayClick(e, dayInfo)}
            >
              <h3>{dayInfo.day}</h3>
              <h3>{dayInfo.date}</h3>
            </button>
          ))}

        {ClickedFilter === "This Month" &&
          getCurrentMonth(date).map((dayInfo, index) => (
            <button
              className={`flex flex-col min-h-24 md:min-h-36 lg:min-h-16 min-w-16 md:min-w-24 lg:min-w-12 md:text-2xl text-lg lg:text-xl rounded-lg items-center justify-center gap-2 lg:gap-0 text-center align-center ${
                ClickedDay.fulldate === dayInfo.fulldate
                  ? "bg-[#495E57] text-white "
                  : "bg-gray-200 "
              }`}
              key={index}
              onClick={(e) => handleDayClick(e, dayInfo)}
            >
              <h3>{dayInfo.day}</h3>
              <h3>{dayInfo.date}</h3>
            </button>
          ))}
      </div>
      <span className="min-h-4 md:min-h-8 text-red-500 md:text-2xl font-monster">
      {formik.errors.Date}
      </span>
      <div className="flex flex-row space-x-5 overflow-x-auto py-3 md:my-3">
        {TimeSlots.map((timeSlot) => (
          <button
            onClick={(e) => handleTimeClick(e, timeSlot)}
            key={timeSlot}
            className={` rounded-xl text-[1.25rem] font-serif px-5 py-2 md:text-3xl lg:text-xl ${
              ClickedTimeSlot === timeSlot
                ? "bg-[#495E57] text-white font-bold"
                : "bg-gray-200 text-black"
            }`}
          >
            {timeSlot}
          </button>
        ))}
      </div>
      <span className="min-h-4 md:min-h-8 mb-3 text-red-500 md:text-2xl font-monster">
      {formik.errors.Time}
      </span>
      <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
        <div className="w-full">
          <div className="flex items-center  gap-4 justify-start translate-y-[1px] text-white px-5 py-3 rounded-t-lg text-xl md:text-3xl font-monster bg-[#495E57] shadow-md">
            <div>Table Selected: </div>
            {ClickedTable ? ClickedTable : "None"}
          </div>
          <div className="min-h-96 text-xl md:text-3xl font-monster grid grid-cols-3 gap-5 p-5 bg-[#495E57]">
            {RestaurantRender.map((object,index) => (
               <React.Fragment key={index}>
                {object.type === "Table" ? (
                  <button
                    onClick={(e) => handleTableClick(e, object)}
                    key={index}
                    className={`h-24 md:h-36 lg:h-24 flex flex-col rounded-xl items-center justify-center
              ${
                object.Table_number === ClickedTable
                  ? "border-4 border-white"
                  : ""
              }
              ${object.Is_valid ? "bg-green-400" : "bg-red-500 text-white"}
              shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out
              `}
                    disabled={!object.Is_valid}
                  >
                    {object.Table_number}
                  </button>
                ) : (
                  <div key={index} className="flex flex-col items-center justify-end">
                    <div className="w-24 md:w-36 h-6 md:h-10 text-center items-center bg-gray-100 rounded flex justify-center shadow-md ">
                      Entrance
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex md:pt-10 items-center justify-start gap-8 text-white px-5 py-3 rounded-b-lg text-xl md:text-3xl translate-y-[-1px] font-monster bg-[#495E57] shadow-md">
            <div className="flex gap-2 items-center">
              <div className="rounded-full w-4 md:w-8 h-4 md:h-8 bg-green-400 shadow-md" />
              Available
            </div>
            <div className="flex gap-2 items-center">
              <div className="rounded-full w-4 md:w-8 h-4 md:h-8 bg-red-500 shadow-md" />
              Reserved
            </div>
          </div>
        </div>
        <div className="min-h-4 md:min-h-8 text-red-500 md:text-2xl text-base col-span-2 font-monster">
      {formik.errors.Table}
      </div>
        <div className="mt-5 grid grid-cols-2 gap-x-1 gap-y-5 md:gap-y-10 mb-5 font-monster text-xl md:text-4xl">
          <label
            htmlFor="guests_number"
            className="flex items-center justify-center"
          >
            Guests Number
          </label>
          <div className="flex items-center justify-center">
            <button
              className="px-3 md:px-5 py-1 md:py-3 border-2 border-solid border-gray-300 active:border-black active:translate-y-[2px] transition-transform duration-150 ease-in-out"
              onClick={(e) => handleChange(e, "sub")}
            >
              <MinusIcon width={20} className="md:scale-[2]" />
            </button>
            <input
              type="text"
              name="guests_number"
              id="guests_number"
              className="mx-2 w-20  md:w-36 h-10 md:h-12 text-center text-3xl md:text-4xl font-serif rounded bg-gray-100 focus:outline-none"
              onChange={(e) => handleGuests(e)}
              value={Guests_Number}
            />
            <button
              className="px-3 md:px-5 py-1 md:py-3 border-2 border-solid border-gray-300 active:border-black active:translate-y-[2px] transition-transform duration-150 ease-in-out"
              onClick={(e) => handleChange(e, "add")}
            >
              <PlusIcon width={20} className="md:scale-[2]" />
            </button>
          </div>
          <div className="text-red-500 text-center md:text-2xl text-base col-span-2 font-monster">
      {formik.errors.Number_Of_Guests}
      </div>
          <label className="flex items-center justify-center">
            Special Occasion
          </label>
          <Popover Occasion={Occasion} SetOccasion={SetOccasion} />
        </div>
      </div>

      <div className="w-full flex items-center align-center justify-center ">
        <button type="submit" className="active:bg-green-500 lg:w-72 w-full mb-5 md:mt-5 text-xl md:text-3xl bg-[#F4CE14] font-serif py-3 rounded-full font-bold">
          Continue
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
