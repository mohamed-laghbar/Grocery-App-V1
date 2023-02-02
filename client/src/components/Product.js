import React, {useState} from 'react';

import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Counter from '../components/Counter';

const Product = props => {
  return (
    <View style={styles.container}>
      {/* First Box */}
      <View style={styles.box}>
        <View>
          <Image style={styles.images} source={props.image} />
        </View>
      </View>

      {/* Second Box */}
      <View style={styles.box}>
        <View style={styles.product_text}>
          <Text style={styles.text}>{props.title}</Text>
          <Counter />
        </View>
      </View>

      {/* third Box */}
      <View style={styles.box}>
        <View style={styles.product_text}>
          <Text style={styles.product_price}>{props.price}</Text>
          <TouchableOpacity  style={styles.add_btn}>
            <Text style={styles.btn_text}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  images: {
    width: 110,
    height: 110,
    backgroundColor: '#EEC4C4',
    borderRadius: 6,
    marginTop: 25,
    marginLeft: 5,
  },
  box: {
    width: 250,
    height: 150,
    margin: 5,
    flex: 1,
  },
  product_title: {},
  product_text: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 19,
    fontFamily: 'poppins',
    color: 'black',
  },
  add_btn: {
    backgroundColor: '#54B435',
    borderRadius: 3,
    paddingHorizontal: 20,
    paddingVertical: 6,
    width: 130,
  },
  btn_text: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
  product_price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default Product;
