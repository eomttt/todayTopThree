import React, { Component } from 'react';
import { bindActionCreators } from'redux';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import RankingListContainer from '../containers/Item/RankingList';


export default class RankingPage extends Component {
  render() {
    let screenProps = this.props.screenProps;

    return (
      <View>
        <RankingListContainer screenProps={screenProps}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});