import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Text, Button } from 'react-native-paper';
import MyButton from '../components/MyButton';
import { Link, useRouter } from 'expo-router';

const Login = () => {

    const router = useRouter();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState(''); 
    const [isShowPassword, setIsShowPassword] = React.useState(false);

  return (
    <SafeAreaView style={loginStyle.container}>
        <View style={{...loginStyle.section, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../assets/logo.png')} style={loginStyle.logo} />
            <Text variant='displayMedium' style={{ marginVertical: 5}}>BossJob</Text>
        </View>
        <View style={{...loginStyle.section}}>
           <TextInput
                value={email}
                onChangeText={text => setEmail(text)}
                label={'Email'}
                placeholder='Email'
                style={loginStyle.textInput}
           />
           <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                label={'Password'}
                placeholder='Password'
                style={loginStyle.textInput}
                secureTextEntry={!isShowPassword}
                right={<TextInput.Icon onPress={() => setIsShowPassword(!isShowPassword)} icon={isShowPassword ? "eye": "eye-off"} />}
           />
        </View>         
        <View style={{...loginStyle.section}}>
            <View style={{ margin: 5 }}>
                <MyButton text='Login' action={() => router.replace('dashboard')} mode='contained' size='small' />
            </View>
            <View style={{ margin: 5 }}>
                <MyButton text='Register' action={() => router.push('register')} mode='contained' size='small' />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 40, justifyContent: 'center', alignItems:'center', width: '100%'}}>
                <Button onPress={() => router.push('recover')} mode='text' style={{ width: '100%'}}>
                    Forgot Password?
                </Button>
            </View>            
        </View>
    </SafeAreaView>
  )
}

export default Login


const loginStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    section: {
        flex:1,
        width: '100%',
        padding: 20, 
    },
    logo:{
        width: 200,
        height: 200,
    },
    textInput:{
        margin: 10,
    }
})