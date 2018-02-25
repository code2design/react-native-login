import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<Props> {
  
  render() {
    return (
     <View style={styles.container}>
       <Text style={styles.text}>
         Welcome to the member area
       </Text>
     </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
    paddingLeft: 40,
    paddingRight: 40,
  },
  text:{
    color: '#fff',

  },

});
