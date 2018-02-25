import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, 
  TextInput, 
  KeyboardAvoidingView, 
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';

import { StackNavigator } from 'react-navigation';


export default class Login extends Component<Props> {

  constructor(props){
  	super(props);
  	this.state = {
  		username: '',
  		password: ''
  	}
  }

  componentDidMount(){
  	this._loadingInitialState().done();

  }

  _loadingInitialState = async () =>{

  	var value = await AsyncStorage.getItem('user');
  	if (value != null){
  		this.props.navigation.navigate('Profile');
  	}



  }

  login = () => {
  	alert("Test");
  }

  render() {
    return (
    	<KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
    		
    		<View style={styles.container}>
    			<Text style={styles.header}>- Login -</Text>
    			<TextInput style={styles.textInput}
    					   placeholder='Username'
    					   onChangeText={(user)=> this.setState({username})}
    					   underlineColorAndroid='transparent'
    			/>
    			<TextInput style={styles.textInput}
    					   placeholder='Password'
    					   onChangeText={(password)=> this.setState({password})}
    					   underlineColorAndroid='transparent'
    			/>

    			<TouchableOpacity style={styles.btn} onPress={this.login}>
				  <Text>Log in</Text>
    			</TouchableOpacity>

    		</View>

    	</KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({

	wrapper:{
		flex: 1,
	},
	container:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#2896d3',
		paddingLeft: 40,
		paddingRight: 40,
	},
	header:{
		fontSize: 24,
		marginBottom: 60,
		color: '#fff',
		fontWeight: 'bold',
	},
	textInput:{
		alignSelf: 'stretch',
		padding: 16,
		marginBottom: 20,
		backgroundColor: '#fff',
	},
	btn:{
		alignSelf: 'stretch',
		backgroundColor: '#01c853',
		padding: 20,
		alignItems: 'center',
	}

});



