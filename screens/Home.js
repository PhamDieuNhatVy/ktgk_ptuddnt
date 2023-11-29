import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Add Service"
        onPress={() => navigation.navigate('AddService')}
      />
      <Button
        title="View Service Detail"
        onPress={() => navigation.navigate('ServiceDetail')}
      />
      
    </View>
  );
};

export default Home;
