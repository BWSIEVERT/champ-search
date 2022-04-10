import React from "react";
import classes from "../../../../../Styles/TeamOne.module.css";
import ItemPlaceholder from "../../../../../../Images/none.png";

function TeamOne({ teamOne }) {
  const summonerSpellsList = {
    21: "SummonerBarrier",
    1: "SummonerBoost",
    14: "SummonerDot",
    3: "SummonerExhaust",
    4: "SummonerFlash",
    6: "SummonerHaste",
    7: "SummonerHeal",
    13: "SummonerMana",
    30: "SummonerPoroRecall",
    31: "SummonerPoroThrow",
    11: "SummonerSmite",
    39: "SummonerSnowURFSnowball_Mark",
    32: "SummonerSnowball",
    12: "SummonerTeleport",
    54: "Summoner_UltBookPlaceholder",
    55: "Summoner_UltBookSmitePlaceholder",
  };
  
  return (
    <>
      {teamOne.map((summoner) => (
        <div className={classes.wrapper}>
          <div className={classes.player_name}>
            <p>
              {summoner.summonerName} <span>/ {summoner.championName}</span>
            </p>
          </div>
          <div className={classes.player_info_container}>
            <div className={classes.container_champion}>
              <div className={classes.champion_info}>
                <div className={classes.champion_icon}>
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${summoner.championName}.png`}
                    alt={`${summoner.championName}`}
                  />
                </div>
                <div className={classes.champion_summoner_spells}>
                  <div className={classes.spell}>
                    <img
                      src={`http://ddragon.leagueoflegends.com/cdn/12.6.1/img/spell/${
                        summonerSpellsList[summoner.summoner1Id]
                      }.png`}
                      alt={`${summonerSpellsList[summoner.summoner1Id]}`}
                    />
                  </div>
                  <div className={classes.spell}>
                    <img
                      src={`http://ddragon.leagueoflegends.com/cdn/12.6.1/img/spell/${
                        summonerSpellsList[summoner.summoner2Id]
                      }.png`}
                      alt={`${summonerSpellsList[summoner.summoner2Id]}`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.container_items}>
              <div className={classes.items_inner}>
                <div className={classes.item}>
                  {summoner.item0 > 6999 || summoner.item0 === 0 ? (
                    <img src={ItemPlaceholder} alt={`Placeholder`} />
                  ) : (
                    <img
                      src={`http://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${summoner.item0}.png`}
                      alt={`item0`}
                    />
                  )}
                </div>
                <div className={classes.item}>
                  {summoner.item1 > 6999 || summoner.item1 === 0 ? (
                    <img src={ItemPlaceholder} alt={`Placeholder`} />
                  ) : (
                    <img
                      src={`http://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${summoner.item1}.png`}
                      alt={`item1`}
                    />
                  )}
                </div>
                <div className={classes.item}>
                  {summoner.item2 > 6999 || summoner.item2 === 0 ? (
                    <img src={ItemPlaceholder} alt={`Placeholder`} />
                  ) : (
                    <img
                      src={`http://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${summoner.item2}.png`}
                      alt={`item2`}
                    />
                  )}
                </div>
                <div className={classes.item}>
                  {summoner.item3 > 6999 || summoner.item3 === 0 ? (
                    <img src={ItemPlaceholder} alt={`Placeholder`} />
                  ) : (
                    <img
                      src={`http://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${summoner.item3}.png`}
                      alt={`item3`}
                    />
                  )}
                </div>
                <div className={classes.item}>
                  {summoner.item4 > 6999 || summoner.item4 === 0 ? (
                    <img src={ItemPlaceholder} alt={`Placeholder`} />
                  ) : (
                    <img
                      src={`http://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${summoner.item4}.png`}
                      alt={`item4`}
                    />
                  )}
                </div>
                <div className={classes.item}>
                  {summoner.item5 > 6999 || summoner.item5 === 0 ? (
                    <img src={ItemPlaceholder} alt={`Placeholder`} />
                  ) : (
                    <img
                      src={`http://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${summoner.item5}.png`}
                      alt={`item5`}
                    />
                  )}
                </div>
                <div className={classes.item}>
                  {summoner.item6 > 6999 || summoner.item6 === 0 ? (
                    <img src={ItemPlaceholder} alt={`Placeholder`} />
                  ) : (
                    <img
                      src={`http://ddragon.leagueoflegends.com/cdn/12.6.1/img/item/${summoner.item6}.png`}
                      alt={`item6`}
                    />
                  )}
                </div>
              </div>
              <div className={classes.status_inner}>
                  <p>Victory</p>
              </div>
            </div>
            <div className={classes.container_stats}>
                <div className={classes.kills_inner}>
                    <p>{summoner.kills} Kills</p>
                </div>
                <div className={classes.deaths_inner}>
                    <p>{summoner.deaths} Deaths</p>
                </div>
                <div className={classes.assists_inner}>
                    <p>{summoner.assists} Assists</p>
                </div>
                <div className={classes.ratio_inner}>
                    <p>{Math.round(summoner.challenges.kda).toFixed(2)} KDA</p>
                </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TeamOne;
