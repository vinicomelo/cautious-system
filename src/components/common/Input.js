import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={{ height: 20, width: 100 }}
            />
        </View>
    )

};

export { Input }