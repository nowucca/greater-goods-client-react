import React from 'react';
import './HomeHeroBox.css';

interface HeroBoxProps {
  icon: string;
  id: string;
  title: string;
  byline: string;
}

const HeroBox: React.FC<HeroBoxProps> = ({ icon, id, title, byline }) => {
  return (
    <div className="hero-box">
      <i className={icon}></i>
      <h3>{title}</h3>
      <span id={id}>{byline}</span>
    </div>
  );
};

export default HeroBox;
