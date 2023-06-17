import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StatHero = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8080/api/statistiques');
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchData();
  }, []);

  console.log('Stats state:', stats);

  return (
    <div className="bg-[#f5f5f5] flex flex-col md:flex-row items-center md:pl-[20%] gap-8 md:gap-[120px] md:h-[150px]">
      {stats && (
        <>
          <div className="flex flex-col items-center gap-1">
            <h1 className="font-[700] text-[40px] bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">
              {stats.utilisateurs}
            </h1>
            <h2 className="text-[20px]">Utilisateurs</h2>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h1 className="font-[700] text-[40px] bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">
              {stats.lieux}
            </h1>
            <h2 className="text-[20px]">Lieux touristiques</h2>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h1 className="font-[700] text-[40px] bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">
              {stats.feedback}
            </h1>
            <h2 className="text-[20px]">Feedback</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default StatHero;