import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data)
      }).catch(err => {
        setLoading(false);
        setError("An error occured", err);
      })
  }, [url]);

  return {data, loading, error};
};

export default useFetch;