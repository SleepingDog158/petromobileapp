import * as React from 'react'
import {Text, View, Image, FlatList} from 'react-native'
import {Header} from 'react-native-elements'
import Logo from "../assets/Logo.png"
export const HomeScreen = () => {
    return (
        <View>
            <Header style={{height:200}}
            statusBarProps={{ barStyle: 'light-content', backgroundColor :'#2c6fb2'}}
            containerStyle={{
                backgroundColor: '#2c6fb2'
            }}
            centerComponent={<Image source={Logo} style={{height: 42}} resizeMode="contain"/>}/>
            <FlatList>

            </FlatList>
        </View>
    )
}
