import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import MusicApp from './src/screens/MusicApp';
import TicketMaster from './src/screens/TicketMaster';


export default function App() {
  return (
    <View style={styles.container}>
      <View>
        {/* <Image source={require("./assets/mona.png")} />
        <Text> Hello World </Text> */}
        {/* <MusicApp></MusicApp> */}
        <TicketMaster></TicketMaster>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // change me to another color: like pink, blue, purple, red
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
