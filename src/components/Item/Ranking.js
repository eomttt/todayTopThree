import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

import { openInterstitialAd } from '../Admob/Admob';

export default class Ranking extends Component {

  openRankLink = (item) => {
    Linking.canOpenURL('https://search.naver.com/search.naver?query=' + item).then((supported) => {
      if (supported) {
        Linking.openURL('https://search.naver.com/search.naver?query=' + item);
      } else {
        alert('뉴스를 열 수 없습니다.');
      }
    })
  }

  render() {
    const { item, rank, screenProps } = this.props;
    return (
      <TouchableOpacity onPress={() => {
        this.openRankLink(item);
      }}>
        <View style={styles.container}>
          <Text style={styles.tag}>
            {rank}
          </Text>
          <Text style={[styles.itemTitle, {color: screenProps.mainTextColor}]}>
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  tag: {
    marginBottom: 5,
    color: '#FF6F61',
    fontWeight: 'bold'
  },
  link: {
    position: 'absolute',
    right: 15,
    top: 10
  },
  linkText: {
    fontWeight: 'bold'
  },
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 20,
    borderWidth: 1.5,
    marginLeft: '5%',
    width: '90%',
    borderColor: '#FF6F61'
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  }
});
