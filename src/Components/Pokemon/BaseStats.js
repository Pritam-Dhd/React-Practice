import React, { useState,useEffect } from "react";

const BaseStats = (props) => {
  const stats = props.stats;
  const [totalStats, setTotalStats] = useState();

  // Calculate the total base stats
  const calculateTotalStats = () => {
    let total = 0;
    stats.forEach((stat) => {
      total += stat.base_stat;
    });
    setTotalStats(total);
  };

  useEffect(() => {
    calculateTotalStats();
  }, []);

  return (
    <>
      <div className="base_stats">
        <h5 className="mb-3">Base Stats</h5>
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-capitalize font-black">
              {stat.stat.name} : {stat.base_stat}
            </p>
          </div>
        ))}
        <p className="about-poke">Total Stats: {totalStats}</p>
      </div>
    </>
  );
};

export default BaseStats;
