import { StyleSheet, Pressable, Text } from "react-native";

const ButtonC = ({ placeholder, solid }) => {
    return (
        <Pressable style={solid?styles.pressableSolid:styles.pressableOutline}>
            <Text style={solid?styles.textSolid:styles.textOutline}>{placeholder}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    pressableSolid: {
        backgroundColor: '#003E9A',
        justifyContent: 'center',
        borderRadius: '10%',
        padding: 10,
        height: 50,
    },
    pressableOutline: {
        borderWidth: '2px',
        borderColor: '#003E9A',
        borderRadius: '10%',
        justifyContent: 'center',
        padding: 10,
        height: 50,
    },
    textSolid: {
        color:'#fff',
        textAlign: 'center',
        fontSize: 18
    },
    textOutline: {
        color: '#003E9A',
        textAlign: 'center',
        fontSize: 18
    },
});

export default ButtonC;