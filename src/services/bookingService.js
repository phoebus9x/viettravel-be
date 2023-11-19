const Booking = require("../models/booking");

const aqp = require("api-query-params");

const createBookingService = async (bookingData) => {
  try {
    let result = await Booking.create({
      user_id: bookingData.user_id,
      tour_id: bookingData.tour_id,
      booking_date: bookingData.booking_date,
      start_date: bookingData.start_date,
      end_date: bookingData.end_date,
      total_price: bookingData.total_price,
      status_id: bookingData.status_id,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  createBookingService,
};
