import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import getBaseUrl from "../../utils/baseUrl";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import itemRequestSchema from "../../yup/itemRequestSchema";
import handleSearch from "../../hooks/useSearch";

const useItemRequest = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    // formState: { errors },
  } = useForm();

  const [searchItem, setSearchItem] = useState({ searchItem: "" });
  const [searchDataSAP, setSearchDataSAP] = useState([]);
  const [searchDataAA, setSearchDataAA] = useState([]);
  const [searchCurrent, setSearchCurrent] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searching, setSearching] = useState(false);
  const [isSearchBtnClick, setIsSearchBtnClick] = useState(false);

  const [proceed, setProceed] = useState(false);

  const [selectedItemGroup, setSelectedItemGroup] = useState("");
  const [fields, setFields] = useState([
    { field1: "", field2: "", field3: "" },
  ]);
  const [itemNameCount, setItemNameCount] = useState(0);

  const [itemGroup, setItemGroup] = useState([]);
  const [loading, setLoading] = useState(true);

  const [uoms, setUoms] = useState([]);
  const [itemDescription, setItemDescription] = useState("");

  const [isSaving, setIsSaving] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setSearchItem({
      searchItem: e.target.value,
    });
  };

  // Search API
  // const handleSearchItem = () =>
  //   handleSearch(
  //     "/bbtemp/searchItemSAP",
  //     "POST",
  //     searchItem,
  //     setSearching,
  //     setSearchData
  //   );
  const handleSearchItem = async () => {
    try {
      setSearching(true);
      setIsSearchBtnClick(true);
      // Run both requests in parallel
      const [sapResponse, aaResponse, irResponse] = await Promise.all([
        axios.post(`${getBaseUrl()}/bbtemp/searchItemSAP`, searchItem),
        axios.post(`${getBaseUrl()}/bbtemp/searchItemAA`, searchItem),
        axios.post(`${getBaseUrl()}/bbtemp/items`, searchItem),
      ]);

      // Process SAP response
      if (sapResponse.data.code === 200) {
        setSearchDataSAP(sapResponse.data.data);
      } else {
        alert(sapResponse.data.message);
      }

      // Process AA response
      if (aaResponse.data.code === 200) {
        setSearchDataAA(aaResponse.data.data);
      } else {
        alert(aaResponse.data.message);
      }

      // Process IR response
      if (irResponse.data.code === 200) {
        setSearchCurrent(irResponse.data.data);
      } else {
        alert(irResponse.data.message);
      }
    } catch (error) {
      Swal.fire({
        title: `Unexpected error: ${error.message || error}`,
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Okay",
      });
    } finally {
      setSearching(false);
      setProceed(false);
      setIsSearchBtnClick(false);
    }
  };

  const handleYesProceed = () => {
    setProceed(true);
    setSearching(true);
  };

  const handleNotProceed = () => {
    setProceed(false);
    setSearching(true);
    setSearchItem({ searchItem: "" });
  };

  const handleAddFields = () => {
    setFields([...fields, { field1: "", field2: "", field3: "" }]);
    setItemNameCount(itemNameCount + 1);
  };

  const handleRadioChange = (event) => {
    setItemDescription(event.target.value);
  };

  // Create API
  const handleSubmitData = handleSubmit(async (data) => {
    try {
      const date = new Date();
      data = {
        ...data,
        itemCode: "Test-ItemCode1",
        dateRequested: date.toISOString(),
        requestedById: "Test-requestedById",
        requestedBy: "Test-requestedBy",
        itemNameCount: itemNameCount,
        sellable: data.sellable === itemDescription,
        purchaseable: data.purchaseable === itemDescription,
        inventoryItem: data.inventoryItem === itemDescription,
      };
      console.log(data);
      const response = await axios.post(`${getBaseUrl()}/items`, {
        data: data,
      });
      setIsSaving(true);

      if (response.data.code === 200) {
        reset();
        setFields([]);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert(error);
    } finally {
      setIsSaving(false);
    }
  });

  // Get all API
  useEffect(() => {
    handleSearch("/bbtemp/itemgroup", "GET", "", setLoading, setItemGroup);
    // const getItemGroup = async () => {
    //   try {
    //     const response = await axios.get(`${getBaseUrl()}/bbtemp/itemgroup`);

    //     if (response.data.code === 200) {
    //       setItemGroup(response.data.data);
    //     }
    //   } catch (error) {
    //     alert(error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // getItemGroup();
  }, []);

  //Get all UOMS
  useEffect(() => {
    const getAlluoms = async () => {
      try {
        const response = await axios.get(`${getBaseUrl()}/bbtemp/uoms`);

        if (response.data.code === 200) {
          setUoms(response.data.data);
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    getAlluoms();
  }, []);

  useEffect(() => {
    setSearchData([...searchDataSAP, ...searchDataAA, ...searchCurrent]);
  }, [searchDataSAP, searchDataAA, searchCurrent]);

  //Confirmation Modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    handleSubmitData();
    setIsModalOpen(false);
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItemGroup]);

  return {
    form: {
      register,
      control,
    },
    states: {
      // errors,
      isSearchBtnClick,
      searchData,
      searchItem,
      isSaving,
      searching,
      fields,
      itemDescription,
      itemGroup,
      loading,
      uoms,
      selectedItemGroup,
      proceed,
      isModalOpen,
      itemNameCount,
    },
    actions: {
      handleAddFields,
      handleSearchItem,
      handleSubmitData,
      handleChange,
      handleRadioChange,
      setSelectedItemGroup,
      handleYesProceed,
      handleNotProceed,
      handleOpenModal,
      handleCloseModal,
      handleConfirm,
    },
  };
};

export default useItemRequest;
