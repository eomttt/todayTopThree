import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import Item from './Item';
import Admob from '../Admob/Admob';


export default class ItemList extends Component {
  getItemArray = () => {
    const { news, sports, ent } = this.props.itemData;
    let itemArray = []
    if (!!news) {
      for (let i=0, len=this.props.itemCount; i<len; i++) {
        itemArray.push({data: news.slice(i, i+1)[0], tag: 'Top News ' + (i+1)});
        itemArray.push({data: sports.slice(i, i+1)[0], tag: 'Top Sport ' + (i+1)});
        itemArray.push({data: ent.slice(i, i+1)[0], tag: 'Top Ent ' + (i+1)});
      }
    }

    return itemArray;
  }

  bannerError = (error) => {
    console.log("Banner error", error);
  }

  render() {
    const itemList = this.getItemArray();
    const { screenProps } = this.props;
    return (
      <ScrollView style={[styles.container, {backgroundColor: screenProps.viewColor}]}>
        <View style={styles.content}>
          {
            itemList.map((item, index) => {
              const admobView = <View style={styles.advertise}>
                                  <Admob/>
                                </View>

              let itemView =  <Item item={item.data}
                                    tag={item.tag}
                                    screenProps={screenProps}
                                    key={index + 1}/>
              if (index % 2 === 0) {
                return (<View key={index}>
                          {admobView}
                          {itemView}
                        </View>
                       );
              } else {
                return (<View key={index}>
                          {itemView}
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
  }
});
