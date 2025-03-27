import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import getBaseUrl from "../../utils/baseUrl";
import handleSearch from "../../hooks/useSearch";
import dataTransform from "../../data-mapping/dataTransformer";
import UnexpectedError from "../../components/custom/UnexpectedError";
import showNoDataAlert from "../../components/custom/ShowNoDataAlert";
import SuccessRequest from "../../components/custom/SuccessRequest";

const useItemRequest = () => {
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

  const [proceed, setProceed] = useState(false);

  const [selectedItemGroup, setSelectedItemGroup] = useState();

  const [itemGroup, setItemGroup] = useState([]);
  const [loading, setLoading] = useState(true);

  const [uoms, setUoms] = useState([]);
  const [requestMethod, setRequestMethod] = useState("manual");

  const [isSaving, setIsSaving] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [buApi, setBUApi] = useState("");

  const [submit, setSubmit] = useState(false);

  const handleSearchItem = async () => {
    try {
      setSearching(true);

      if (searchItem !== "") {
        setShowError(false);
        const [irResponse, spResponse] = await Promise.all([
          axios.post(`${getBaseUrl()}/bbtemp-masci/search-item-sap`, {
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
      setSearching(false);
      setProceed(false);
    }
  };

  const handleYesProceed = () => {
    setProceed(true);
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
      console.log(JSON.stringify(data));
      if (false) {
        setShowError(true);
      } else {
        const newData = dataTransform(selectedItemGroup.toLowerCase(), data);
        console.log(newData);
        setShowError(false);
        const response = await axios.post(buApi, {
          data: newData,
        });
        setIsSaving(true);
        if (response.data.code === 200) {
          reset();
          SuccessRequest();
        } else {
          alert(response.data.message);
        }
      }
    } catch (error) {
      UnexpectedError({ error });
    } finally {
      setIsSaving(false);
    }
  });

  // Get all API
  useEffect(() => {
    handleSearch(
      "/bbtemp-masci/item-group",
      "GET",
      "",
      setLoading,
      setItemGroup
    );
  }, []);

  //Get all UOMS
  useEffect(() => {
    handleSearch("/bbtemp-masci/uoms", "GET", "", setLoading, setUoms);
  }, []);

  const handleBackToSearch = () => {
    setSearchData([]);
    setProceed(false);
    setHasData(true);
  };
  const handleCancelButton = () => {
    setSubmit(false);
    setIsModalOpen(true);
  };

  const handleSubmitButton = (api) => {
    setBUApi(api);
    setSubmit(true);
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    submit ? handleSubmitData() : setProceed(false);
    setIsModalOpen(false);
    setHasData(true);
  };

  const handleCancel = () => {
    reset();
    setIsModalOpen(false);
    setHasData(true);
  };

  const handleCloseModal = () => {
    reset();
  };

  useEffect(() => {
    reset(
      { itemGroupCode: watch("itemGroupCode") } // Preserve 'country' field
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
      handleSearchItem,
      handleRadioChange,
      handleYesProceed,
      handleNotProceed,
      handleSubmitButton,
      handleCancelButton,
      handleCloseModal,
      handleConfirm,
      handleCancel,
      handleSubmitData,
      handleBackToSearch,
      setSearchItem,
      setSelectedItemGroup,
      setBUApi,
    },
  };
};

export default useItemRequest;

// Need to use redux for state management and API management to avoid above 250 lines of codes (future improvement - refactoring)
