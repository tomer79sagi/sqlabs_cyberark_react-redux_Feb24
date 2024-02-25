import { useState, useEffect } from "react";

// Custom hook for fetching data from an API
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`An error occurred: ${response.statusText}`);
          }
          const data = await response.json();
          setData(data);
          setError(null); // Reset the error if the fetch is successful
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [url]); // Dependency array includes `url` to refetch when URL changes
  
    return { data, loading, error };
  }
  
  export default useFetch;