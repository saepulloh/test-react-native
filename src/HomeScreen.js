import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image } from 'react-native';


export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};

        return {
            title: "Home",
            headerLeft: (
                <Button
                    onPress={() => navigation.navigate('MyModal')}
                    title="Info"
                    color="#fff"
                />
            ),
            /* the rest of this config is unchanged */
        };
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })}
                />
            </View>
        );
    }
}