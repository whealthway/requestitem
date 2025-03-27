import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import getBaseUrl from "../../utils/baseUrl";
import UnexpectedError from "../../components/custom/UnexpectedError";
import showNoDataAlert from "../../components/custom/ShowNoDataAlert";
import { UPDATE_API } from "../../utils/endPoint";
import SuccessRequest from "../../components/custom/SuccessRequest";

const useDashboard = () => {
  const {
    register,
    unregister,
    handleSubmit,
    reset,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const [searchItem, setSearchItem] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [hasData, setHasData] = useState(true);
  const [searching, setSearching] = useState(false);
  const [showError, setShowError] = useState(false);
  const [buSearch, setBuSearch] = useState("");
  const [buSubmit, setBuSubmit] = useState("");

  useEffect(() => {
    if (buSearch === "") {
      // setSearchData([]);
    } else {
      const handleSearchItem = async () => {
        try {
          setSearching(true);
          console.log("busearch: " + buSearch);
          if (searchItem !== "") {
            setShowError(false);
            const [irResponse, spResponse] = await Promise.all([
              axios.post(buSearch, {
                searchItem: searchItem,
              }),
              axios.post(`${getBaseUrl()}/bizbox-masci/callSP/item-search`, {
                searchItem: searchItem,
              }),
            ]);

            // SP Response
            if (spResponse.data.code === 200) {
              if (spResponse.data.data.length > 0) {
                // setSearchData(spResponse.data.data);
              } else {
                setHasData(false);
                showNoDataAlert();
              }
            } else {
              alert(spResponse.data.message);
            }
            if (irResponse.data.code === 200) {
              // setSearchData(irResponse.data.data);
            } else {
              alert(irResponse.data.message);
            }
            setSearchData([...irResponse.data.data, ...spResponse.data.data]);
          } else {
            setShowError(true);
          }
        } catch (error) {
          UnexpectedError(error);
        } finally {
          // setBuSearch("");
          setSearching(false);
        }
      };
      handleSearchItem();
      setBuSearch("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buSearch]);

  const handleSubmitData = handleSubmit(async (data) => {
    try {
      console.log(UPDATE_API[buSubmit]);
      const response = await axios.post(UPDATE_API[buSubmit], {
        data: data,
      });

      if (response.data.code === 200) {
        reset();
        SuccessRequest();
      } else {
        alert(response.data.message);
      }
      setBuSearch(buSearch);
    } catch (error) {
      UnexpectedError(error);
    }
  });

  return {
    form: {
      register,
      unregister,
      setValue,
      reset,
      control,
      errors,
    },
    states: {
      searchItem,
      searching,
      searchData,
      hasData,
      showError,
      buSearch,
    },
    actions: {
      // handleSearchItem,
      setSearchItem,
      setBuSearch,
      handleSubmitData,
      setBuSubmit,
    },
  };
};

export default useDashboard;
