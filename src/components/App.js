import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import DealList from "./DealList";
import DealDetail from "./DealDetail";
import SearchBar from "./SearchBar";
import ajax from "../ajax";

class App extends Component {
  state = {
    deals: [],
    dealsFromSearch: [],
    currentDealId: null
  };
  async componentDidMount() {
    const deals = await ajax.fetchInitialDeals();
    this.setState({ deals });
  }
  seachDeals = async searchTerm => {
    let dealsFromSearch = [];
    if (searchTerm.length > 0) {
      dealsFromSearch = await ajax.fetchDetailSearchResult(searchTerm);
    }
    this.setState({ dealsFromSearch });
  };
  clearSearch = () => {
    this.seachDeals();
  };
  setCurrentDeal = dealId => {
    this.setState({ currentDealId: dealId });
  };
  unSetCurrentDeal = () => {
    this.setState({ currentDealId: null });
  };
  currentDeal = () => {
    return this.state.deals.find(deal => deal.key === this.state.currentDealId);
    // return this.state.deals.find(deal => deal.key === this.state.currentDealId);
  };
  render() {
    if (this.state.currentDealId) {
      return (
        <View style={styles.main}>
          <DealDetail
            unSetCurrentDeal={this.unSetCurrentDeal}
            initialDeal={this.currentDeal()}
          />
        </View>
      );
    }
    if (this.state.deals.length > 0) {
      return (
        <View style={styles.main}>
          <SearchBar handleSearch={this.seachDeals} />
          <DealList
            deals={
              this.state.dealsFromSearch.length > 0
                ? this.state.dealsFromSearch
                : this.state.deals
            }
            onItemPress={this.setCurrentDeal}
          />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.header}>BakeSale</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  main: {
    marginTop: 30
  },
  header: {
    fontSize: 40
  }
});

export default App;
