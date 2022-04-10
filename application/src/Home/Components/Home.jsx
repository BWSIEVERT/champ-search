import React, { useState } from "react";
import classes from "../Styles/Home.module.css";
import axios from "axios";
import Loading from "./Use/Loading";
import PlayerMatchIds from "./Use/PlayerMatchIds";

function Home() {

  const [summonerData, setSummonerData] = useState({
    summoner: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [accountData, setAccountData] = useState({});

  const handleChange = (e) => {
    setSummonerData({
      summoner: e.target.value,
    });
  };

  const handleSubmit = async (e, summoner) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const url = `https://radiant-fjord-26670.herokuapp.com/summoner/riot/`;
      const { data: res } = await axios.post(url, summonerData);
      if (res)
        setAccountData(res)
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      clearTimeout();
      setTimeout(() => {
        window.scroll({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }, 1900);
      clearTimeout();
      setSummonerData({
        summoner: "",
      });
    } catch (error) {
    }
  };

  return (
    <>
      <div className={classes.header}>
        {isLoading ? (
          <Loading />
        ) : (
          <div className={classes.form_container}>
            <form onSubmit={handleSubmit}>
              <label className={classes.label}>
                <input
                  type="text"
                  name="summoner"
                  required
                  autoComplete="off"
                  onChange={handleChange}
                  value={summonerData.summoner}
                />
                <span className={classes.placeholder}>Summoner Name</span>
              </label>
              <div className={classes.button_container}>
                <button type="submit">Search</button>
              </div>
            </form>
          </div>
        )}
      </div>
      {Object.keys(accountData).length === 0 ? null : <PlayerMatchIds accountData={accountData} />}
    </>
  );
}

export default Home;
