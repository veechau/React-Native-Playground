/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict';

import React, { Component } from 'react';
import ReactNative from 'react-native';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SearchPage from './searchpage.js';


const styles = ReactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});

export class PropertyFinderApp extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage
        }}/>
    );
  }
}

ReactNative.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
