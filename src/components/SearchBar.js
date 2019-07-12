import React, { Component } from "react";
import PropTypes from "prop-types";
import { debounce } from "lodash";
import { View, Text, StyleSheet, TextInput } from "react-native";
class SearchBar extends Component {
  static propTypes = {
    handleSearch: PropTypes.func.isRequired
  };
  state = {
    searchTerm: ""
  };
  debounceSearchDeals = debounce(this.props.handleSearch, 300);
  handleSearch = searchTerm => {
    this.setState({ searchTerm }, () => {
      this.debounceSearchDeals(this.state.searchTerm);
    });
  };
  render() {
    return (
      <TextInput
        onChangeText={this.handleSearch}
        placeholder="Search..."
        style={styles.input}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40
  }
});
export default SearchBar;
