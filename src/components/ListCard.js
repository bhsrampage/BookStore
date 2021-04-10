import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const ListCard = props => {
  return (
    <View style={[styles.container, {flexDirection: 'row'}]}>
      <Entypo name="open-book" style={styles.icon} />
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 1.2,
    alignSelf: 'center',
    alignItems: 'flex-start',
    marginTop: 10,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#AED6F1',
    borderWidth: 4,
    borderColor: '#1A5276',
  },
  text: {
    marginLeft: 20,
    color: '#34495E',
    fontSize: 30,
    fontWeight: '500',
  },
  icon: {
    marginLeft: 20,
    color: '#34495E',
    fontSize: 30,
  },
});

export default ListCard;
