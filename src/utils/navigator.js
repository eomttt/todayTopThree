import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import SideMenu from 'react-native-side-menu';
import { createStackNavigator, createAppContainer, addNavigationHelpers, createDrawerNavigator } from 'react-navigation';

import DrawerMenu from '../components/Side/Menu';
import Header from '../components/Top/Header';
import MainPage from '../pages/Main';
import RankingPage from '../pages/Ranking';
import SettingPage from '../pages/Setting';

export default class Navigator extends Component {
  state = {
    isSidebarOpen: false,
    screenProps: {
      viewColor: 'white',
      mainTextColor: '#2b2b35',
      menuTextColor: '#ff6f61',
    }
  };

  AppContainer = null;
  viewMode = true;


  componentWillMount() {
    this.init();
  }

  toggleMode = () => {
    let screenData = {};
    this.viewMode = !this.viewMode;

    if (this.viewMode) {
      screenData.viewColor = 'white';
      screenData.mainTextColor = '#2b2b35';
      screenData.menuTextColor = '#ff6f61';
    } else {
      screenData.viewColor = '#2b2b35';
      screenData.mainTextColor = 'white';
      screenData.menuTextColor = '#ff6f61';
    }

    this.setState({screenProps: screenData});
  }


  setView = () => {
    const drawerNavigator = createDrawerNavigator({
        MainTopScreen: {
          screen: MainPage
        },
        RankingScreen: {
          screen: RankingPage
        },
        SettingScreen: {
          screen: SettingPage,
        }
      },{
        contentComponent: ({navigation}) => (
          <DrawerMenu navigation={navigation}
                      screenProps={this.state.screenProps}/>
        ),
        initialRouteName: 'MainTopScreen',
        initialRouteParams: {showCount: 3},
      }
    );

    const drawerStack = createStackNavigator({
        drawerNavigator: {
          screen: drawerNavigator,
        }
      },{
        headerMode: 'none',
        navigationOptions: ({navigation}) => ({
          header: <Header title='TodayTop'
                          navigation={navigation}
                          screenProps={this.state.screenProps}
                          toggleMode={this.toggleMode}></Header>
        })
      }
    );

    const stackNavigator = createStackNavigator({
        drawerStack: {
          screen: drawerStack,
        }
      },{
        initialRouteName: 'drawerStack',
      }
    );

    this.AppContainer = createAppContainer(stackNavigator)
  }

  init = () => {
    this.setView();
  }

  render () {
    const App = this.AppContainer;

    return (
      <App screenProps={this.state.screenProps}/>
    )
  }
}

const styles = StyleSheet.create({

})

