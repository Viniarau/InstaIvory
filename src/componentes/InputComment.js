import React, {Component} from 'react';
import {
    StyleSheet, 
    View, 
    Image, 
    Dimensions,
    TouchableOpacity,
    TextInput
} from 'react-native';

export default class InputComment extends Component {

    constructor(){
        super();
        this.state={
          valueComment: ''
        }
    }

    render(){
        const { commentCallback } = this.props;
        return (
            <View style={styles.container}>
            <TextInput style={styles.input}
              placeholder="Adicione um comentário"
              ref={input => this.inputComment = input }
              onChangeText={text => this.setState({valueComment: text})}
              underlineColorAndroid="transparent"
              />
           
            <TouchableOpacity onPress={() => {
                commentCallback(this.props.idPhoto, 
                    this.state.valueComment, 
                    this.inputComment);
                    this.setState({valueComment: ''})
                    }}>
              <Image style={styles.icone} 
                      source={require('../../resources/img/send.png')} />
            </TouchableOpacity>
           </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 2
      },
    input: {
      height: 40,
      flex: 1
    },
    icone: {
      width: 30,
      height: 25
    }
  });