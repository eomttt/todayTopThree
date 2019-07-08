import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import { AdMobBanner, AdMobInterstitial, PublisherBanner, AdMobRewarded } from 'react-native-admob'

let bannerId = 'ca-app-pub-3940256099942544/6300978111',
    intersitailId = 'ca-app-pub-3940256099942544/1033173712';

BANNER_ID = {
  IOS: 'ca-app-pub-7169539776443320/2613660409',
  ANDROID: 'ca-app-pub-9152190009267204/8135610045',
  TEST: 'ca-app-pub-3940256099942544/6300978111'
}

INTERSITAIL_ID = {
  IOS: 'ca-app-pub-7169539776443320/4516934869',
  ANDROID: 'ca-app-pub-9152190009267204/9257120020',
  TEST: 'ca-app-pub-3940256099942544/1033173712'
}

export default class Advertise extends Component {

  bannerError = () => {
    console.log('Fail to admob load');
  }

  render() {
    return (
      <View style={styles.advertise}>
        <AdMobBanner
          adSize="full"
          adUnitID={getBannerId()}
          onAdFailedToLoad={this.bannerError}/>
      </View>
    );
  }
}

export const openInterstitialAd = () => {
  return new Promise((resolve, reject) => {
    AdMobInterstitial.setAdUnitID(getInterstitialId()); // Test ID, Replace with your-admob-unit-id
    AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());

    AdMobInterstitial.addEventListener('adClosed', () => {
      AdMobInterstitial.removeEventListener('adClosed');
      resolve();
    });
  })
}

const getBannerId = () => {
  if (global.PUBLIC_MODE) {
    console.log("AAAAAAAA");
    if (Platform.OS === 'ios') {
      return BANNER_ID.IOS;
    } else {
      return BANNER_ID.ANDROID;
    }
  }

  return BANNER_ID.TEST;
}

const getInterstitialId = () => {
  if (global.PUBLIC_MODE) {
    if (Platform.OS === 'ios') {
      return INTERSITAIL_ID.IOS;
    } else {
      return INTERSITAIL_ID.ANDROID;
    }
  }

  return INTERSITAIL_ID.TEST;
}

const styles = StyleSheet.create({
  advertise: {
    alignItems:'center',
    marginTop: 10
  }
});
