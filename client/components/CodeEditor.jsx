import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { IP } from 'react-native-dotenv';

const CodeEditor = () => {
  return <WebView source={{ uri: IP + ':4000' }} style={{ width: 500 }} />;
};

export default CodeEditor;

const styles = StyleSheet.create({
  editor: {
    backgroundColor: 'blue',
  },
});
