import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faFlag,
  faFutbol,
  faMarsStrokeV,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
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
  }, [idTeam]);
  const {
    strTeamBadge,
    strTeamBanner,
    strDescriptionEN,
    strGender,
    strTeam,
    intFormedYear,
    strCountry,
    strSport,
    strFacebook,
    strYoutube,
    strTwitter,
  } = team;
  return (
    <div className="detail-style">
      <div className="py-5">
      <div className="py-4 text-center detail-banner" style={{backgroundImage: `url(${strTeamBanner})`}}>
          <img src={strTeamBadge} alt="" />
        </div>
      <div className="container py-4 main-style">
        <div className="main-section-style">
          <div className="row">
            <div className="col-md-7 p-5">
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
              {<img src={strGender === "Female" ? female : male} alt={strTeam} />}
            </div>
          </div>
        </div>
        <div className="pt-5">
          <p>{strDescriptionEN}</p>
        </div>
        <div className="d-flex justify-content-center mt-5 icon-style">
          <a target="_bank" className="facebook" href={'https://' + strFacebook}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a target="_bank"  className="faYoutube" href={'https://' + strYoutube}>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a target="_bank"  className="faTwitter" href={'https://www.' + strTwitter}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TeamDetail;
