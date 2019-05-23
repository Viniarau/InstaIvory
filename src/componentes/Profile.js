import { withNavigation } from 'react-navigation';

import React, {Component} from 'react';
import {Text, TouchableOpacity, View, FlatList, Button} from 'react-native';

class Profile extends Component {

  logout(){
    this.props.navigation.navigate('Login')
  }
  
    render() {
      return (
        <View style={{flex:1}}>
          <View style={{position:'absolute',bottom:0,alignSelf:'center'}}>
            <Button
              onPress={this.logout.bind(this)}
              title="Logout"
              color="#FF6347"
            />
          </View>
        </View>
          
      );
    }
  }
  export default withNavigation(Profile)