import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { priceDisplay } from "../utils";
class DealItem extends Component {
  static propTypes = {
    deal: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired
  };
  handlePress = () => {
    this.props.onPress(this.props.deal.key);
  };
  state = {};
  render() {
    const { deal } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={this.handlePress}>
        <Image source={{ uri: deal.media[0] }} style={styles.image} />
        <View style={styles.description}>
          <Text style={styles.title}>{deal.title}</Text>
          <View style={styles.footer}>
            <Text style={styles.name}>{deal.cause.name}</Text>
            <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: "#fff"
  },
  image: {
    width: "100%",
    height: 150
  },
  description: {
    flexDirection: "column",
    margin: 10,
    height: 50
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  price: {},
  name: {}
});

export default DealItem;
