import React, { Component } from 'react';
import { bindActionCreators } from'redux';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import ItemListContainer from '../containers/Item/ItemList';

import * as ItemActions from '../reducers/modules/item';

export default class MainPage extends Component {
  render() {
    let showCount = this.props.navigation.state.params.showCount,
        screenProps = this.props.screenProps;

    return (
      <View>
        <ItemListContainer showCount={showCount}
                           screenProps={screenProps}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});