import React from "react";
import BookingForm from "../Components/Forms/BookingForm";

export default function TableReservation({
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

  return (
    <div className="px-2 lg:px-10">
      <h1 className="w-full md:p-3 text-center text-3xl md:text-4xl font-monster text-black rounded">
        Reserve A Table
      </h1>
      <BookingForm
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
    </div>
  );
}
