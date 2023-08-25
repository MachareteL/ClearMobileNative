import { Pressable, StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import TextInputC from "../../components/TextInputC";
import ButtonC from "../../components/ButtonC";
import Logo from "../../components/logo";
import { Image } from "react-native";
import backgroud from '../../images/background2.png'

const Register = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const logar = () => {
        console.log("cadastrou");
    }

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Logo />
                <Text style={styles.subtitle}>Cadastrar</Text>
            </View>
            <Image source={backgroud} style={styles.background} />
            <View style={styles.container2}>
                <View style={styles.containerInput}>
                <Text style={styles.textInput}>Username</Text>
                    <TextInputC placeholder={"Username"} />
                <Text style={styles.textInput}>E-mail</Text>
                    <TextInputC placeholder={"E-mail"} />
                <Text style={styles.textInput}>Password</Text>
                    <TextInputC placeholder={"Password"} />
                <Text style={styles.textInput}>Confirm Password</Text>
                    <TextInputC placeholder={"Confirm Password"} />
                </View>
                <View style={styles.containerButton}>
                    <ButtonC placeholder={"Cadastrar"} solid={true} />
                    <ButtonC placeholder={"Cadastrar com G"} solid={false} />
                </View>
            </View>
            <View style={styles.container3}>
                <Text style={styles.text}>Já tem uma conta?</Text>
                <Pressable>
                    <Text style={styles.textLink}>Entre agora</Text>
                </Pressable>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    container1: {
        display: "flex",
        alignItems: "center",
    },
    container2: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: '100%',
        height: '60%',
        marginTop: -30,
    },
    containerInput: {
        width: "100%",
        paddingHorizontal: 24,
        display: 'flex',
        justifyContent: 'space-evenly',
        gap: 10,
    },
    containerButton: {
        width: "100%",
        paddingHorizontal: 80,
        display: 'flex',
        justifyContent: 'space-evenly',
        gap: 10,
    },
    container3: {
        display: 'flex',
        flexDirection: "row",
        gap: 7,
    },
    text: {
        color: '#fff',
    },
    textLink: {
        color: '#fff',
        textDecorationLine: "underline"
    },
    textInput: {
        marginBottom:-10,
    },
    subtitle: {
        color: '#003E9A',
        fontSize: 30,
    },
    background: {
        position: 'absolute',
        bottom: 0
    },
});
export default Register;