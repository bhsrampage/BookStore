import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import ListCard from '../components/ListCard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({navigation}) => {
  const genres = [
    {key: '1', name: 'Romance'},
    {key: '2', name: 'SciFi'},
    {key: '3', name: 'Mystery'},
    {key: '4', name: 'Thriller'},
    {key: '5', name: 'Westerns'},
    {key: '6', name: 'Dystopian'},
    {key: '7', name: 'Fantasy'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#1A5276'} />
      <View
        style={{
          backgroundColor: '#AED6F1',
          height: 80,
        }}>
        <View style={{paddingTop: 20, flexDirection: 'row'}}>
          <Text style={styles.title}>Book-o-topia</Text>
          <FontAwesome name="search" style={styles.icon} />
          <FontAwesome
            name="shopping-cart"
            style={styles.icon}
            onPress={() => navigation.navigate('Cart')}
          />
        </View>
      </View>
      <View>
        <Text style={styles.subText}>Explore {'\n\t'} Genres :- </Text>
        <FlatList
          data={genres}
          keyExtractor={item => item.key}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('SciFi', {name: item.name})}>
                <ListCard name={item.name} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  subText: {
    color: '#1A5276',
    fontSize: 26,
    fontWeight: '600',
    marginLeft: 15,
    marginTop: 20,
  },
  title: {
    color: '#1A5276',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: Dimensions.get('window').width / 3.5,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  icon: {
    color: '#1A5276',
    fontSize: 30,
    marginLeft: 30,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
