import { useEffect, useState } from 'react';

export default function BranchList({ branches }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (branches?.url) {
      fetch(`${branches.url}/branches`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching branches:", error);
          setLoading(false);
        });
    }
  }, [branches?.url]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

  return (
    <div>
      <h3>🌿 Branches</h3>
      <ul>
        {data.length === 0 ? (
          <li>No branches available</li> 
        ) : (
          data.map((branch) => (
            <li key={branch.name}>📌 {branch.name}</li>
          ))
        )}
      </ul>
    </div>
  );
}
