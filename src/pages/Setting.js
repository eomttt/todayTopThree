import React, { Component } from 'react';
import { bindActionCreators } from'redux';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import OpenAppSettings from 'react-native-app-settings'

import ItemListContainer from '../containers/Item/ItemList';
import Admob from '../components/Admob/Admob';

import * as ItemActions from '../reducers/modules/item';

export default class SettingPage extends Component {

  openSettingApp = () => {
    Alert.alert(
      '알림',
      '앱 설정에 가서 알람을 직접 꺼주세요.',
      [
        {text: 'OK', onPress: () => OpenAppSettings.open()},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ]
    )
  }

  openContact = () => {
    let url = 'https://open.kakao.com/o/srgVyw9';
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        alert('잠시 후 다시 시도해주세요.');
      }
    })
  }

  render() {
    const { screenProps } = this.props;
    return (
      <ScrollView style={{backgroundColor: screenProps.viewColor}}>
        <Admob/>
        <View style={styles.container}>
          <View style={styles.itemContainer}>
            <Text style={[styles.itemLeftContent, {color: screenProps.menuTextColor}]}>
                버전 정보
            </Text>
            <Text style={[styles.itemRightContent, {color: screenProps.menuTextColor}]}>
                v0.0.1
            </Text>
          </View>
          <TouchableOpacity onPress={() => {
                this.openSettingApp();
              }}>
            <Text style={[styles.itemContainer, {color: screenProps.menuTextColor}]}>
                푸시알림
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
                this.openContact();
              }}>
            <Text style={[styles.itemContainer, {color: screenProps.menuTextColor}]}>
                문의하기
            </Text>
          </TouchableOpacity>
          <View style={styles.bottomAdmob}>
            <Admob/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20
  },
  itemContainer: {
    width: '100%',
    height: 50,
    fontSize: 20,
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  itemLeftContent: {
    width: '50%',
    fontSize: 20,
  },
  itemRightContent: {
    width: '50%',
    fontSize: 20,
    textAlign: 'right'
  },
  bottomAdmob: {
    marginTop: 100
  }
});
