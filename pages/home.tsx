import { Text, View } from "react-native";

interface HomePageProps {

}
export function HomePage(props: HomePageProps) {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>
                Home Page
            </Text>
        </View>
    )
}