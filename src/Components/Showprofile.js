import React, { useState } from "react";
import "../App.css";
import axios from "axios";
function Showprofile() {
  const [username, setUsername] = useState("");
const [data, setData] = useState({});
  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${username}`)
      .then((result) => {
          return result.json()
      })
      .then((value) => {
        setData(value);
      });
  };

  return (
    <div className="main_div">
      <h1>Github User Profile</h1>

      <div className="search_div">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="search_input"
            placeholder="Enter Username"
            value={username}
            onChange={onChangeHandler}
          />
          <button className="search_button">Search</button>
        </form>
      </div>

      <div className="userdata">
        <div className="card mb-3" style={{ maxWidth: 540 }}>
          <div className="row g-0">
            <div className="col-md-4">
              {<img
                src={data.avatar_url}
                className="img-fluid rounded-start"
                alt="..."
                style={{ height:307 ,width:'600px'}}
              />}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Name</h5>
                <p className="card-text">{data.name}</p>
                <h5 className="card-title">Followers</h5>
                <p className="card-text">{data.followers}</p>
                <h5 className="card-title">Repos</h5>
                <p className="card-text">{data.public_repos}</p>
                <h5 className="card-title">Following</h5>
                <p className="card-text">{data.following}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showprofile;
