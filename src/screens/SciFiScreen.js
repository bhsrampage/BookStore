import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Dimensions,
  FlatList,
} from 'react-native';
import BookCard from '../components/BookCard';
import {API_KEY} from '../key';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SciFiScreen = ({route, navigation}) => {
  const {name} = route.params;
  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${name.toLowerCase()}&key=${API_KEY}`,
    ).then(res => res.json());
    setData(response.items);
  };

  useEffect(() => {
    getData();
  }, []);
  return data ? (
    <SafeAreaView style={styles.container}>
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
        <Text style={styles.title}> {name}</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View>
              <BookCard data={item.volumeInfo} />
            </View>
          );
        }}
      />
    </SafeAreaView>
  ) : (
    <View>
      <ActivityIndicator
        size="large"
        color={'#1A5276'}
        style={{marginTop: Dimensions.get('window').height / 2}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#1A5276',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: Dimensions.get('window').width / 3.5,
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
});

export default SciFiScreen;
