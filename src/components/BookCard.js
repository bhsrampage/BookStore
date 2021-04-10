import React from 'react';
import {useEffect} from 'react';
import {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {Context} from '../Context/Provider';

const width = Dimensions.get('window').width;

const BookCard = ({data}) => {
  const {cartItems, addToCart, removeFromCart} = useContext(Context);

  const [added, setAdded] = useState(false);
  const add = () => {
    added
      ? (removeFromCart(data),
        ToastAndroid.show(
          `${data.title} Removed From Cart`,
          ToastAndroid.SHORT,
        ),
        setAdded(false))
      : (addToCart(data),
        ToastAndroid.show(`${data.title} Added To Cart`, ToastAndroid.SHORT),
        setAdded(true));
  };

  useEffect(() => {
    //console.log(cartItems);
    console.log(cartItems.find(t => t.title === data.title));
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: data.imageLinks.thumbnail}} />
      <View style={{flexDirection: 'column', margin: 10}}>
        <Text style={styles.title} numberOfLines={2}>
          {data.title}
        </Text>
        <Text style={[styles.info, {fontSize: 16}]} numberOfLines={3}>
          Author :- {data.authors} {'\n'}
          Publisher :- {data.publisher}
        </Text>
        <Text
          style={[styles.info, {fontSize: 14}]}
          numberOfLines={3}
          ellipsizeMode="tail">
          {data.description}
        </Text>
        <Text style={[styles.info, {fontSize: 16}]}>
          Price: $ {Math.floor(Math.random() * 100) + 50}
        </Text>
        <TouchableOpacity style={styles.button} onPress={add}>
          <Text style={styles.btnText}>{added ? 'Remove' : 'Add'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: width / 1.1,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: '#1A5276',
    alignSelf: 'center',
    marginTop: 15,
    flexDirection: 'row',
  },
  image: {
    height: 200,
    width: width / 3,
    marginLeft: 15,
    marginTop: 15,
  },
  title: {
    color: '#1A5276',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    width: width / 2,
  },
  info: {
    color: '#34495E',
    width: width / 2,
    marginTop: 5,
  },
  button: {
    width: width / 4,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#AED6F1',
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 170,
  },
  btnText: {
    alignSelf: 'center',
    color: '#34495E',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 12,
  },
});

export default BookCard;
