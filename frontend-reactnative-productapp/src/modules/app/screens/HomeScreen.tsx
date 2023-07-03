import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, Animated, RefreshControl } from 'react-native';

import { ProductContext } from '../../../context/products';

import { styles } from '../../../theme/AppTheme';

import ProductCard from '../components/ProductCard';

const HomeScreen = () => {

  const { products, getProducts } = useContext(ProductContext);

  const scrollY = useRef(new Animated.Value(0)).current;
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getProducts()
  }, [])

  const onRefresh = () => {
    setRefreshing(true);
    getProducts();

    setTimeout(() => {
      setRefreshing(false)
    }, 1000)
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <View style={styles.pageContainer}>
          <Animated.FlatList
            data={products}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                progressViewOffset={30}
                progressBackgroundColor='white'
                colors={['#2196F3', '#673AB7']}
                style={{ backgroundColor: '#2196F3' }}
                tintColor='white'
                title='Refreshing'
                titleColor='white'
              />
            }
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
            keyExtractor={({ id }) => id!.toString()}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            ListHeaderComponent={
              <View style={styles.pageTitleContainer}>
                <Text style={styles.pageTitle}>
                  Product API
                </Text>
                <Text style={styles.pageSubtitle}>
                  Aquí se está consumiendo api creada para con node, express & mysql
                </Text>
              </View>
            }
            renderItem={({ item, index }) => (
              <ProductCard index={index} product={item} scaleY={scrollY} />
            )}
            onEndReachedThreshold={0.4}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeScreen;