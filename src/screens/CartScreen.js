import React, {useContext} from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../Context/Provider';
import Ionicons from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;

const CartScreen = ({navigation}) => {
  const {cartItems, removeFromCart} = useContext(Context);
  console.log(cartItems);
  return (
    <View>
      <View
        style={{
          backgroundColor: '#AED6F1',
          height: 60,
          flexDirection: 'row',
        }}>
        <Ionicons
          name="arrow-back"
          style={styles.icon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>Cart</Text>
      </View>
      {cartItems.length ? (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.title}
          renderItem={({item}) => {
            return (
              <View style={styles.container}>
                <Image
                  style={styles.image}
                  source={{uri: item.imageLinks.thumbnail}}
                />
                <Text style={{fontSize: 18, color: '#34495E'}}>
                  {' '}
                  {item.title}
                </Text>
              </View>
            );
          }}
        />
      ) : (
        <Text
          style={{
            marginTop: 100,
            fontSize: 20,
            color: '#34495E',
            textAlign: 'center',
          }}>
          Your Cart is empty :(
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: width / 2.2,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: '#1A5276',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  image: {
    height: 200,
    width: width / 3,
    marginLeft: 15,
    marginTop: 15,
  },
  title: {
    color: '#1A5276',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: width / 3.5,
    textAlign: 'center',
    textDecorationLine: 'underline',
    paddingTop: 15,
  },
  icon: {
    color: '#1A5276',
    fontSize: 30,
    marginLeft: 10,
    fontWeight: 'bold',
    paddingTop: 15,
  },
  button: {
    width: width / 4,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#AED6F1',
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 160,
  },
});

export default CartScreen;
