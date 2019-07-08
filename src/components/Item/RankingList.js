import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';

import Ranking from './Ranking';
import Admob from '../Admob/Admob';

export default class RankingList extends Component {

  render() {
    const { ranking, screenProps } = this.props;
    let rankingList = !!ranking ? ranking.slice(0, 20) : [];

    return (
      <ScrollView style={[styles.container, {backgroundColor: screenProps.viewColor}]}>
        <View style={styles.content}>
          {
            rankingList.map((item, index) => {
              const admobView = <View style={styles.advertise}>
                                  <Admob/>
                                </View>
              let rankingView = <Ranking item={item}
                              rank={index + 1}
                              key={index}
                              screenProps={screenProps}/>

              if (index % 3 === 0) {
                return (<View key={index}>
                          {admobView}
                          {rankingView}
                        </View>
                       );
              } else {
                return (<View key={index}>
                          {rankingView}
                        </View>
                       );
              }
            })
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  content: {
    marginBottom: 60
  },
  advertise: {
    marginBottom: 30
  },
  text: {
    width: '100%',
    height: 50
  }
});
