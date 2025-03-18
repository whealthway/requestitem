import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import getBaseUrl from "../../utils/baseUrl";
import { yupResolver } from "@hookform/resolvers/yup";
import itemRequestSchema from "../../yup/itemRequestSchema";
import handleSearch from "../../hooks/useSearch";
import { useAsyncError } from "react-router-dom";
import dataTransform from "../../data-mapping/dataTransformer";

const useItemRequest = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      checkboxes: [],
    },
  });
  const [searchItem, setSearchItem] = useState({ searchItem: "" });
  const [searchData, setSearchData] = useState([]);
  const [hasData, setHasData] = useState(true);
  const [searching, setSearching] = useState(false);
  const [isSearchBtnClick, setIsSearchBtnClick] = useState(false);

  const [proceed, setProceed] = useState(false);

  const [selectedItemGroup, setSelectedItemGroup] = useState();

  const [itemGroup, setItemGroup] = useState([]);
  const [loading, setLoading] = useState(true);

  const [uoms, setUoms] = useState([]);
  const [requestMethod, setRequestMethod] = useState("manual");

  const [isSaving, setIsSaving] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [submit, setSubmit] = useState(false);

  const handleSearchItem = async () => {
    try {
      setSearching(true);
      setIsSearchBtnClick(true);
      // Run both requests in parallel
      const [spResponse] = await Promise.all([
        // axios.post(`${getBaseUrl()}/bbtemp/items`, searchItem),
        axios.post(
          `${getBaseUrl()}/bizbox_masci/callSP/itemSearch`,
          searchItem
        ),
      ]);

      // SP Response
      if (spResponse.data.code === 200) {
        if (spResponse.data.data.length > 0) {
          setSearchData(spResponse.data.data);
        } else {
          setHasData(false);
        }
      } else {
        alert(spResponse.data.message);
      }

      // Process IR response
      // if (irResponse.data.code === 200) {
      //   setSearchCurrent(irResponse.data.data);
      // } else {
      //   alert(irResponse.data.message);
      // }
    } catch (error) {
      alert(error);
    } finally {
      setSearching(false);
      setProceed(false);
      setIsSearchBtnClick(false);
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
  };

  // Create API
  const handleSubmitData = handleSubmit(async (data) => {
    try {
      const date = new Date();
      // console.log(data["itemGroupCode"].value);
      // const newData = dataTransform(data["itemGroupCode"].value, data);
      data = {
        ...data,
        itemCode: "Test-ItemCode1",
        dateRequested: date.toISOString(),
        requestedById: "Test-requestedById",
        requestedBy: "Test-requestedBy",
        sellable: data.checkboxes["sellable"] || false,
        purchaseable: data.checkboxes["purchaseable"] || false,
        inventoryItem: data.checkboxes["inventorable"] || false,
      };
      delete data.checkboxes;
      console.log(data);
      //   const response = await axios.post(`${getBaseUrl()}/items`, {
      //     data: data,
      //   });
      //   setIsSaving(true);

      //   if (response.data.code === 200) {
      //     reset();
      //     setFields([]);
      //   } else {
      //     alert(response.data.message);
      //   }
    } catch (error) {
      alert(error);
    } finally {
      setIsSaving(false);
    }
  });

  // Get all API
  useEffect(() => {
    handleSearch("/bbtemp/itemgroup", "GET", "", setLoading, setItemGroup);
  }, []);

  //Get all UOMS
  useEffect(() => {
    handleSearch("/bbtemp/uoms", "GET", "", setLoading, setUoms);
  }, []);

  const handleBackToSearch = () => {
    setSearchData([]);
    setProceed(false);
    setHasData(true);
  };
  const handleCancelButton = () => {
    setIsModalOpen(true);
  };

  const handleSubmitButton = () => {
    setSubmit(true);
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    submit ? handleSubmitData() : setProceed(false);
    setIsModalOpen(false);
    setHasData(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setHasData(true);
  };

  const handleCloseModal = () => {
    reset();
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItemGroup]);

  return {
    form: {
      register,
      setValue,
      control,
    },
    states: {
      // errors,
      searchData,
      searchItem,
      requestMethod,
      itemGroup,
      loading,
      uoms,
      hasData,
      selectedItemGroup,
      proceed,
      isModalOpen,
      isSaving,
      searching,
      isSearchBtnClick,
      submit,
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
    },
  };
};

export default useItemRequest;
