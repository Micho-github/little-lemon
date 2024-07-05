import React, { useEffect, useState } from "react";
import moment from "moment";
import Home from "../Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TableReservation from "../Pages/TableReservation";
import ConfirmBooking from "../Pages/ConfirmBooking";

export default function Main() {
  const filters = ["This Week", "This Month"];
const [ClickedFilter, SetClickedFilter] = useState("This Week");
const [ClickedTimeSlot, SetClickedTimeSlot] = useState("");
const date = moment();
const [ClickedDay, SetClickedDay] = useState({
  fulldate: "",
});
const [ClickedTable, SetClickedTable] = useState("");
const [Guests_Number, SetGuests_Number] = useState(0);
const [Occasion, SetOccasion] = useState("");
const [FormIsValid, SetFormIsValid] = useState(false);

  return (
    <div className=" min-h-96 mt-24 md:mt-[120px] lg:mt-24">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/BookingForm"
            element={
              <TableReservation
                filters={filters}
                ClickedFilter={ClickedFilter}
                SetClickedFilter={SetClickedFilter}
                ClickedTimeSlot={ClickedTimeSlot}
                SetClickedTimeSlot={SetClickedTimeSlot}
                date={date}
                ClickedDay={ClickedDay}
                SetClickedDay={SetClickedDay}
                ClickedTable={ClickedTable}
                SetClickedTable={SetClickedTable}
                Guests_Number={Guests_Number}
                SetGuests_Number={SetGuests_Number}
                Occasion={Occasion}
                SetOccasion={SetOccasion}
                FormIsValid={Occasion}
                SetFormIsValid={SetFormIsValid}
              />
            }
          />
          <Route
            path="/ConfirmBooking"
            element={
              <ConfirmBooking
                filters={filters}
                ClickedFilter={ClickedFilter}
                SetClickedFilter={SetClickedFilter}
                ClickedTimeSlot={ClickedTimeSlot}
                SetClickedTimeSlot={SetClickedTimeSlot}
                date={date}
                ClickedDay={ClickedDay}
                SetClickedDay={SetClickedDay}
                ClickedTable={ClickedTable}
                SetClickedTable={SetClickedTable}
                Guests_Number={Guests_Number}
                SetGuests_Number={SetGuests_Number}
                Occasion={Occasion}
                SetOccasion={SetOccasion}
                FormIsValid={Occasion}
                SetFormIsValid={SetFormIsValid}
              />
            }
          />
        </Routes>
    </div>
  );
}
