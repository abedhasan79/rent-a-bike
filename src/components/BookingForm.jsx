import React, { useState } from 'react';
import { DateRangePicker } from 'rsuite';
// import { FaCalendar, FaClock } from 'react-icons/fa';
// import { BsCalendar2MonthFill } from 'react-icons/bs';
import 'rsuite/DateRangePicker/styles/index.css';

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
                    <label className="form-label">Booking Date</label>
                    <>
                        <DateRangePicker format="MM/dd/yyyy HH:mm" block
                            onChange={handleDateRangeChange}
                            placeholder="Select date and time range"
                        />
                    </>
                </div>

                <button type="submit" className="btn btn-success">Book Now</button>
            </form>
        </div>
    );
};

export default BookingForm;