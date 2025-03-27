import getBaseUrl from "./baseUrl";

const DATA_UPON_LOADING_API = {
  itemGroup: `${getBaseUrl()}/bbtemp-masci/item-group`,
  uoms: `${getBaseUrl()}/bbtemp-masci/uoms`,
};

const SEARCH_CURRENT_REQUEST_API = {
  integrated: `${getBaseUrl()}/bizbox-masci/callSP/item-search`,
  masci: `${getBaseUrl()}/bbtemp-masci/search-item-sap`,
  str: `${getBaseUrl()}/bbtemp-str/search-item-sap`,
  sjdm: `${getBaseUrl()}/bbtemp-sjdm/search-item-sap`,
  dmmc: `${getBaseUrl()}/bbtemp-dmmc/search-item-sap`,
  pmvi: `${getBaseUrl()}/bbtemp-pmvi/search-item-sap`,
};

const SEARCH_BIZBOX_API = {
  masci: `${getBaseUrl()}/bizbox-masci/find-bb-code-desc`,
  str: `${getBaseUrl()}/bizbox-str/find-bb-code-desc`,
  sjdm: `${getBaseUrl()}/bizbox-sjdm/find-bb-code-desc`,
  dmmc: `${getBaseUrl()}/bizbox-dmmc/find-bb-code-desc`,
  pmvi: `${getBaseUrl()}/bizbox-pmvi/find-bb-code-desc`,
};

const CREATE_API = {
  masci: `${getBaseUrl()}/bbtemp-masci/create-item-request`,
  str: `${getBaseUrl()}/bbtemp-str/create-item-request`,
  sjdm: `${getBaseUrl()}/bbtemp-sjdm/create-item-request`,
  dmmc: `${getBaseUrl()}/bbtemp-dmmc/create-item-request`,
  pmvi: `${getBaseUrl()}/bbtemp-pmvi/create-item-request`,
};

const UPDATE_API = {
  masci: `${getBaseUrl()}/bbtemp-masci/update-item-sap`,
  str: `${getBaseUrl()}/bbtemp-str/update-item-request`,
  sjdm: `${getBaseUrl()}/bbtemp-sjdm/update-item-request`,
  dmmc: `${getBaseUrl()}/bbtemp-dmmc/update-item-request`,
  pmvi: `${getBaseUrl()}/bbtemp-pmvi/update-item-request`,
};

export {
  DATA_UPON_LOADING_API,
  SEARCH_CURRENT_REQUEST_API,
  SEARCH_BIZBOX_API,
  CREATE_API,
  UPDATE_API,
};
