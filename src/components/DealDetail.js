import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ajax from "../ajax";
import { priceDisplay } from "../utils";

class DealDetail extends Component {
  static propTypes = {
    initialDeal: PropTypes.object.isRequired,
    unSetCurrentDeal: PropTypes.func.isRequired
  };
  state = {
    deal: this.props.initialDeal,
    isLoading: true
  };
  async componentDidMount() {
    const fullDeal = await ajax.fetchDealDetails(this.state.deal.key);
    this.setState({ deal: fullDeal, isLoading: false });
  }
  render() {
    console.log(this.state.isLoading);
    const { deal } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.unSetCurrentDeal}>
          <Text style={styles.backBtn}> {"<"} Back</Text>
        </TouchableOpacity>
        <Image source={{ uri: deal.media[0] }} style={styles.image} />
        <View style={styles.description}>
          <Text style={styles.title}>{deal.title}</Text>
          <View style={styles.footer}>
            <Text style={styles.name}>{deal.cause.name}</Text>
            <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
          </View>
        </View>
        {!this.state.isLoading && (
          <View style={styles.additionalInfo}>
            <View style={styles.header}>
              <Image style={styles.avatar} source={{ uri: deal.user.avatar }} />
              <Text style={styles.userName}>{deal.user.name}</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.causeDescription}>{deal.description}</Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: "#fff"
  },
  backBtn: {
    fontSize: 20
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
  name: {},
  additionalInfo: {
    flexDirection: "column"
  },
  header: {
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 50
  },
  userName: {
    fontSize: 16,
    marginLeft: 10
  },
  causeDescription: {
    fontSize: 14
  }
});

export default DealDetail;
