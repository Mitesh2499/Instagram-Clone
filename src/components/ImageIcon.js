import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ImageIcon = ({size,uri,style}) => {
    let width=32

    switch(size)
    {
        case "small":
            width=32
            break
        case "medium":
            width=40
            break
        case "large":
            width=70
            break
        default:
            break

    }
    return (
        <View>
        <Image style={[styles.profileIcon,style, {width:width}]} source={{uri: uri}}  />
        </View>
                 
    )
}

export default ImageIcon

const styles = StyleSheet.create({
    
    profileIcon:{
        borderRadius:50,
        aspectRatio: 1,
        
    },
})
