/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View, 
    Image, 
    Dimensions
} from 'react-native';
import InputComment from './InputComment';
import Likes from './Likes';

const width_screen = Dimensions.get('screen').width;

export default class Post extends Component {

  viewLegend(photo){
    if(photo.comentario === '')
      return;
    return(
      <View style={styles.comments}>
              <Text style={styles.titleComments}>{photo.loginUsuario}</Text>
              <Text>{photo.comentario}</Text>
      </View>
    );
  }


  render() {
      const {photo, likeCallback, commentCallback } = this.props;

    return (
    <View>
        <View style={styles.headerImage}>
        <Image source={{uri: photo.urlPerfil}}
                style={styles.imageProfile}/>
            <Text>{photo.loginUsuario}</Text>
        </View>
        <Image source={{uri: photo.urlFoto}}
                style={styles.imagePost}/>

        <View style={styles.footer}>
            <Likes photo={photo} likeCallback={likeCallback}/>
            {this.viewLegend(photo)}

            {photo.comentarios.map(comentario => 
              <View style={styles.comments} key={comentario.id}>
                <Text style={styles.titleComments}>
                {comentario.login}</Text>
                <Text>{comentario.texto}</Text>
              </View>
            )}

           <InputComment idPhoto = {photo.id} 
           commentCallback={commentCallback}/>
        </View>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  headerImage: {
    margin: 10, 
    flexDirection:'row', 
    alignItems: 'center'
  },
  imageProfile: {
    marginRight: 10, 
    borderRadius: 20, 
    width: 40, 
    height: 40
  },
  imagePost: {
    width: width_screen, 
    height: width_screen
  },
  bottomLike: {
    width:35,
    height:35,
    marginBottom:10
  },
  footer: {
    margin: 10
  },
  likes: {
    fontWeight: 'bold'
  },
  comments: {
    flexDirection:'row'
  },
  titleComments: {
    fontWeight: 'bold',
    marginRight: 5
  }
});