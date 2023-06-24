import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const TicketMaster = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=uNZtTlKdSpTKFJJtO17VU5MhbLRbqFCv");
        const json = await response.json();
        setData(json);
        setLoading(false);
        console.log("\nworking\n")
        console.log(json)
        // Perform any additional data manipulation or processing here
      } catch (error) {
        console.log("error")
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          {/* Render your data */}
          {data && (
            <Text>{JSON.stringify(data)}</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default TicketMaster;
