// import React, {Component} from 'react';
// import { Text, Button, View} from 'react-native';
// import Styles from '../estilos/MainStyle'

// export default class Login extends Component {
//   render() {
//     return (
//       <View>
//         <Text style={Styles.label} >
//             Login Page!
//         </Text> 
//         <Button
//           style={Styles.botao}
//           title="Ir para Home"
//           onPress={() => this.props.navigation.navigate('App')}
//         />      
//       </View>
//     );
//   }
// }

import React, {Component} from 'react';
import {
    View, 
    Dimensions,
    TextInput,
    StyleSheet,
    Text,
    Button,
    Image,
    ImageBackground,
    AsyncStorage
} from 'react-native';
import { Linking } from 'react-native';

const width_screen = Dimensions.get('screen').width;


export default class Login extends Component {

    constructor(){
        super();
        this.state={
          user: '',
          password: '',
          messageError: ''
        }
    }

    startLogin() {
        const uri = "https://instalura-api.herokuapp.com/api/public/login";

        requestInfo = {
            method: 'POST',
            body: JSON.stringify( {
                login: this.state.user,
                senha: this.state.password
            }),
            headers: new Headers ({
                'Content-type': 'application/json'
            })
        }

        fetch(uri, requestInfo)
            .then(response => {
                if(response.ok)
                    return response.text();

                throw new Error("Seu burro! Não foi possível efetuar login.")
            })
            .then(token => {
                AsyncStorage.setItem('token', token);
                AsyncStorage.setItem('user', this.state.user);

                this.props.navigation.navigate('InstaMobile');
            })
            .catch(e => this.setState({messageError: e.message}))
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.background}>
                    <ImageBackground  source={require('../../resources/img/background1.jpg')} style={{width: '100%', height: '100%'}}>
                    </ImageBackground>
                </View>
                <View style={styles.containerLogo}>
                    <Image style={styles.logo} 
                        source={require('../../resources/img/logo1.png')} />
                </View>
                <View style={styles.formLogin}>
                    <TextInput style={styles.titleInput}
                        placeholder="Login"
                        onChangeText={text => this.setState({user: text})}
                        autoCapitalize="none"/>

                    <TextInput style={styles.titleInput} 
                        placeholder="Password"
                        onChangeText={text => this.setState({password: text})}
                        secureTextEntry={true}/>
                    <View style={styles.containerBotton}>
                        <Button title="Acessar" color="#435e7a"
                        // onPress={() => this.props.navigation.navigate('InstaMobile')} 
                        onPress={this.startLogin.bind(this)} 
                        />
                    </View>
                </View>
                <View>
                    <Text onPress={() => Linking.openURL('https://www.abramilho.org.br/')}>Esqueceu sua senha? Clique aqui</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}> Developed by nobody in 2018 </Text>
                </View>
                <Text style={styles.message}>
                    {this.state.messageError}
                </Text>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formLogin: {
        width: width_screen * 0.6 
    },
    titleInput: {
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderBottomColor: '#B5B5B5'
    },
    containerLogo: {
        right: 10,
        height: 130
    },
    background: {
        width: width_screen,
        height: '100%',
        flex: 1,
        position: 'absolute',
        opacity: 0.2
    },
    containerBotton :{
        marginTop: 10
    },
    footer :{
        position: 'absolute',
        bottom: 0,
        width: width_screen,
        height: 25,
        alignItems: 'center'
    },
    footerText :{
        color: '#9C9C9C',
        fontSize: 15
    },
    message :{
        marginTop: 15,
        color: '#e74c3c'
    }
})