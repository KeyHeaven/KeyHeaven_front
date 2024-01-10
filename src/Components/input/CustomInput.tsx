import React, { FC, useState } from "react";
import { View, TextInput, TouchableOpacity, KeyboardTypeOptions } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import InputStyles from "./InputStyles";

interface CustomInputProps {
    icon?: IconDefinition;
    placeholder?: string;
    isPassword?: boolean;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    keyboardType?: KeyboardTypeOptions; // Nouvelle prop pour le type de clavier
}

const CustomInput: FC<CustomInputProps> = ({
                                                       icon,
                                                       placeholder,
                                                       isPassword = false,
                                                       defaultValue = "",
                                                       onValueChange,
                                                       keyboardType // Utilisation de la nouvelle prop
                                                   }) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [value, setValue] = useState(defaultValue);

    const handleValueChange = (text: string) => {
        setValue(text);
        if (onValueChange) {
            onValueChange(text);
        }
    };

    return (
        <View style={InputStyles.inputSection}>
            {icon && (
                <FontAwesomeIcon
                    style={{ height: 25, width: 25, marginLeft: 20, color: "#838383" }}
                    icon={icon}
                />
            )}
            <TextInput
                style={InputStyles.inputAuth}
                placeholder={placeholder}
                underlineColorAndroid="transparent"
                secureTextEntry={isPassword && secureTextEntry}
                onChangeText={handleValueChange}
                value={value}
                keyboardType={keyboardType} // Définit le type de clavier
            />
            {isPassword && (
                <TouchableOpacity
                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                    style={{ marginRight: 20 }}
                >
                    <FontAwesomeIcon
                        icon={secureTextEntry ? faEye : faEyeSlash}
                        style={{ height: 25, width: 25, color: "#838383" }}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default CustomInput;
