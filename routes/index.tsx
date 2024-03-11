import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Routes } from "./app.router";

interface RouterProps {

}
export function Router(props: RouterProps) {
    return (
        <View style={style.container}>
            <NavigationContainer >
                <Routes />
            </NavigationContainer>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})