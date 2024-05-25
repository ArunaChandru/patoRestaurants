import React from 'react'
import { useState, useEffect } from 'react'
import './reservation.css'

function Reservation() {

const [selectedDate, setSelectedDate] = useState('');

useEffect(() => {
    // Function to get today's date in the format YYYY-MM-DD
    const getTodayDate = () => {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
      const yyyy = today.getFullYear();
      return `${yyyy}-${mm}-${dd}`;
    };

    // Set today's date as the default value when the component mounts
    setSelectedDate(getTodayDate());
  }, []);

const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
};

console.log(selectedDate)

return (
    <div className="reservationComponent">
        <div className="reservationimage">
            <div className="reservationTitle">
                <h1 className="reservationtitle">R E S E R V A T I O N</h1>
            </div>
        </div>
        <div className="ReservationForm">

            <div className="reservationTextBlock">
              <h2>Reservation</h2>
              <p>B O O K &nbsp; T A B L E</p>
            </div>

            <div className="form">
                <div>
                    <div className="column">
                        <label htmlFor="date">Date</label>
                        <input type="date"         
                          value={selectedDate}
                          onChange={handleDateChange}
                        />
                    </div>
                    <div className="column">
                        <label htmlFor="time">Time</label>
                        <input type="text" placeholder='Time'/>
                    </div>
                    <div className="column">
                        <label htmlFor="people">People</label>
                        <input type="text" placeholder='People'/>
                    </div>
                </div>
                <div>
                    <div className="column">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder='Name'/>
                    </div>
                    <div className="column">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" placeholder='Phone'/>
                    </div>
                    <div className="column">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Email'/>
                    </div>
                </div>
                <div>
                    <button className='submitBtn'>BOOK TABLE</button>
                </div>
            </div>

            <div className="reservationType">
                <div>
                    <div className="reserveTitle">R E S E R V E &nbsp; B Y  &nbsp; P H O N E</div>
                    <p className='reserveDetail'>
                    Donec quis euismod purus. Donec feugiat ligula rhoncus, varius nisl sed, tincidunt lectus. Nulla vulputate , lectus vel volutpat efficitur, orci lacus sodales sem, sit amet quam: <h5 className='bookingNumber'>(001) 345 6889</h5>
                    </p>
                </div>
                <div>
                <div className="reserveTitle">F O R &nbsp; E V E N T &nbsp; B O O K I N G</div>
                <p className='reserveDetail'>
                 Donec feugiat ligula rhoncus: <h5 className='bookingNumber'>(001) 345 6889</h5> , varius nisl sed, tinci-dunt lectus sodales sem.
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reservation