import React, {Component} from 'react';
import {
    Image,
    TouchableOpacity,
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Likes extends Component {

    updateIcon(likeada){
        return likeada ? require('../../resources/img/s2-checked.png') : 
        require('../../resources/img/s2.png') 
      }
    
      viewLikes(likers){
        if(likers.length <= 0)
          return;
    
        return(
          <Text style={styles.likes}>
              {likers.length} {likers.length > 1 ? 
                'curtidas' : 'curtida'}
          </Text>
        );
      }

    render(){
        const { photo, likeCallback } = this.props;
        return(
            <View>
                <TouchableOpacity onPress={() => {likeCallback(photo.id)}}>
                    <Image style={styles.bottomLike} 
                        source={this.updateIcon(photo.likeada)} />
                </TouchableOpacity>
                        
                {this.viewLikes(photo.likers)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bottomLike: {
      width:35,
      height:35,
      marginBottom:10
    },
    likes: {
      fontWeight: 'bold'
    }
  });