import useSWR, { mutate } from "swr";
import { ingramserver } from "../../utils/server";
import { loadState } from "../../utils/localstorage";

const YourComponent = () => {
  // Define your API endpoint
  const apiUrl = `${ingramserver}/resellers/v6/catalog/priceandavailability?includeAvailability=false&includePricing=true&includeProductAttributes=true`; // Replace with your API endpoint

  // Fetch data using SWR
  const { data, error } = useSWR(apiUrl);

  const postData = async () => {
    const token = loadState("token");

    try {
      // Make a POST request
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          accept: "application/json",
          "IM-CustomerNumber": "70-040712",
          "IM-CountryCode": "US",
          "IM-SenderID": "305AeroSupplies",
          "IM-CorrelationID": "fbac82ba-cf0a-4bcf-fc03-0c5084",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          products: [
            {
              ingramPartNumber: "6YE881",
            },
          ],
        }),
      });

      if (response.ok) {
        mutate(apiUrl);
      } else {
        console.error("POST request failed");
      }
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button onClick={() => postData()}>Submit</button>
    </div>
  );
};

export default YourComponent;
