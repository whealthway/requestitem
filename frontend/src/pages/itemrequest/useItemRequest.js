import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import getBaseUrl from "../../utils/baseUrl";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import itemRequestSchema from "../../yup/itemRequestSchema";

const useItemRequest = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    // formState: { errors },
  } = useForm();

  const [searchItem, setSearchItem] = useState({ searchItem: "" });
  const [searchData, setSearchData] = useState([]);
  const [doneSearching, setDoneSearching] = useState(false);

  const [proceed, setProceed] = useState(false);

  const [selectedItemGroup, setSelectedItemGroup] = useState("");
  const [fields, setFields] = useState([]);
  const [itemNameCount, setItemNameCount] = useState(1);

  const [itemGroup, setItemGroup] = useState([]);
  const [loading, setLoading] = useState(true);

  const [uoms, setUoms] = useState([]);
  const [itemDescription, setItemDescription] = useState("");

  const [isSaving, setIsSaving] = useState(false);
  const handleRadioChange = (event) => {
    setItemDescription(event.target.value);
  };

  const handleChange = (e) => {
    setSearchItem({
      searchItem: e.target.value,
    });
  };

  // Search API
  const handleSearchItem = async () => {
    try {
      const response = await axios.post(
        `${getBaseUrl()}/items/search`,
        searchItem
      );
      setSearchData(response.data.data);
    } catch (error) {
      Swal.fire({
        title: `Unexpected error: ${error}`,
        text: "",
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Okay",
      });
    } finally {
      setDoneSearching(true);
    }
  };

  const handleYesProceed = () => {
    setProceed(true);
  };

  const handleNotProceed = () => {
    setProceed(false);
  };

  const handleAddFields = () => {
    setFields([...fields, { field1: "", field2: "", field3: "" }]);
    setItemNameCount(itemNameCount + 1);
  };

  // Create API
  const handleSubmitData = handleSubmit(async (data) => {
    try {
      const date = new Date();
      data = {
        ...data,
        itemCode: "Test-ItemCode5",
        dateRequested: date.toISOString(),
        requestedById: "Test-requestedById",
        requestedBy: "Test-requestedBy",
        purchaseable: false,
        sellable: false,
        inventoryItem: true,
        itemNameCount: itemNameCount,
      };
      console.log(data);
      // const response = await axios.post(`${getBaseUrl()}/items`, {
      //   data: data,
      // });
      // setIsSaving(true);

      // if (response.data.code === 200) {
      //   console.log(response);
      //   setIsSaving(false);
      //   reset();
      //   setFields([]);
      // }
    } catch (error) {
      alert(error);
    }
  });

  // Get all API
  useEffect(() => {
    const getItemGroup = async () => {
      try {
        const response = await axios.get(`${getBaseUrl()}/itemgroup`);
        console.log(response);
        if (response.data.code === 200) {
          setItemGroup(response.data.data);
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    getItemGroup();
  }, []);

  //Get all UOMS
  useEffect(() => {
    const getAlluoms = async () => {
      try {
        const response = await axios.get(`${getBaseUrl()}/uoms`);
        console.log(response);
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

  return {
    form: {
      register,
      control,
    },
    states: {
      // errors,
      searchData,
      searchItem,
      isSaving,
      doneSearching,
      fields,
      itemDescription,
      itemGroup,
      loading,
      uoms,
      selectedItemGroup,
      proceed,
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
    },
  };
};

export default useItemRequest;
