import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ImageIcon from './ImageIcon'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
// plus => plus-circle-outline
// bookmark MaterialCommunityIcons bookmark-outline
// MaterialCommunityIcons dots-vertical
// comment Feather.message-circle
// send Feather.send or FontAwesome send send-o
// close MaterialCommunityIcons.close
// heart => MaterialCommunityIcons.heart heart-outline
const Card = () => {
    const size=34;
    const color="black";
    return (
        <View style={styles.card}>
            {/* header
            image container
            action buttons
            comments */}
            <View style={styles.header}>
                <View style={styles.header_left}>
                    <ImageIcon size="medium" style={styles.border} uri="https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332_960_720.jpg" />
                    <Text style={styles.text}>Mitesh</Text>
                </View>
                <View style={styles.header_right}>
                <MaterialCommunityIcons name="dots-vertical" size={24} color={color} />
                </View>
            </View>
            <View>
                <Image style={styles.post} source={{uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"}}  />
            </View>
            <View style={styles.action_buttons_conatiner}>
                <View style={styles.action_buttons_left}>
                    <View style={styles.action_button}>
                     <MaterialCommunityIcons name="heart-outline" size={size} color={color} />
                    </View>
                    <View style={styles.action_button}>
                     <Feather name="message-circle" size={size} color={color} />
                    </View>
                    <View style={styles.action_button}>
                     <Feather name="send" size={size} color={color} />
                    </View>

                </View>
                <View style={styles.action_buttons_right}>
                <View style={styles.action_button}>
                     <MaterialCommunityIcons name="bookmark-outline" size={size} color={color} />
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.likes}>6789 likes</Text>
                <Text style={styles.comments}>View All 848 comments</Text>
            </View>
         
           
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card:{
        paddingVertical:5,
        backgroundColor:"white",
    },
    header:{
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        borderColor:"grey",
        borderBottomWidth:0.2,
        alignItems:'center',

    },
    header_left:{
        flexDirection:'row',
        alignItems:'center',
    },
    text:{
        paddingHorizontal:10,
        fontWeight:"700",
    },
    post:{
        width:"100%",
        aspectRatio:1,
    },
    action_buttons_conatiner:{
        padding:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    action_buttons_left:{
        flexDirection:'row',
        alignItems:'center',
    },
    action_button:{
        padding:3,
    },
    likes:{
        paddingVertical:1,
        fontSize:14,
        fontWeight:'bold',
    },
    comments:{
        fontSize:12,
        paddingVertical:1,
        fontWeight:'600',
        color:"grey",
    },
    footer:{
        paddingVertical:3,
        paddingHorizontal:20,
        paddingBottom:10,
    }
    
})
