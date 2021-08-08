import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Component } from 'react/cjs/react.production.min';

export default class PostScreen extends Component{
    renderItem = ({item:post}) => {
        return <PostCard post={post} navigation={this.props.navigation}/>
    }
}