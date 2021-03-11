import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faFlag,
  faFutbol,
  faMarsStrokeV,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import male from "../../images/male.png";
import female from "../../images/female.png";
import "./TeamDetail.css";

const TeamDetail = () => {
  const { idTeam } = useParams();
  const [team, setTeam] = useState({});
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.teams[0]);
        setTeam(data.teams[0]);
      });
  }, []);
  const {
    strTeamBanner,
    strDescriptionEN,
    strGender,
    strTeamFanart3,
    strTeam,
    intFormedYear,
    strCountry,
    strSport,
  } = team;
  return (
    <div className="detail-style">
      <div className="container main-style">
        <div className="my-4">
          <img src={strTeamBanner} alt="" />
        </div>
        <div className="main-section-style">
          <div className="row">
            <div className="col-md-7 p-4">
              <h3>{strTeam}</h3>
              <p><FontAwesomeIcon icon={faClock} /> Founded : {intFormedYear}</p>
              <p>
                <FontAwesomeIcon icon={faFlag} /> Country : {strCountry}
              </p>
              <p>
                <FontAwesomeIcon icon={faFutbol} /> Spots Type : {strSport}
              </p>
              <p>
                <FontAwesomeIcon icon={faMarsStrokeV} /> Gender : {strGender}
              </p>
            </div>
            <div className="detail-img-style p-4 col-md-5">
              {/* <img src={} alt="" /> */}
              {<img src={strGender == "Female" ? female : male} />}
            </div>
          </div>
        </div>
        <div className="pt-5">
          <p>{strDescriptionEN}</p>
        </div>
        <div className="text-center icon-style">
          <a className="facebook" href="">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a className="youtube" href="">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a className="instagram" href="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
