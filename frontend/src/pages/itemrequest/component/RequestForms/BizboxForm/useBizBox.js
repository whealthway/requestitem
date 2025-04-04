import React, { useState, useEffect } from "react";
import getBaseUrl from "../../../../../utils/baseUrl";
import axios from "axios";
import showNoDataAlert from "../../../../../components/custom/ShowNoDataAlert";

const useBizBox = () => {
  const [bbCode, setBbCode] = useState("");
  const [bbCodeData, setBbCodeData] = useState([]);
  const [hasData, setHasData] = useState(true);
  const [buBranchSearch, setBuBranchSearch] = useState({ api: null, bu: null });

  useEffect(() => {
    if (buBranchSearch.api === null) {
      // setBbCodeData([]);
    } else {
      console.log(buBranchSearch);
      const handleBizboxSearch = async () => {
        const response = await axios.post(buBranchSearch.api, {
          bbCode: bbCode,
        });

        if (response.data.code === 200) {
          if (response.data.data.length > 0) {
            setBbCodeData(response.data.data[0]);
            setHasData(true);
          } else {
            setHasData(false);
            showNoDataAlert();
            setBbCodeData([]);
          }
        } else {
          alert(response.data.message);
        }
      };
      handleBizboxSearch();
      setBuBranchSearch({ api: null, bu: null });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buBranchSearch]);
  return {
    states: {
      buBranchSearch,
      bbCode,
      bbCodeData,
      hasData,
    },
    actions: {
      setBbCode,
      setBuBranchSearch,
    },
  };
};

export default useBizBox;
