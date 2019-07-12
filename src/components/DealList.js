import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, FlatList } from "react-native";
import DealItem from "./DealItem";
class DealList extends Component {
  static propTypes = {
    deals: PropTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired
  };
  state = {};

  render() {
    const { deals, onItemPress } = this.props;
    return (
      <View style={styles.list}>
        <FlatList
          data={deals}
          renderItem={({ item }) => (
            <DealItem onPress={onItemPress} deal={item} />
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    width: "100%",
    backgroundColor: "#eee"
  }
});

export default DealList;
