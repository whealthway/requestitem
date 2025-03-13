const useOnChange = (e, setSearchItem) => {
  setSearchItem({
    searchItem: e.target.value,
  });
};

export default useOnChange;
