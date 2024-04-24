import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Page({ item, style }) {
  return (
    <View style={styles.pageItem}>
      <Text style={styles.pageNum}>{item.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pageItem: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
  },
  pageNum: {},
});