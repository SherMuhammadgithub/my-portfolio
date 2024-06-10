import React from "react";
import "./ExperiencedCard.css";

const ExperienceCard = ({ year, title, state }) => {
  return (
    <div className="card bg-red-500 rounded-2xl text-white p-6 space-y-2">
      <div className="year font-bold text-lg text-[#693dc3]">{year}</div>
      <div className="title uppercase font-bold text-xl">{title}</div>
      <div className="state text-sm">{state}</div>
    </div>
  );
};

export default ExperienceCard;
