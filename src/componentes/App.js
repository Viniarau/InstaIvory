import React, {Component} from 'react';
import { 
  AsyncStorage,
  StyleSheet, 
  FlatList,
  Platform
} from 'react-native';

import Post from './Post';

export default class InstaMobile extends Component {
  
  static navigationOptions = {
        header: null,
  };

  constructor(){
    super();
    this.state = {
      photos: []
    }
  }
  componentDidMount() {
    const uri = 'https://instalura-api.herokuapp.com/api/fotos';

    AsyncStorage.getItem('token')
      .then(token => {
        return {
          headers: new Headers({
            "X-AUTH-TOKEN": token
          })
        }
      })
      .then(requestInfo => fetch(uri, requestInfo))
      .then(resposta => resposta.json())
      .then(json => this.setState({photos: json}))
  }

  searchId(idPhoto) {
    return this.state.photos
      .find(photo => photo.id === idPhoto)
  }

  updatePhotos(photoUpdate) {
    const photos = this.state.photos
        .map(
          photo => photo.id === photoUpdate.id
          ? photoUpdate : photo)
    this.setState({photos})
  }

  like(idPhoto){
    const photo = this.state.photos.find(
      photo => photo.id === idPhoto )

    AsyncStorage.getItem('user')
      .then(usuarioLogado => {
        let newList = [];

        if(!photo.likeada){
          newList = [
            ...photo.likers, {login: usuarioLogado}
          ]
        } else {
          newList = photo.likers.filter(liker => {
            return liker.login !== usuarioLogado
          })
        }
        return newList;
      })
      .then(newList => {

        const photoUpdate = {
          ...photo,
          likeada: !photo.likeada,
          likers: newList
      }
      const photos = this.state.photos.map(
        photo =>
        photo.id === photoUpdate.id ?
        photoUpdate:photo)

      this.setState({photos})
      })

      const uri = 'https://instalura-api.herokuapp.com/api/fotos/${idPhoto}/like';
      AsyncStorage.getItem('token')
        .then(token => {
          return {
            method: 'POST',
            headers: new Headers({
              "X-AUTH-TOKEN": token
            })
          }
        })
        .then(requestInfo => fetch(uri, requestInfo))
  }

  addComment(idPhoto, valueComment, inputComment){
        if(valueComment === '')
          return;
        const photo = this.searchId(idPhoto);

        const uri = `https://instalura-api.herokuapp.com/api/fotos/${idPhoto}/comment`;
        AsyncStorage.getItem('token')
          .then(token => {

            return {
              method: "POST",
              body: JSON.stringify({
                texto: valueComment
              }),
              headers: new Headers({
                "Content-type": "application/json",
                "X-AUTH-TOKEN": token
              })
            };
        })
        .then(requestInfo => fetch(uri, requestInfo))
        .then(resposta => resposta.json())
        .then(comentario => [...photo.comentarios, comentario])
        .then(newList => {
          const photoUpdate = {
            ...photo,
            comentarios: newList
          }

          this.updatePhotos(photoUpdate);
            inputComment.clear();
        })
  };
  
  render() {
    return (   
      <FlatList style={styles.container}
        keyExtractor={item => String(item.id)}
        data={this.state.photos}
        renderItem={ ({item}) =>
          <Post photo={item}
              likeCallback={this.like.bind(this)}
              commentCallback={this.addComment.bind(this)}/>
        }     
      />
    );
  }
}

const margimTop = Platform.OS == 'ios' ? 20 : 0;
const styles = StyleSheet.create({
  container: {
    marginTop: margimTop
  }
});