import React from "react";
import axios from "axios";
import classes from "../../../../Styles/PlayerMatch.module.css";
import TeamOne from './Teams/TeamOne'
import TeamTwo from './Teams/TeamTwo'

function PlayerMatches({ matchCompiled }) {

    let secondsValue = matchCompiled.info.gameDuration

    const convertSecondsToMinutes = (secondsValue) = Math.floor(secondsValue / 60) + "M" + " " + (secondsValue % 60 ? secondsValue % 60 : '00') + "S";

    let teamOne = [];
    let teamTwo = [];

    function discoverTeams(teamParamOne, teamParamTwo) {
        matchCompiled.info.participants.map((summoner) => {
            if (summoner.win === true) {
                teamParamOne.push(summoner)
            } else {
                teamParamTwo.push(summoner)
            }
        })
    }
    discoverTeams(teamOne, teamTwo)

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.match_info}>
          <div className={classes.match_info__mode}>
            <h2>{matchCompiled.info.gameMode}</h2>
          </div>
          <div className={classes.match_info__duration}>
              <p>{`Duration:` + ' ' + convertSecondsToMinutes}</p>
          </div>
        </div>
        <div className={classes.team_one}>
            {teamOne.length === 0 ? null : <TeamOne teamOne={teamOne} />}
        </div>
        <div className={classes.versus}>
            <p>VS</p>
        </div>
        <div className={classes.team_one}>
        {teamOne.length === 0 ? null : <TeamTwo teamTwo={teamTwo} />}
        </div>
      </div>
    </>
  );
}

export default PlayerMatches;
