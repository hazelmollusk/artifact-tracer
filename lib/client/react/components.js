import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';

class MainScreen extends Component {
    render() {
        return (
            <View>
                <Text>This is the app.</Text>
            </View>
        );
    }
}

module.exports = {
    MainScreen
}