import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, TextInput, Text } from 'react-native-paper';
import { View, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import { UserContext } from '../context/userContext';
import { useContext } from 'react';

const POST_AUTHENTICATE = "Account/Authenticate";
const ServiceUrl = new URL("http://192.168.2.72:48429");
const LoginPage = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { user,setUserInfo } = useContext(UserContext);


    const Login = () => {
        setUserInfo({NameLastname:"Umut Eskitoğu",UserName:"A1"})
        navigation.navigate("Ana Sayfa")
        // var loginModel = {
        //     UserName: userName,
        //     Password: password
        // }

        // axios.post(ServiceUrl.href + POST_AUTHENTICATE, loginModel)
        //     .then((response) => {
        //         if (response.data.UserName !== undefined) {
        //             setUserInfo(response.data)
        //             navigation.navigate("Ana Sayfa")
        //         }
        //         else
        //             alert("Kullanıcı Bilgileriniz Yanlış")
        //     }
        //     )
        //     .catch((error) => console.error('Error:', error));

    }

    let version = "v1.2";
    return (
        <View style={{ flex: 1 }}><View style={styles.container}>
            <Image
                source={{
                    uri: 'https://tumpaelektrik.com/tr/wp-content/uploads/sites/2/2018/01/TUMPA_LOGO_YAZI.png',
                    cache: "only-if-cached"
                }}
                style={{ width: "100%", height: 100, resizeMode: "contain" }}
            />
            <TextInput style={styles.txtLogin} label="Kullanıcı Adı" mode="outlined"
                value={userName}
                onChangeText={text => setUserName(text)}
            ></TextInput>
            <TextInput label="Şifre" mode="outlined" secureTextEntry
                value={password}
                onChangeText={text => setPassword(text)}
            ></TextInput>
            <Button mode="contained"
                style={{ backgroundColor: "darkgreen", marginTop: 20, borderRadius: 5 }}
                onPress={Login}
            >Giriş Yap</Button>

        </View>
            <View style={{ position: "absolute", bottom: 0 }}>
                <Text>12m Consulting Versiyon : {version} </Text>
            </View>
        </View>
    );
};



var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        position: "absolute",
        padding: 20,
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
    },
    txtLogin: {
        marginVertical: 20
    }

})

export default LoginPage;