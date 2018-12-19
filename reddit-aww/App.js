import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import ImageList from "./Components/ImageList";
import SearchBar from "./Components/SearchBar";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar search={this._handleSearch} />
        <ImageList images={this.state.items} />
      </View>
    );
  }

  _handleSearch = term => {
    this._fetchSearchResults(term);
  };

  _fetchSearchResults = term => {
    const url = `https://www.reddit.com/r/aww/search.json?q=${term}&restrict_sr=true&type=link`;

    fetch(url)
      .then(resp => resp.json())
      .then(json => {
        const images = json.data.children
          .filter(child => child.data.thumbnail !== "self")
          .filter(child => child.data.thumbnail !== "default")
          .map((child, i) => ({ key: `${i}`, image: child.data.thumbnail }));

        this.setState({ items: images });
      });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40
  }
});
