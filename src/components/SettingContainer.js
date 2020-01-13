import React, { Component } from "react";
import colors from "../styles/colors";
import { Text, View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default class SettingContainer extends Component {
  render() {
    const { content, bottomSpace } = this.props;
    return (
      <View style={[{ marginBottom: bottomSpace }, styles.contentWrapper]}>
        <FlatList
          data={content}
          renderItem={({ item }) => (
            <Text style={styles.contentText}>{item}</Text>
          )}
          keyExtractor={item => item}
          scrollEnabled={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 19,
    borderRadius: 20
  },
  contentText: {
    color: colors.pink01,
    fontSize: 14,
    lineHeight: 18,
    paddingVertical: 10
  }
});
