import { TextInput, View, StyleSheet } from "react-native";

const TextInputC = ({ placeholder, onChangeText, value, max, keyboardType }) => {
    return (
        <View style={styles.textInput}>
            <TextInput placeholder={placeholder} onChangeText={onChangeText} value={value} maxLength={max} keyboardType={keyboardType} style={styles.placeholder} />
        </View>
    );
}
const styles = StyleSheet.create({
    textInput: {
        color: '#000',
        borderWidth: 2,
        borderColor: '#9FA5B8',
        // borderRadius: '20px',
        justifyContent: 'center',
        padding: 10,
        height: 50,
    },
});

export default TextInputC;