import { useEffect, useState } from "react";
import axios from "axios";
import getBaseUrl from "../../utils/baseUrl";

const useDashboard = () => {
  const [allItems, setAllItems] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchItem, setSearchItem] = useState({
    searchItem: "",
  });
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setSearchItem({
      searchItem: e.target.value,
    });
  };

  const getAllItem = async () => {
    try {
      const response = await axios.get(`${getBaseUrl()}/items`);
      console.log(response);
      if (response.data.code === 200) {
        setAllItems(response.data.data);
        console.log(allItems);
      }
    } catch (error) {
      alert(error);
    }
  };
  getAllItem();
  // Search API
  const handleSearchItem = async () => {
    try {
      const response = await axios.post(
        `${getBaseUrl()}/items/search`,
        searchItem
      );
      console.log("Response:", response.data);
      setSearchData(response.data.data);
      setIsSearching(true);
    } catch (error) {
      alert(error);
    } finally {
      setIsSearching(false);
    }
  };

  return {
    state: {
      allItems,
      searchData,
      searchItem,
      isSearching,
      isLoading,
    },
    actions: {
      handleSearchItem,
      handleChange,
      getAllItem,
    },
  };
};

export default useDashboard;
