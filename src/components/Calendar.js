'use client';

import { useState, useEffect } from 'react';

const FullCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 60 * 1000); // Update every minute
        return () => clearInterval(timer);
    }, []);

    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    let days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(<div key={`empty-${i}`} className="border p-1 text-center border-gray-200">&nbsp;</div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
        let dayClass = "border p-1 text-center border-gray-200";
        if (i === currentDate.getDate()) {
            dayClass += " bg-red-500 text-white";
        }
        days.push(<div key={i} className={dayClass}>{i}</div>);
    }

    return (
        <>
        <div className="text-xl font-semibold mb-4 text-center">
            <h2 className="text-gray-700">Upcoming Events</h2>
        </div>
        <div className="bg-white p-4 shadow rounded">
            <div className="text-center mb-4">
                <div className="text-lg font-semibold">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </div>
            </div>
            <div className="grid grid-cols-7 gap-1">
                {days}
            </div>
        </div>
        </>
    );
};

export default FullCalendar;
