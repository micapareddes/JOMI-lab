import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from '../pages/home';


const { Screen, Navigator } = createStackNavigator();
export function Routes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={HomePage} />
        </Navigator>
    );
}