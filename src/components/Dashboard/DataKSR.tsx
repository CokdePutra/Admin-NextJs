"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

const DataKSR = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalEvents, setTotalEvents] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        const eventsResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events`);
        
        setTotalUsers(usersResponse.data.length);
        setTotalEvents(eventsResponse.data.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-between mt-4 mb-4">
      <div className="shadow-lg p-6 rounded-lg border border-gray-200 flex-1 mr-4">
        <div className="flex justify-between items-center">
          <span className="text-4xl text-blue-500">👥</span>
          <span className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xl">Total Users</span>
        </div>
        <p className="text-4xl font-bold text-center mt-4">
          {totalUsers}
        </p>
      </div>

      <div className="shadow-lg p-6 rounded-lg border border-gray-200 flex-1">
        <div className="flex justify-between items-center">
          <span className="text-4xl text-green-500">📅</span>
          <span className="bg-green-500 text-white px-4 py-2 rounded-lg text-xl">Total Events</span>
        </div>
        <p className="text-4xl font-bold text-center mt-4">
          {totalEvents}
        </p>
      </div>
    </div>
  );
};

export default DataKSR;
