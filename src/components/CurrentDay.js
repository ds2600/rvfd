'use client';
import { useState, useEffect } from 'react';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 60 * 1000); // Update every minute
        return () => clearInterval(timer);
    }, []);

    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];

    return (
        <div className="bg-white p-4 shadow rounded">
            <div className="text-center">
                <div className="text-lg font-semibold">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </div>
                <div className="text-red-500 font-bold">
                    Today: {currentDate.getDate()} {monthNames[currentDate.getMonth()]}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
