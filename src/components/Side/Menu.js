import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { DrawerActions } from 'react-navigation';
import OpenAppSettings from 'react-native-app-settings'

import { openInterstitialAd } from '../Admob/Admob'

class DrawerMenu extends Component {
  openTodayTop = (number) => {

    if (number === 5) {
      openInterstitialAd();
    }

    this.props.navigation.navigate('MainTopScreen', {showCount: number});
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  }

  openRanking = () => {
    openInterstitialAd();
    this.props.navigation.navigate('RankingScreen');
  }

  openSetting = () => {
    openInterstitialAd();
    this.props.navigation.navigate('SettingScreen');
  }

  setAlarmSetting = () => {
    Alert.alert(
      '알림',
      '앱 설정에 가서 알람을 직접 꺼주세요.',
      [
        {text: 'OK', onPress: () => OpenAppSettings.open()},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ]
    )
  }

  render() {
    const { screenProps } = this.props;

    return (
      <ScrollView style={[styles.containerOpen, {backgroundColor: screenProps.viewColor}]}
                  scrollsToTop={false}>
        <View style={[styles.container, {backgroundColor: screenProps.viewColor}]}>
          <TouchableOpacity onPress={() => {
            this.openTodayTop(3);
          }}>
            <Text style={[styles.item, {color: screenProps.menuTextColor}]}>
              Top 3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.openTodayTop(5);
          }}>
            <Text style={[styles.item, {color: screenProps.menuTextColor}]}>
              Top 5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.openRanking();
          }}>
            <Text style={[styles.item, {color: screenProps.menuTextColor}]}>
              실시간 랭킹
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.setAlarmSetting}>
            <Text style={[styles.bottomItem, {color: screenProps.menuTextColor}]}>
              알림 설정
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  containerOpen: {
    //
  },
  container: {
    paddingTop: 50,
  },
  item: {
    paddingLeft:20,
    marginBottom: 20,
    fontSize: 30
  },
  bottomItem: {
    paddingLeft:20,
    marginTop: 50,
    fontSize: 30
  }
});

export default DrawerMenu
