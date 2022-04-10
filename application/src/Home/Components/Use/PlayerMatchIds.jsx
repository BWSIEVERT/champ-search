import axios from "axios";
import React, { useState, useEffect } from "react";
import classes from "../../Styles/PlayerMatchIds.module.css";
import Loading from "./Loading";
import PlayerMatchData from "./MatchResults/PlayerMatchData";

function PlayerMatchIds({ accountData }) {
  const [matchList, setMatchList] = useState({});

  const fetchMatchList = async () => {
    try {
      const url = `https://radiant-fjord-26670.herokuapp.com/summoner/matches/riot/`;
      await axios.post(url, accountData).then((response) => {
          const matchesGrouped = response.data.matchList[0]
          setMatchList({
              match: matchesGrouped
          })
      })
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
      fetchMatchList();
  }, [])

  return (
    <>
      <div className={classes.wrapper}>
        {Object.keys(accountData).length === 0 ? (
          <Loading />
        ) : (
          <div className={classes.stats_container}>
              {Object.keys(matchList).length === 0 ? null : <PlayerMatchData matchList={matchList} />}
          </div>
        )}
      </div>
    </>
  );
}

export default PlayerMatchIds;
