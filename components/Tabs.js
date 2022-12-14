import React from 'react';
import { StyleSheet, Dimensions, FlatList, Animated } from 'react-native';
import { Block, theme } from 'galio-framework';
import { updateIdObject } from './utils'
import TagDemo from "../screens/Tag";

const { width } = Dimensions.get('screen');
import argonTheme from '../constants/Theme';
import { NotImplementedAlert } from '../constants/PredefinedAlerts';

/**
 * @param isInfo
 *   If not defined, clicking the tab will move to the search page.
 *   If it is assigned as true, nothing happens if you click the tab.
 */
export default class Tabs extends React.Component {
  state = {
    active: null,
  }

  //select first by default
  // componentDidMount() {
  //   const { initialIndex } = this.props;
  //   initialIndex && this.selectMenu(initialIndex);
  // }

  animatedValue = new Animated.Value(1);

  animate() {
    this.animatedValue.setValue(0);

    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false, // color not supported
    }).start()
  }

  menuRef = React.createRef();

  onScrollToIndexFailed = () => {
    this.menuRef.current.scrollToIndex({
      index: 0,
      viewPosition: 0.5
    });
  }

  selectMenu = (id) => {
    const { navigation } = this.props;
    this.setState({ active: id });

    this.menuRef.current.scrollToIndex({
      index: this.props.data.findIndex(item => item.id === id),
      viewPosition: 0.5
    });

    this.animate();
    this.props.onChange && this.props.onChange(id);

    // Here navigation
    const idObject = { main_tag: id }
    navigation.navigate('SearchResult', idObject);
  }

  renderItem = (item) => {
    const isActive = this.state.active === item.id;
    const { navigation } = this.props;

    const textColor = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [argonTheme.COLORS.WHITE, isActive ? argonTheme.COLORS.WHITE : argonTheme.COLORS.WHITE],
      extrapolate: 'clamp',
    });

    const containerStyles = [
      styles.titleContainer,
      !isActive && styles.containerShadow,
      isActive && styles.containerShadow
    ];

    return (
      <Block style={containerStyles}>
        <Animated.Text
          style={[
            styles.menuTitle,
            { color: textColor }
          ]}
          onPress={() => {
            if (this.props.isInfo) {
              // NotImplementedAlert()
            } else {
              this.selectMenu(item.id)
            }
          }}>
          {item.title}
        </Animated.Text>
      </Block>
    )
  }

  renderMenu = () => {
    const { data, ...props } = this.props;

    return (
      <FlatList
        {...props}
        data={data}
        horizontal={true}
        ref={this.menuRef}
        extraData={this.state}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={this.onScrollToIndexFailed}
        renderItem={({ item }) => this.renderItem(item)}
        contentContainerStyle={styles.menu}
      />
    )
  }

  render() {
    return (
      <Block style={styles.container}>
        {this.renderMenu()}
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: theme.COLORS.WHITE,
    zIndex: 2,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
  },
  menu: {
    paddingHorizontal: theme.SIZES.BASE * 2.5,
    paddingTop: 8,
    paddingBottom: 16,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: argonTheme.COLORS.ACTIVE,
    borderRadius: 4,
    marginRight: 9,
    // marginVertical:20,
  },
  containerShadow: {
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  menuTitle: {
    fontWeight: '600',
    fontSize: 14,
    // lineHeight: 28,
    paddingVertical: 10,
    paddingHorizontal: 16,
    color: argonTheme.COLORS.MUTED
  },
});
