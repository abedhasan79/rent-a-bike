import React, { useState } from 'react';
import { DateRangePicker } from 'rsuite';
// import { FaCalendar, FaClock } from 'react-icons/fa';
// import { BsCalendar2MonthFill } from 'react-icons/bs';
import 'rsuite/DateRangePicker/styles/index.css';

const {  beforeToday } =
  DateRangePicker;

const BookingForm = ({ bike }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        numberOfBikes: 1,
        bikeId: bike?.id || '',
        startDateTime: '',
        endDateTime: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateRangeChange = (value) => {
        if (value && value.length === 2) {
            const [start, end] = value;
            setFormData({
                ...formData,
                startDateTime: start.toLocaleString(),
                endDateTime: end.toLocaleString()
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${formData.name}, your booking for ${formData.numberOfBikes} bike(s) 
from ${formData.startDateTime} to ${formData.endDateTime} has been received!`);
        // Here you would send the data to your backend
    };

    return (
        <div className="container my-5">
            <h2 className="mb-4">Book Bicycle for a Day or More</h2>
            <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
                <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Number of Bikes</label>
                    <select
                        name="numberOfBikes"
                        className="form-select"
                        value={formData.numberOfBikes}
                        onChange={handleChange}
                        required
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Please select booking <b>date and time</b>:</label>
                    <>
                        <DateRangePicker shouldDisableDate={beforeToday()} format="MM/dd/yyyy HH:mm" block
                            onChange={handleDateRangeChange}
                            placeholder="Select date and time range"
                        />
                    </>
                </div>

                <button type="submit" className="btn btn-success">Book Now</button>
            </form>

            <div className="my-5">
                <h3>What Happens Next</h3>
                <ul className="list-unstyled">
                    <li className="mb-2">✔️ You’ll receive a confirmation within 2 hours regarding the availability of your selected dates.</li>
                    <li className="mb-2">✔️ Once availability is confirmed, you’ll be required to send an e-transfer (10$ per day for each bike) within 8 hours to secure your booking.</li>
                    <li className="mb-2">✔️ After payment is received, your booking will be officially confirmed. You may then pick up the bike on your scheduled date and time.</li>
                </ul>
            </div>
        </div>
    );
};

export default BookingForm;