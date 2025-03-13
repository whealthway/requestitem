import axios from "axios";
import getBaseUrl from "../utils/baseUrl";

const useSearch = async (
  apiEndPoint,
  apiMethod,
  searchItem,
  setLoading,
  setSearchData
) => {
  try {
    setLoading(true);
    await axios({
      // Endpoint to send files
      url: `${getBaseUrl()}${apiEndPoint}`,
      method: apiMethod,
      headers: {},
      data: searchItem,
    })
      .then((response) => {
        if (response.data.code === 200) {
          setSearchData(response.data.data);
        } else {
          alert(response.data.message);
        }
      })
      .catch((err) => {
        alert(err);
      });
  } catch (error) {
    alert(error);
  } finally {
    setLoading(false);
  }
};

export default useSearch;
