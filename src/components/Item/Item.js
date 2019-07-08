import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

import { openInterstitialAd } from '../Admob/Admob';

export default class Item extends Component {
  showAdvertise(link) {
    if (Math.random() < 0.4) {
      openInterstitialAd().then(() => {
        Linking.openURL(link);
      });
    } else {
      Linking.openURL(link);
    }
  }

  pressLink = (link) => {
    Linking.canOpenURL(link).then((supported) => {
      if (supported) {
        this.showAdvertise(link);
      } else {
        alert('뉴스를 열 수 없습니다.');
      }
    })
  }

  render() {
    const { item, tag, screenProps } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.tag}>
          {tag}
        </Text>
        <TouchableOpacity style={styles.link}
                          onPress={() => {
                            this.pressLink(item.link);
                          }}>
          <Text style={[styles.linkText, {color: screenProps.mainTextColor}]}>
            {'자세히보기'}
          </Text>
        </TouchableOpacity>
        <Text style={[styles.itemTitle, {color: screenProps.mainTextColor}]}>
          {item.title}
        </Text>
        <Text style={[styles.itemContent, {color: screenProps.mainTextColor}]}>
          {item.content}
        </Text>
      </View>
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
