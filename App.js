import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
}
function NewScreen(){
    return(
        <View style={styles.container}>
            <Text>New Screen</Text>
        </View>
    )
}

function SettingsScreen(){
    return(
        <View style={styles.container}>
            <Text>Settings Screen</Text>
        </View>
    )
}


const Tab = createBottomTabNavigator();


export default function App(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName

                        if(route.name === 'Home')  {
                            iconName = focused
                             ? 'ios-information-circle'
                              : 'ios-information-circle-outline'
                        } else if (route.name === 'New'){
                            iconName = focused? 'ios-list-box' : 'ios-list'
                        } else if (route.name === 'Settings') {
                            iconName = focused? 'ios-options' : 'ios-options' 
                        }

                        return <Icon name={iconName} size={size} color={color} />
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name='Home' component={HomeScreen} />
                <Tab.Screen name='New' component={NewScreen} />
                <Tab.Screen name='Settings' component={SettingsScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})