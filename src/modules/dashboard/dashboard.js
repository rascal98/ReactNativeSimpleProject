import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, TextInput, Text } from 'react-native-paper';
import { View, StyleSheet, Modal, Pressable, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { UserContext } from '../context/userContext';
import { useContext, useState } from 'react';

const DashboardPage = ({ navigation }) => {
    const { user } = useContext(UserContext);
    

    const insets = useSafeAreaInsets();

    const OpenPage = (pageName) => {
        navigation.navigate(pageName)
    }
    

    return (
        <View style={{ paddingTop: insets.top, position: "relative", flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.column}><Pressable mode="contained-tonal" style={{ backgroundColor: "#337ab7", ...styles.btnMenu }}
                    onPress={()=>OpenPage("satisFatura")}><Text>Satış Faturası</Text></Pressable></View>
                <View style={styles.column}><Button mode="contained-tonal" style={{ backgroundColor: "#5cb85c", ...styles.btnMenu }}>Sipariş Topla</Button></View>
            </View>
            <View style={styles.container}>
                <View style={styles.column}><Button mode="contained-tonal" style={{ backgroundColor: "#5bc0de", ...styles.btnMenu }}>Sipariş Topla</Button></View>
                <View style={styles.column}><Button mode="contained-tonal" style={{ backgroundColor: "#f0ad4e", ...styles.btnMenu }}>Sipariş Topla</Button></View>
            </View>
            <View style={styles.container}>
                <View style={styles.column}><Button mode="contained-tonal" style={{ backgroundColor: "#3f8a89", ...styles.btnMenu }}>Sipariş Topla</Button></View>
                <View style={styles.column}><Button mode="contained-tonal" style={{ backgroundColor: "#fb9590", ...styles.btnMenu }}>Sipariş Topla</Button></View>
            </View>

            
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    column: {
        flex: 1
    },
    btnMenu: {
        height: 100,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',

    }

})

export default DashboardPage;