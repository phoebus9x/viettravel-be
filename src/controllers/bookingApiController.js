const { createBookingService } = require("../services/bookingService");

module.exports = {
  postBookingApi: async (req, res) => {
    let {
      user_id,
      tour_id,
      booking_date,
      start_date,
      end_date,
      total_price,
      status_id,
    } = req.body;

    let bookingData = {
      user_id,
      tour_id,
      booking_date,
      start_date,
      end_date,
      total_price,
      status_id,
    };

    let booking = await createBookingService(bookingData);
    return res.status(200).json({
      EC: 0,
      data: booking,
    });
  },
};
