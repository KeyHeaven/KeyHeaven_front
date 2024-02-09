import React, {useEffect, useState } from "react";
import { View, Text } from "react-native";
import gameStyles from "../../../Styles/GameStyles";
import { getDeveloperById } from "../../Controllers/DeveloperController";
import { getEditorById } from "../../Controllers/EditorController";

interface GameDescriptionSectionProps {
  item: { developer: string; editor: string; genre: string ; date: string };
}

const GameDescriptionSection : React.FC<GameDescriptionSectionProps>= ({ item }) => {
    const [developer, setDeveloper] = useState({});
    const [editor, setEditor] = useState({});

    useEffect(() => {
        getDeveloper();
        getEditor();
    }, []);
    const getDeveloper = async () => {
        const dev = await getDeveloperById(item.developer);
        console.log(dev);
        setDeveloper(dev);
    }
    const getEditor = async () => {
        const edit = await getEditorById(item.editor);
        setEditor(edit);
    }
    return (
        <View style={gameStyles.descriptionContainer}>
            <Text style={gameStyles.textTitle}> À Propos du jeu</Text>
            <Text style={gameStyles.text}>Développeur : {developer?.name}</Text>
            <Text style={gameStyles.text}>Éditeur : {editor?.name}</Text>
            <Text style={gameStyles.text}>Date de Sortie : {item.exitDate}</Text>
            <Text style={gameStyles.text}>
                Genre : {item.genre}
            </Text>
        </View>
    );
}

export default GameDescriptionSection;
