import { StyleSheet, View, Modal, Pressable, Image } from "react-native";
import { Button, Text, TextInput, Appbar } from "react-native-paper";


import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UserContext } from "../context/userContext";
import { useContext, useState } from "react";



export const SatisFaturaPage = ({ navigation }) => {
    const { user } = useContext(UserContext);
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { navigation.goBack(null); }} />
                <Appbar.Content title="Satış Faturası" />
                <Button mode="outlined" icon="content-save">Kaydet</Button>

            </Appbar.Header>


            <View style={{ flex: 1, padding: 5 }}>
                <View style={styles.box} >
                    <Button mode="outlined" icon="file-search" onPress={() => {
                        setModalVisible(true);
                    }}><Text style={{ textDecorationLine: "underline" }}>Ünvana göre ara</Text></Button>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modal}>

                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    box: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        shadowColor: "#000000",
        shadowOpacity: 1,
        shadowRadius: 2,
        borderRadius: 20,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    modal: {
        padding: 10,
        flex: 1,
        backgroundColor: "red"
    },

})
