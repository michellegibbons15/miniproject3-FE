import React from "react";
import "../../Styles/Leagues/LeagueList.css"

const LeagueList = () => {
  return (
    <div className="league-container">
      <h1>Here are some local leagues for you to look into:</h1>
      <div className="league-lists">
      <div className="league-item">
        <h3>Soccer:</h3>
        <ul>
            <li>CVSA</li>
            <li>SCOR</li>
            <li>XL Sports</li>        
            <li>YMCA</li>
        </ul>
      </div>
      <div className="league-item">
        <h3>Basketball:</h3>
        <ul>
            <li>Bon Air Basketball</li>
            <li>YMCA</li>
            <li>Big Ben's Home Court</li>        
        </ul>
      </div>
      <div className="league-item">
        <h3>Volleyball:</h3>
        <ul>
            <li>RVC</li>
            <li>XZone Volleyball Club</li>
            <li>Richmond Elite</li>    
            <li>YMCA</li>     
        </ul>
      </div>
      <div className="league-item">
        <h3>Field Hockey:</h3>
        <ul>
            <li>Relentless</li>
            <li>Panthers</li>
            <li>Focus Field Hockey</li>        
        </ul>
      </div>
      <div className="league-item">
        <h3>PickleBall:</h3>
        <ul>
            <li>Performance PickleBall</li>
            <li>Bangers and Dinks</li>
            <li>RVA Pickle-Ball</li>        
        </ul>
      </div>
      <div className="league-item">
        <h3>Social Leagues:</h3>
        <ul>
            <li>River City Sport & Social Club</li>
            <li>Club Waka</li>        
        </ul>
      </div>
      </div>
    </div>
  );
};

export default LeagueList;
