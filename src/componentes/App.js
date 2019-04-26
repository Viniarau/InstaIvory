import React, {Component} from 'react';
import { 
  StyleSheet, 
  FlatList,
  Platform
} from 'react-native';

import Post from './Post';

export default class InstaMobile extends Component {
  
  static navigationOptions = {
    title: 'InstaIvory',
    headerStyle: {
      title: {
        color: '#4682B4'
      },
    },
  };

  constructor(){
    super();
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
        .then(resposta => resposta.json())
        .then(json => this.setState({photos: json}));
  }

  like(idPhoto){
    const photo = this.state.photos.find(
      photo => photo.id === idPhoto )
    let newList = [];

    if(!photo.likeada){
      newList = [
        ...photo.likers, {login: 'meuUsuario'}
      ] 
    } else {
      newList = photo.likers.filter(liker => {
        return liker.login !== 'meuUsuario'
      })
    }
    const photoUpdate ={
        ...photo,
        likeada: !photo.likeada,
        likers: newList
    }

    const photos = this.state.photos.map(
      photo => 
      photo.id === photoUpdate.id ? 
      photoUpdate:photo)

    this.setState({photos})
  }

  addComment(idPhoto, valueComment, inputComment){
    if(valueComment === '')
      return;

    const photo = this.state.photos.find(
      photo => photo.id === idPhoto)

    const newList = [
      ...photo.comentarios,
      {
        id: valueComment,
        login: 'Usuário',
        texto: valueComment
      }
    ];
  
    const photoUpdate = {
      ...photo,
      comentarios: newList
    }
    
    const photos = this.state.photos
    .map(photo => photo.id === photoUpdate.id ? photoUpdate : photo)
    
    this.setState({photos});
    inputComment.clear();
    
  }
  
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
