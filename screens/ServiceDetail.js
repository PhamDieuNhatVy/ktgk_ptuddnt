import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Axios from 'axios';

const ServiceDetail = ({ route, navigation }) => {
  const [service, setService] = useState(null);

  useEffect(() => {
    // Gọi API để lấy thông tin chi tiết của dịch vụ
    const fetchServiceDetail = async () => {
      try {
        const response = await Axios.get(
          `URL_API_GET_SERVICE/${route.params.serviceId}`
        );
        setService(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchServiceDetail();
  }, [route.params.serviceId]);

  if (!service) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>Service Detail Screen</Text>
      <Text>Service Name: {service.serviceName}</Text>
      {/* Hiển thị các thông tin chi tiết khác về dịch vụ */}
      <Button title="Edit Service" onPress={() => navigation.navigate('EditService', { service })} />
      <Button title="Delete Service" onPress={() => navigation.navigate('DeleteService', { service })} />
    </View>
  );
};

export default ServiceDetail;
