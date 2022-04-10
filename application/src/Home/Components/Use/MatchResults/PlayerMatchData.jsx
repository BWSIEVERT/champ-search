import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "../../../Styles/PlayerMatchData.module.css";
import PlayerMatches from "./IndividualMatch/PlayerMatch";
import NoData from '../../noData'

function PlayerMatchData({ matchList }) {
  const [matchCompiled, setMatchCompiled] = useState({});

  const fetchMatchData = async () => {
    try {
      const url = `https://radiant-fjord-26670.herokuapp.com/summoner/matches/compiled/riot/`;
      await axios.post(url, matchList).then((response) => {
        setMatchCompiled(response.data);
      });
    } catch (error) {
      console.log({
        errorMessage: error.message,
        descriptionMessage: `Could not find matchData for matchList: ${matchList}.`,
      });
    }
  };

  useEffect(() => {
    fetchMatchData();
  }, []);

  return (
    <>
      <div className={classes.wrapper}>
        {Object.keys(matchCompiled).length === 0 ? <NoData /> : (
          <PlayerMatches matchCompiled={matchCompiled} />
        )}
      </div>
    </>
  );
}

export default PlayerMatchData;
