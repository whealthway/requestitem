import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import getBaseUrl from "../../utils/baseUrl";
import handleSearch from "../../hooks/useSearch";
import dataTransform from "../../data-mapping/dataTransformer";
import UnexpectedError from "../../components/custom/UnexpectedError";
import showNoDataAlert from "../../components/custom/ShowNoDataAlert";
import SuccessRequest from "../../components/custom/SuccessRequest";
import { useSearchParams } from "react-router-dom";

const useItemRequest = () => {
  const [searchParams] = useSearchParams();
  const user = searchParams.get("user_id");
  let qualimedbu = searchParams.get("qualimed_bu");
  qualimedbu = qualimedbu.replace(/([{,])(\s*)(\w+)\s*:/g, '$1"$3":');
  qualimedbu = JSON.parse(qualimedbu);

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
  const [buSearch, setBuSearch] = useState({ api: null, bu: null });
  const [showError, setShowError] = useState(false);

  const [proceed, setProceed] = useState(false);

  const [selectedItemGroup, setSelectedItemGroup] = useState();
  const [selectedBU, setSelectedBU] = useState("");

  const [itemGroup, setItemGroup] = useState([]);
  const [loading, setLoading] = useState(true);

  const [uoms, setUoms] = useState([]);
  const [requestMethod, setRequestMethod] = useState("manual");

  const [isSaving, setIsSaving] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (buSearch.api === null) {
    } else {
      const handleSearchItem = async () => {
        try {
          setSearching(true);
          console.log("buSearch" + buSearch.api);
          console.log("SEARCH ITEM: " + JSON.stringify(searchItem))
          if (searchItem?.searchItem !== "") {
            setShowError(false);
            const [irResponse, spResponse] = await Promise.all([
              axios.post(buSearch.api, {
                searchItem: searchItem,
                buSearch: buSearch.bu,
              }),
              axios.post(`${getBaseUrl()}/bizbox-masci/callSP/item-search`, {
                searchItem: searchItem,
              }),
            ]);

            // SP Response
            if (spResponse.data.code !== 200) {
              alert(spResponse.data.message);
            }
            if (irResponse.data.code !== 200) {
              alert(irResponse.data.message);
            }

            if (
              irResponse.data.data.length === 0 &&
              spResponse.data.data.length === 0
            ) {
              setHasData(false);
              showNoDataAlert();
            }
            setSearchData([...irResponse.data.data, ...spResponse.data.data]);
          } else {
            setShowError(true);
          }
        } catch (error) {
          UnexpectedError(error);
        } finally {
          setSearching(false);
          setProceed(false);
        }
      };

      handleSearchItem();
      setBuSearch({ api: null, bu: null });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buSearch]);

  const handleYesProceed = () => {
    setProceed(true);
    setSearchItem({ searchItem: "" });
    setSearchData([]);
  };

  const handleNotProceed = () => {
    setProceed(false);
    setSearchItem({ searchItem: "" });
    setSearchData([]);
  };

  const handleRadioChange = (event) => {
    setRequestMethod(event.target.value);
    setSelectedItemGroup("");
    reset();
  };

  // Create API
  const handleSubmitData = handleSubmit(async (data) => {
    try {
      let newData = dataTransform(
        selectedItemGroup.toLowerCase(),
        data,
        user,
        selectedBU
      );
      const response = await axios.post(
        `${getBaseUrl()}/bbtemp-masci/create-item-request`,
        {
          data: newData,
        }
      );
      setIsSaving(true);
      if (response.data.code === 200) {
        reset();
        SuccessRequest();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      UnexpectedError({ error });
    } finally {
      setIsSaving(false);
      reset();
    }
  });

  useEffect(() => {
    handleSearch(
      "/bbtemp-masci/item-group",
      "GET",
      "",
      setLoading,
      setItemGroup
    );
  }, []);

  useEffect(() => {
    handleSearch("/bbtemp-masci/uoms", "GET", "", setLoading, setUoms);
  }, []);

  const handleBackToSearch = () => {
    setSearchData([]);
    setProceed(false);
    setHasData(true);
  };

  const handleCancelButton = () => {
    reset();
    setSubmit(false);
    setIsModalOpen(true);
  };

  const handleSubmitButton = (bu) => {
    setSelectedBU(bu);
    setSubmit(true);
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    submit ? handleSubmitData() : setProceed(false);
    setIsModalOpen(false);
    setHasData(true);
    setSelectedBU("");
    setSelectedItemGroup("");
  };

  const handleCancel = () => {
    reset();
    setIsModalOpen(false);
    setHasData(true);
    setSelectedBU("");
  };

  useEffect(() => {
    reset(
      { itemGroupCode: watch("itemGroupCode") } //preserve value
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItemGroup]);

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
      user,
      qualimedbu,
      itemGroup,
      uoms,
      searchItem,
      searching,
      searchData,
      hasData,
      requestMethod,
      selectedItemGroup,
      proceed,
      submit,
      showError,
      isSaving,
      loading,
      isModalOpen,
    },
    actions: {
      handleRadioChange,
      handleYesProceed,
      handleNotProceed,
      handleSubmitButton,
      handleCancelButton,
      handleConfirm,
      handleCancel,
      handleSubmitData,
      handleBackToSearch,
      setSearchItem,
      setSelectedItemGroup,
      setBuSearch,
      setSelectedBU,
    },
  };
};

export default useItemRequest;

// Need to use redux for state management and API management to avoid above 250 lines of codes (future improvement - refactoring)
