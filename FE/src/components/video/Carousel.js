import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Page from './Page';

export default function Carousel({ pages, pageWidth, gap, offset }) {
  const [page, setPage] = useState(0);

  function renderItem({ item }) {
    return (
      <Page item={item} style={{ width: pageWidth, marginHorizontal: gap / 2 }} />
    );
  }

  const onScroll = (e) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap),
    );
    setPage(newPage);
  };

  return (
    <View style={styles.container}>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2,
        }}
        data={pages}
        decelerationRate="fast"
        horizontal
        keyExtractor={(item) => `page__${item.color}`}
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.indicatorWrapper}>
        {Array.from({ length: pages.length }, (_, i) => i).map((i) => (
          <View key={`indicator_${i}`} style={[styles.indicator, i === page && styles.focused]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    margin: 4,
    backgroundColor: '#dfdfdf',
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  focused: {
    backgroundColor: '#262626',
  },
  indicatorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
});
