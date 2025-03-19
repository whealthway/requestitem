import React, { useState, useEffect } from "react";
import getBaseUrl from "../../../../../utils/baseUrl";
import axios from "axios";
import showNoDataAlert from "../../../../../components/custom/ShowNoDataAlert";

const useBizBox = () => {
  const [bbCode, setBbCode] = useState("");
  const [bbCodeData, setBbCodeData] = useState([]);
  const [hasData, setHasData] = useState(true);
  const [buBranch, setBuBranch] = useState("");

  useEffect(() => {
    if (buBranch === "") {
      setBbCodeData([]);
    } else {
      const handleBizboxSearch = async () => {
        const response = await axios.post(
          `${getBaseUrl()}/bizbox_masci/findBbcodeDesc`,
          { bbCode: bbCode }
        );

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
      setBuBranch("");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buBranch]);
  return {
    states: {
      buBranch,
      bbCode,
      bbCodeData,
      hasData,
    },
    actions: {
      setBbCode,
      setBuBranch,
    },
  };
};

export default useBizBox;
