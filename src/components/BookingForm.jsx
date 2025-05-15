import React, { useRef, useState } from 'react';
import { DateRangePicker } from 'rsuite';
// import { FaCalendar, FaClock } from 'react-icons/fa';
// import { BsCalendar2MonthFill } from 'react-icons/bs';
import 'rsuite/DateRangePicker/styles/index.css';
import emailjs from '@emailjs/browser';

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

    const form = useRef();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_urm4vnl', 'template_tljn269', form.current, 'd54-UknTik_wnUOyp')
        .then((result) => {
            setFormSubmitted(true); // Set the form submission status to true
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="container my-5">
            <h2 className="mb-4">Book Bicycle for a Day or More</h2>
            <form  ref={form} onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
            {formSubmitted ? (

                 <p> Thank you for your message! I will get back to you soon.</p>
            
            ) : (
                <div>
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
                            <DateRangePicker shouldDisableDate={beforeToday()} 
                                format="MM/dd/yyyy HH:mm" 
                                block
                                onChange={handleDateRangeChange}
                                placeholder="Select date and time range"
                                name='date'
                                value={formData.date}
                            />
                        </>
                    </div>

                    <button type="submit" className="btn btn-success">Book Now</button>
                </div>
                )}
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