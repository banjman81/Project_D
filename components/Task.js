import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text || "no props"}</Text>
            </View>
            <View style={styles.circular}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#606263',
        margin: 5,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: .3,
        shadowRadius: 4.65,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
        
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#58acd6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 5
    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#399ccc',
        borderWidth: 2,
        borderRadius: "50%"
    }
})

export default Task;