import React, { useEffect, useState } from "react";
import { getUser, getRepos, getSingleRepo } from "../api/githubApi";
import RepoList from "../components/RepoList";
import Login from "../components/Login";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [repoBranches, setRepoBranches] = useState({}); // Stores branches for each repo

  useEffect(() => {
    getUser()
      .then((res) => {
        console.log("User Data:", res.data); 
        setUser(res.data);
      })
      .catch(() => setUser(null));
  }, []);

  const fetchRepos = () => {
    if (user?.user?.username) {
      getRepos(user.user.username).then((res) => setRepos(res.data));
    } else {
      console.error("Username is undefined");
    }
  };

  const fetchBranches = (repoName) => {
    if (repoBranches[repoName]) {
      // If already fetched, toggle collapse by removing it
      setRepoBranches((prev) => {
        const newRepoBranches = { ...prev };
        delete newRepoBranches[repoName];
        return newRepoBranches;
      });
    } else {
      // Fetch branches and store in state
      getSingleRepo(repoName, user.user.username).then((res) => {
        setRepoBranches((prev) => ({
          ...prev,
          [repoName]: res.data, // Store branches for this repo
        }));
      });
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {!user ? (
        <Login />
      ) : (
        <>
          <h2>👋 Welcome, {user?.displayName}</h2>
          <button onClick={fetchRepos}>📂 Fetch Repositories</button>

          {/* Pass branches state to RepoList */}
          <RepoList repos={repos} repoBranches={repoBranches} onSelect={fetchBranches} />
        </>
      )}
    </div>
  );
}

