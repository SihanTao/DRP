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
  Dimensions,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { tabs } from '../constants';
import { sharedTabs, shared_tabs } from '../constants/sharedTabs';
import { updateIdObject } from './utils';

export default class DropDownSearchBar extends React.Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = {
      refreshAvailable: true,
      isLoading: true,
      search: '',
      dataSource: [],
      arrayholder: tabs.categories,
    };
  }
  async componentDidMount() {
    this.setState({
      isLoading: true,
    })
    console.log("[i] DropDownSearchBar.componentDidMount")
    await sharedTabs(shared_tabs)
    this.setState(
      {
        isLoading: false,
        dataSource: shared_tabs.categories,
        arrayholder: shared_tabs.categories,
      },
    );
  }

  search = text => {
    console.log("[i] DropDownSearchBar.search")
    // console.log(text);
  };
  clear = () => {
    console.log("[i] DropDownSearchBar.clear")
    this.search.clear();
  };


  async SearchFilterFunction(text) {
    console.log("[i] DropDownSearchBar.SearchFilterFunction")
    const textData =
      text
        .split(' ')
        .filter((str) => (str != ''))
        .join('_')
        .toLowerCase();
    // passing the inserted text in textinput
    const newData = this.state.arrayholder.filter(function (item) {
      // applying filter for the inserted text in search bar
      const itemData = item.title ? item.title : '';
      // const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    if (newData.length == 0 && this.state.refreshAvailable) {
      this.setState({
        search: text,
        refreshAvailable: false,
      })
      await this.componentDidMount()
      this.SearchFilterFunction(text)
    } else {
      this.setState({
        // setting the filtered newData on datasource
        // After setting the data it will automatically re-render the view
        // refreshing is only available when user find something
        refreshAvailable: newData.length != 0,
        dataSource: newData,
        search: text,
      });
    }

  }

  ListViewItemSeparator = () => {
    // Item sparator view
    const fullWidth = Dimensions.get('window').width
    const marginHorizontal = fullWidth * 0.02
    return (
      <View
        style={{
          height: 1,
          width: fullWidth - 2 * marginHorizontal,
          backgroundColor: '#D0D0D0',
          marginHorizontal,
        }}
      />
    );
  };

  renderItem = (item) => {
    const { navigation } = this.props;
    const idObject={ main_tag: item.id };
    // Single Comes here which will be repeatative for the FlatListItems
    return (
      <Text style={styles.textStyle}
        onPress={
          () => {
            navigation.navigate('SearchResult', idObject)
          }
        }
      >{item.title}</Text>
    );
  }

  render() {
    console.log("[i] DropDownSearchBar.render")
    const { navigation } = this.props;
    if (this.state.isLoading) {
      // Loading View while data is loading
      return (
        <View style={styles.viewStyle}>
          <View style={{ flex: 1, paddingTop: 20 }}>
            <ActivityIndicator />
          </View>
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
          autoCapitalize='none'
          autoCorrect={false}
        />
        <FlatList
          data={this.state.dataSource.length == 0 ? [{id: 'noResult', title: ' No results found'}]: this.state.dataSource }
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
