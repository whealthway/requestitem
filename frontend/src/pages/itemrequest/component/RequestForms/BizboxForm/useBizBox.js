import React, { useState, useEffect } from "react";
import getBaseUrl from "../../../../../utils/baseUrl";
import axios from "axios";

const useBizBox = () => {
  const [bbCode, setBbCode] = useState("");
  const [bbCodeData, setBbCodeData] = useState([]);
  const [buBranch, setBuBranch] = useState("");

  useEffect(() => {
    if (buBranch === "") {
    } else {
      const handleBizboxSearch = async () => {
        const response = await axios.post(
          `${getBaseUrl()}/bizbox_masci/findBbcodeDesc`,
          { bbCode: bbCode }
        );

        if (response.data.code === 200) {
          setBbCodeData(response.data.data);
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
    },
    actions: {
      setBbCode,
      setBuBranch,
    },
  };
};

export default useBizBox;
