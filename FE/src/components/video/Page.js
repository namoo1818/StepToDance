import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Page({ item, style }) {
  return (
    <View style={[styles.pageItem, { backgroundColor: item.color }, style]}>
      <Text style={styles.pageNum}>{item.num}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pageItem: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  pageNum: {},
});