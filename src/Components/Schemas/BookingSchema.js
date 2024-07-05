import * as Yup from "yup";

const BookingSchema = Yup.object({
  Date: Yup.string().required("Please select a date"),
  Time: Yup.string().required("Please select a time slot"),
  Table: Yup.string().required("Please select a table"),
  Number_Of_Guests: Yup.number()
    .required("Please enter the number of guests")
    .min(1, "The number of guests must be at least 1")
    .max(12, "The number of guests cannot exceed 12"),
  Occasion: Yup.string().optional(),
})

export default BookingSchema;
