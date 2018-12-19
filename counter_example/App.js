import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header>Hello Class!</Header>
        <Text>Open up App.js to start working on your app!</Text>
        <Counter />
      </View>
    );
  }
}

const Header = ({ children }) => <Text style={styles.header}>{children}</Text>;

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  render() {
    return (
      <View style={styles.counterContainer}>
        <Button title="-" onPress={this._changeCounter(-1)} />
        <Text style={styles.counterText}>{this.state.count}</Text>
        <Button title="+" onPress={this._changeCounter(1)} />
      </View>
    );
  }

  _changeCounter = delta => e => {
    this.setState({ count: this.state.count + delta });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 24,
    color: "magenta"
  },
  counterContainer: {
    flexDirection: "row",
    marginTop: 25,
    marginBottom: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  counterText: {
    fontSize: 24
  }
});
