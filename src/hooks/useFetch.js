import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFetch = (name) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  const fetchData = async (name) => {
    try {
      const data = await projectFirestore.collection(name).get();
      if (data?.empty) {
        setIsError({ error: true, errorMsg: "Oops! No data found" });
        setIsLoading(false);
        return;
      }

      let result = [];
      data.docs.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      setData(result);
      setIsLoading(false);
    } catch (error) {
      setIsError({ error: true, errorMsg: "Something want wrong" });
    }
  };

  useEffect(() => {
    fetchData(name);
  }, [name]);

  return { isLoading, data, isError };
};

export default useFetch;
