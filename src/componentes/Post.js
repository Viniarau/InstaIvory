import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View, 
    Image, 
    Dimensions,
    TouchableOpacity
} from 'react-native';
import InputComment from './InputComment';
import Likes from './Likes';

import { withNavigation } from 'react-navigation';

const width_screen = Dimensions.get('screen').width;

class Post extends Component {

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

  startProfile(){
    //**********teste**************
    this.props.navigation.navigate('Logout')
  }

  render() {
      const {photo, likeCallback, commentCallback } = this.props;

    return (
    <View>
        <TouchableOpacity onPress={this.startProfile.bind(this)}>
          <View style={styles.headerImage} >
          <Image source={{uri: photo.urlPerfil}}
                  style={styles.imageProfile}/>
              <Text>{photo.loginUsuario}</Text>
          </View>
        </TouchableOpacity>
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

export default withNavigation(Post)

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