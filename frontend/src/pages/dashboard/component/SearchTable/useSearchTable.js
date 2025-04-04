import React, { useEffect, useState } from "react";

const useSearchTable = ({ data }) => {
  const [selectedData, setSelectedData] = useState(null);
  const [editRow, setEditRow] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleEditRow = (index) => {
    setEditRow(index);
  };

  useEffect(() => {
    setEditRow(null);
  }, [data]);

  const handleEditButton = (item) => {
    setSelectedData(item);
    setIsOpen(!isOpen);
  };

  return {
    states: {
      selectedData,
      editRow,
      isOpen,
    },
    actions: {
      setIsOpen,
      handleEditRow,
      handleEditButton,
    },
  };
};

export default useSearchTable;
