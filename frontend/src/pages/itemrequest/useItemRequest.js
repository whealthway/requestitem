import { useState } from "react";
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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(itemRequestSchema),
  });

  const [fields, setFields] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchItem, setSearchItem] = useState({
    searchItem: "",
  });
  const [isSearching, setIsSearching] = useState(false);
  const [itemNameCount, setItemNameCount] = useState(1);
  const [isSaving, setIsSaving] = useState(false);

  const [itemDescription, setItemDescription] = useState("");

  const handleRadioChange = (event) => {
    setItemDescription(event.target.value);
  };

  const handleChange = (e) => {
    setSearchItem({
      searchItem: e.target.value,
    });
  };

  const handleAddFields = () => {
    setFields([...fields, { field1: "", field2: "", field3: "" }]);
    setItemNameCount(itemNameCount + 1);
  };

  // Search API
  const handleSearchItem = async () => {
    try {
      const response = await axios.post(
        `${getBaseUrl()}/items/search`,
        searchItem
      );

      if (response.data.data.length === 0) {
        Swal.fire({
          title: "No record Found",
          text: "",
          icon: "info",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Okay",
        });
      }
      setSearchData(response.data.data);
      setIsSearching(true);
    } catch (error) {
      Swal.fire({
        title: `Unexpected error: ${error}`,
        text: "",
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Okay",
      });
    } finally {
      setIsSearching(false);
    }
  };

  // Create API
  const handleSubmitData = handleSubmit(async (data) => {
    try {
      const date = new Date();
      setFields([]);
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

      const response = await axios.post(`${getBaseUrl()}/items`, {
        data: data,
      });
      setIsSaving(true);

      if (response.data.code === 200) {
        console.log(response);
        setIsSaving(false);
        reset();
        setFields([]);
      }
    } catch (error) {
      console.log(error);
    }
  });

  return {
    form: {
      register,
    },
    state: {
      errors,
      searchData,
      searchItem,
      isSaving,
      isSearching,
      fields,
      itemDescription,
    },
    actions: {
      handleAddFields,
      handleSearchItem,
      handleSubmitData,
      handleChange,
      handleRadioChange,
    },
  };
};

export default useItemRequest;
