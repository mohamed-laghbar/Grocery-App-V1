import React, {useState} from 'react';

import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import Counter from '../components/Counter';
import Footer from '../components/Footer';
import Line from '../components/Line';
import Product from '../components/Product';

const HomeScreen = ({navigation}) => {
  const product = [
    {
      title: 'Tomate',
      descreption: 'This is tomte descreption',
      price: '14',
      image: require('../assets/images/products/tomate.png'),
    },
    {
      title: 'Tomate',
      descreption: 'This is tomte descreption',
      price: '14',
      image: require('../assets/images/products/tomate.png'),
    },
    {
      title: 'Tomate',
      descreption: 'This is tomte descreption',
      price: '14',
      image: require('../assets/images/products/tomate.png'),
    },
    {
      title: 'Tomate',
      descreption: 'This is tomte descreption',
      price: '14',
      image: require('../assets/images/products/tomate.png'),
    },
    {
      title: 'Tomate',
      descreption: 'This is tomte descreption',
      price: '14',
      image: require('../assets/images/products/tomate.png'),
    },
    {
      title: 'Tomate',
      descreption: 'This is tomte descreption',
      price: '14',
      image: require('../assets/images/products/tomate.png'),
    },

  ];

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        {product.map(p => {
          return (
            <View>
              <Product
                title={p.title}
                descreption={p.descreption}
                price={`${p.price}.00 DH`}
                image={p.image}
              />
              <Line />
            </View>
          );
        })}
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});
export default HomeScreen;
