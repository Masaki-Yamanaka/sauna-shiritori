import React, { Component } from "react";
import Navigator from "./src/route/routes";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";

export default class App extends Component {
  state = {
    isReady: false
  };

  async _cacheResourcesAsync() {
    const images = [
      require("./src/img/cold.png"),
      require("./src/img/hot.png"),
      require("./src/img/cold.png"),
      require("./src/img/hardhot.png"),
      require("./src/img/spark.png"),
      require("./src/img/header-logo.png"),
      require("./src/img/start.png"),
      require("./src/img/tutrial1.png"),
      require("./src/img/tutrial2.png"),
      require("./src/img/tutrial3.png")
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return <Navigator />;
  }
}
