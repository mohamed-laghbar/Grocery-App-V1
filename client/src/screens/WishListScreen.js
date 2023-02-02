import React from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import Footer from '../components/Footer';

export default function WishListScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}></View>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
}
