import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFetch = (name) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  const fetchData = (name) => {
    projectFirestore
      .collection(name)
      .get()
      .then((data) => {
        if (data.empty) {
          setIsError({ error: true, errorMsg: "no data found" });
          setIsLoading(false);
        } else {
          let result = [];
          data.docs.forEach((doc) => {
            result.push({ id: doc.id, ...doc.data() });
          });
          setData(result);
          setIsLoading(false);
        }
      });
  };

  useEffect(() => {
    fetchData(name);
  }, [name]);

  return { isLoading, data, isError };
};

export default useFetch;
