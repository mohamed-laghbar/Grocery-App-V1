import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import BTN_PLUS from '../assets/icons/ic_button_min.svg';
import BTN_MIN from '../assets/icons/ic_button_plus.svg';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(count => count + 1);
  };

  const decrease = () => {
    counter <= 0 ? setCounter(0) : setCounter(count => count - 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrease}>
        <Image
          style={styles.plus_btn}
          source={require('../assets/icons/minus.png')}
        />
      </TouchableOpacity>

      <Text style={styles.counter}>{counter}</Text>
      <TouchableOpacity onPress={increase}>
        <Image
          style={styles.plus_btn}
          source={require('../assets/icons/plus.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  plus_btn: {
    width: 30,
    height: 30,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  counter: {
    fontSize: 19,
    color: 'black',
  },
});
