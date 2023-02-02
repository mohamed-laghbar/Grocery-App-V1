import React from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  StyleSheet,
} from 'react-native';
import CartItem from '../components/CartItem';
import Footer from '../components/Footer';
import Line from '../components/Line';
import Product from '../components/Product';

export default function CartScreen({navigation}) {
  const [totalCart, settotalCart] = useState(0);
  const goToCheckout = () => {
    navigation.navigate('Checkout');
  };

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
  ];

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{backgroundColor: '#F7F7F7'}}>
        <View>
          {product.map(p => {
            return (
              <View style={styles.container}>
                <CartItem
                  title={p.title}
                  descreption={p.descreption}
                  price={`${p.price}.00 DH`}
                  image={p.image}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.place_oredr_container}>
        <Text style={styles.total_price}>Total: {totalCart}</Text>
        <TouchableOpacity onPress={goToCheckout} style={styles.place_order_btn}>
          <Text style={styles.text_place_order}>Place Order</Text>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    shadowColor: '#6B728E',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 2,
    shadowRadius: 9,
    elevation: 9,
    backgroundColor: 'white',
  },
  place_order_btn: {
    backgroundColor: '#54B435',
    padding: 15,
    width: 370,
    height: 55,
    fontSize: 40,
    borderRadius: 5,
  },
  place_oredr_container: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 10,
    alignSelf: 'center',
  },
  text_place_order: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  total_price: {
    backgroundColor: '#E8E2E2',
    padding: 15,
    width: 370,
    fontSize: 19,
    borderRadius: 5,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
  },
});
