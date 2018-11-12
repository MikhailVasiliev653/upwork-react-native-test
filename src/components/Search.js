import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import { some } from 'lodash';
import styles from './Global.style';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
    this.filterList = this.filterList.bind(this);
  }

  filterList(query) {
    const { list, start, complete } = this.props;
    start(query);
    if (query) {
      const conformsToQuery = (...strings) => some(strings.map(s =>
        s.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())), x => x > -1);
      const result = list.filter(i =>
        conformsToQuery(i.firstname, i.lastname, i.dateOfBirth, i.phoneNumber));
      this.setState({ list: result });
      complete(query, list);
    } else {
      this.setState({ list: [] });
      complete(query, []);
    }
  }

  render() {
    const { list } = this.state;
    const { edit } = this.props;
    return (
      <View style={styles.searchWrap}>
        <Autocomplete
          placeholder='Search'
          underlineColorAndroid="transparent"
          style={styles.search}
          data={list}
          onChangeText={this.filterList}
          renderItem={item => (
            <TouchableOpacity onPress={() => edit(item)}>
              <Text>{item.Name} {item.Lastname} {item.Birth} {item.Phone}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
