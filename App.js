import React, { useEffect } from "react";  

import { StyleSheet, Text, View } from "react-native"; 

import firestore from "react-native-firebase/firestore"; 

import auth from "react-native-firebase/auth";  

const initial = () => {  

  const USERS = firestore().collection("USERS");

  const admin = {
    name: "admin",
    phone: "09111111",  
    address: "Binh Duong",
    email: "huutv@tamu.edu.vn",  
    password: "123456",
    role: "admin"
  }

  
  USERS.doc(admin.email).onSnapshot((doc) => {  
    if (!u.exists) 
    {
      auth().createUserWithEmailAndPassword(admin.email, admin.password)
      then(() =>
      USERS.doc(admin.email).set(admin).then(() => console.log("Add new user successfully"))
      )
    }
  })
}

const App = () => {  
  useEffect(() => {  
    initial();
  }, []);

  return (
    <View>
      <Text>Your App Content Goes Here</Text>
    </View>
  );
};

export default App;
