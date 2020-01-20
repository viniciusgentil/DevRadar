import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Profile({ navigation }) {

    const githubUserName = navigation.getParam('github_user');

    return (

        <WebView source={ { uri: `https://github.com/${githubUserName}` } } style={ {flex: 1} } />
        
    );

}