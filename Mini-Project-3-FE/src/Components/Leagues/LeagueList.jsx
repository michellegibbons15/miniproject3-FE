import React, {useState} from "react";
import "../../Styles/Leagues/LeagueList.css"

const LeagueList = () => {
   // States for filters
   const [type, setType] = useState("");
   const [division, setDivision] = useState("");
   const [sport, setSport] = useState("");

  return (
    <div className="league-container">
      <h1>Here are some local leagues for you to look into:</h1>
      {/* Filters Row */}
      <div className="filters-row">
        <div className="filter">
          <label>Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Select Type</option>
            <option value="rec">Recreational</option>
            <option value="travel">Travel</option>
          </select>
        </div>

        <div className="filter">
          <label>Division:</label>
          <select value={division} onChange={(e) => setDivision(e.target.value)}>
            <option value="">Select Division</option>
            <option value="adult">Adult</option>
            <option value="youth">Youth</option>
          </select>
        </div>

        <div className="filter">
          <label>Sport:</label>
          <select value={sport} onChange={(e) => setSport(e.target.value)}>
            <option value="">Select Sport</option>
            <option value="soccer">Soccer</option>
            <option value="basketball">Basketball</option>
            <option value="volleyball">Volleyball</option>
            <option value="pickleball">Pickleball</option>
            <option value="tennis">Tennis</option>
            <option value="field hockey">Field Hockey</option>
            <option value="lacrosse">Lacrosse</option>
            <option value="social clubs">Social Clubs</option>
            <option value="swimming">Swimming</option>
          </select>
        </div>
      </div>
      
      {/* League List */}
      <div className="league-lists">
      <div className="league-item">
        <h3>Soccer:</h3>
        <ul>
            <li>Central Virginia Soccer Association - CVSA:</li>
            <li>Sports Center of Richmond - SCOR:</li>
            <li>XL Sports</li>        
            <li>YMCA</li>
            <li>FC Richmond</li>
            <li>Richmond Strickers</li>
            <li>Richmond Kickers</li>
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
            <li>Richmond Volleyball Club - RVC:</li>
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
      <div className="league-item">
        <h3>Swimming:</h3>
        <ul>
            <li>NOVA Swim</li>
            <li>Posideon</li>        
        </ul>
      </div>
      <div className="league-item">
        <h3>Lacrosse:</h3>
        <ul>
            <li></li>
            <li></li>        
        </ul>
      </div>
      </div>
    </div>
  );
};

export default LeagueList;
