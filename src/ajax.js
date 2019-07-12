const apiHost = "https://bakesaleforgood.com";
export default {
  fetchInitialDeals: async () => {
    try {
      const response = await fetch(`${apiHost}/api/deals`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  },
  fetchDealDetails: async dealId => {
    try {
      const response = await fetch(`${apiHost}/api/deals/${dealId}`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  },
  fetchDetailSearchResult: async serchTerm => {
    try {
      const response = await fetch(
        `${apiHost}/api/deals?searchTerm=${serchTerm}`
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  }
};
