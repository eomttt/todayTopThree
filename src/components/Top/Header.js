import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { DrawerActions } from 'react-navigation';

const MENU_URI = {
  MENU: 'https://s3.ap-northeast-2.amazonaws.com/topthree-icon/menu.png',
  MOON: 'https://s3.ap-northeast-2.amazonaws.com/topthree-icon/moon.png',
  SUN: 'https://s3.ap-northeast-2.amazonaws.com/topthree-icon/sun.png'
}

export default class Header extends Component {

  isBrightView = true;

  openSideBar = () => {
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  }

  toggleMode = () => {
    this.isBrightView = !this.isBrightView;
    this.props.toggleMode();
  }

  setRightItem() {
    if (this.isBrightView) {
      return (
        <TouchableOpacity style={styles.rightImage}
                          onPress={this.toggleMode}>
          <Image style={styles.Image}
                 source={{uri: MENU_URI.SUN}}/>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity style={styles.rightImage}
                          onPress={this.toggleMode}>
          <Image style={styles.Image}
                 source={{uri: MENU_URI.MOON}}/>
        </TouchableOpacity>
      )
    }
  }

  render() {
    const { title, screenProps } = this.props;

    return (
      <View style={[styles.container, {backgroundColor: screenProps.viewColor}]}>
        <TouchableOpacity style={styles.leftImage}
                          onPress={this.openSideBar}>
          <Image style={styles.Image}
                 source={{uri: MENU_URI.MENU}}/>
        </TouchableOpacity>
        <Text style={styles.text}>
          {title}
        </Text>
          {this.setRightItem()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#FF6F61',
    borderBottomWidth: 3
  },
  text: {
    top: 10,
    color: '#FF6F61',
    fontSize: 20,
    fontWeight: 'bold'
  },
  leftImage: {
    position: 'absolute',
    width: 35,
    height: 35,
    top: 20,
    left: 10
  },
  rightImage: {
    position: 'absolute',
    width: 35,
    height: 35,
    top: 20,
    right: 10
  },
  Image: {
    position: 'absolute',
    width: 35,
    height: 35
  },

});
