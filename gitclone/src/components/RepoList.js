import React from "react";
import BranchList from "./BranchList";

export default function RepoList({ repos, repoBranches, onSelect }) {
  return (
    <div>
      <h3>📂 Repositories</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {repos.map((repo) => (
          <li key={repo.name} style={{ marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                onClick={() => onSelect(repo.name)}
                style={{
                  background: "none",
                  border: "1px solid #ddd",
                  padding: "5px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                {repoBranches[repo.name] ? "📂 Collapse" : "📂 Expand"}
              </button>
              <strong>{repo.name}</strong>
            </div>

            {/* Show branches if available */}
            {repoBranches[repo.name] && (
              <BranchList branches={repoBranches[repo.name]} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
