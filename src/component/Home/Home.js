import React, { useEffect, useState } from "react";
import Teams from "../Teams/Teams";
import Banner from "../Bunner/Banner";

const Home = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.teams);
        setTeam(data.teams);
      });
  }, []);
  return (
    <>
    <Banner />
    <div style={{ background: '#31D2F2', paddingTop: '30px'}}>
    <div className="container">
      <div className="row">
        {team.map((team) => (
          <Teams team={team}></Teams>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default Home;
