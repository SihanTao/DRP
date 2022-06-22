/*This is an Example of SearchBar in React Native*/
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
  Alert,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { tabs } from '../constants';
import { sharedTabs, shared_tabs } from '../constants/sharedTabs';
import { updateIdObject } from './utils';

export default class DropDownSearchBar extends React.Component {
  constructor(props) {
    super(props);
    //setting default state
    this.oldSharedTabsHolder = { categories: [] }
    this.newSharedTabsHolder = { categories: [] }
    this.state = { isLoading: false, search: '', tabs: [] };
    // this.arrayholder = tabs.categories;
    this.arrayholder = shared_tabs.categories;
  }
  componentDidMount() {
    this.setState(
      {
        isLoading: false,
        dataSource: shared_tabs.categories,
      },
      function () {
        this.arrayholder = shared_tabs.categories;
      }
    );
  }

  search = text => {
    // console.log(text);
  };
  clear = () => {
    this.search.clear();
  };

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function (item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  }

  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };

  renderItem = (item) => {
    const { navigation } = this.props;
    // console.log(item.title);
    let idObject=updateIdObject(item.id);
    // Single Comes here which will be repeatative for the FlatListItems
    return (
      <Text style={styles.textStyle}
        onPress={
          () => navigation.navigate('SearchResult', idObject)
        }
      >{item.title}</Text>
    );
  }

  /** Has some but where update of search results is a little delayed */
  async getTabs() {
    await sharedTabs(shared_tabs)
    if (shared_tabs.ddsb_last) {
      if (shared_tabs.ddsb_last != shared_tabs.categories.length) {
        shared_tabs["ddsb_last"] = shared_tabs.categories.length
        // Alert.alert("Rerender")
        this.forceUpdate()
      } else {
        // Alert.alert("?")
      }
    } else {
      shared_tabs["ddsb_last"] = shared_tabs.categories.length
      // Alert.alert("Rerender")
      this.forceUpdate()
    }
  }

  render() {
    const { navigation } = this.props;
    // sharedTabs(shared_tabs)
    this.getTabs()
    if (this.state.isLoading) {
      // Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      // <Block center>
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <SearchBar
          round
          lightTheme
          inputStyle={{ margin: 1 }}
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="What are you Looking for?"
          value={this.state.search}
          autoFocus
        />
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          //Item Separator View
          renderItem={({ item }) => this.renderItem(item)}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    marginTop: 0,
  },
  textStyle: {
    padding: 10,
  },
});
