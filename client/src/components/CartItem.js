import React, {useState} from 'react';

import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Counter from '../components/Counter';
import AntIcon from 'react-native-vector-icons/AntDesign';

const CartItem = props => {
  const [quantity, Setquantity] = useState(1);
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
          <Text></Text>
          <Text style={styles.text}>{props.title}</Text>
          <Text style={styles.qnt}>Quantity: {quantity}</Text>
          <Counter />
        </View>
      </View>

      {/* third Box */}
      <View style={styles.box}>
        <View style={styles.product_text}>
          <Text></Text>
          <Text style={styles.product_price}>{props.price} / Kg</Text>
          <TouchableOpacity style={styles.add_btn}>
            <Text style={styles.btn_text}>Delete</Text>
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
    marginTop: 40,
    marginLeft: 5,
  },
  box: {
    width: 250,
    height: 150,
    margin: 10,
    flex: 1,
  },
  product_title: {},
  product_text: {
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 19,
    fontFamily: 'poppins',
    color: 'black',
    marginStart: 9,
  },
  add_btn: {
    backgroundColor: 'red',
    borderRadius: 3,
    paddingHorizontal: 20,
    paddingVertical: 6,
    width: 100,
  },
  btn_text: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  product_price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  qnt: {
    fontSize: 15,
    marginStart: 9,
  },
});
export default CartItem;
