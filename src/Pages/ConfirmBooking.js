import React, { useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import SubmitModal from "../Components/Modals/SubmitModal"
import * as API from '../API/BookingAPI'

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function ConfirmBooking({
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
  SetFormIsValid,
}) {
    const [modalIsOpen, setModalIsOpen ] = useState(false);
    const [modalType, SetModalType] = useState("Error");
    const navigate = useNavigate();
    const FormValues = {
        Date: ClickedDay.fulldate,
        Time: ClickedTimeSlot,
        Table: ClickedTable,
        Number_Of_Guests: Guests_Number,
        Occasion: Occasion,
      }
    const OpenModalHandler = () => {
        setModalIsOpen(true);
      };

    const closeModalHandler = () => {
        setModalIsOpen(false);
      };

      const handleSubmit = async () => {
        const response = API.submitAPI(FormValues)
        if (response==true){
            SetModalType("Success");
        }
        await wait(2000);
        OpenModalHandler();
        SetClickedDay({ fulldate: "" });
        SetClickedTimeSlot("");
        SetClickedTable("");
        SetGuests_Number(0);
        SetOccasion("")
      }
  return (
    <div className="px-2 lg:px-10">
      <div className="relative p-3 bg-white flex justify-center items-center align-center text-2xl font-bold font-monster">
        <button
        onClick={()=>navigate("/BookingForm")}
        className="absolute left-0">
          <IoArrowBackCircle color="#495E57" size={60} />
        </button>
        <h1>Confirm Booking</h1>
      </div>
      <div className="lg:flex lg:justify-center">
      <img
      className="lg:h-96 "
      src={require("../Assets/images/greek-salad.jpg")} />
      </div>
      <div className="p-5 mt-5 grid grid-cols-2 gap-5 text-3xl font-monster">
        <label className=" text-center  lg:text-right lg:mr-24">Date</label>
        <p className="shadow-lg lg:w-64 text-center border-solid border-2 rounded-full font-bold">{ClickedDay.fulldate}</p>
        <label className="text-center  lg:text-right lg:mr-24">Time</label>
        <p className="shadow-lg lg:w-64 text-center border-solid border-2 rounded-full font-bold">{ClickedTimeSlot}</p>
        <label className="text-center  lg:text-right lg:mr-24">Table</label>
        <p className="shadow-lg lg:w-64 text-center border-solid border-2 rounded-full font-bold">{ClickedTable}</p>
        <label className="text-center  lg:text-right lg:mr-20">Guests</label>
        <p className="shadow-lg lg:w-64 text-center border-solid border-2 rounded-full font-bold">{Guests_Number}</p>
        <label className="text-center  lg:text-right lg:mr-16">Occasion</label>
        <p className="shadow-lg lg:w-64 text-center border-solid border-2 rounded-full font-bold">{Occasion ? Occasion:"None"}</p>
      </div>
      <div className="w-full flex items-center align-center justify-center ">
        <button onClick={handleSubmit} className="mt-5 active:bg-green-500 lg:w-72 w-full mb-5 md:mt-5 text-xl md:text-3xl bg-[#F4CE14] font-serif py-3 rounded-full font-bold">
          Confirm
        </button>
      </div>
      {modalIsOpen && <SubmitModal onCancel={closeModalHandler} onClick={closeModalHandler} type={modalType}/>}
    </div>
  );
}
