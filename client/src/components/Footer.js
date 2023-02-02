import React from 'react';
import {
  TouchableOpacity,
  Button,
  Text,
  Image,
  StyleSheet,
  View,
} from 'react-native';

export default function Footer({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        mouseEnterDelay={1000}
        onPress={() => navigation.navigate('Home')}>
        <Image
          style={styles.images}
          source={require('../assets/icons/home.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        mouseEnterDelay={1000}
        onPress={() => navigation.navigate('Cart')}>
        <Image
          style={styles.images}
          source={require('../assets/icons/cart.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        mouseEnterDelay={1000}
        onPress={() => navigation.navigate('WishList')}>
        <Image
          style={styles.images}
          source={require('../assets/icons/heart.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        mouseEnterDelay={1000}
        onPress={() => navigation.navigate('Profile')}>
        <Image
          style={styles.images}
          source={require('../assets/icons/user.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  images: {
    width: 30,
    height: 30,
    tintColor: '#062C30',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
