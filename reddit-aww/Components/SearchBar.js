import React from "react";
import { TextInput, Button, View, StyleSheet } from "react-native";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search for something!"
          value={this.state.term}
          onChangeText={this._updateTerm}
        />
        <Button title="🕵️‍" onPress={this._handleSearch} />
      </View>
    );
  }

  _handleSearch = () => {
    this.props.search(this.state.term);
  };

  _updateTerm = term => {
    this.setState({ term });
  };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center"
  },
  input: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10
  }
});
