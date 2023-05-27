import React, { useEffect, useState } from 'react';

function MapMakers() {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('markers.json');
      const data = await response.json();
      setDataArray(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Data Array:</h1>
      <ul>
        {dataArray.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MapMakers;
