import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';
import { Home } from '../screens/';

import { COLORS } from '../constants';

const Tab = createBottomTabNavigator();
const SIZE = 50;
const tabOptions = {
  showLabel: false,
  style: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: 'transparent',
    elevation: 0,
  },
};

const CameraButton = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        backgroundColor: COLORS.primary,
        ...styles.shadow,
        top: -22.5,
      }}
    >
      <Image
        source={require('../assets/icons/camera.png')}
        resizeMode="contain"
        style={{
          width: 23,
          height: 23,
        }}
      />
    </View>
  );
};
const CustomTabBar = (props) => {
        return (
            <View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 30,
                        backgroundColor: COLORS.white
                    }}
                ></View>
                <BottomTabBar {...props} />
            </View>
        )

}

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;
        const customTintColor = focused ? COLORS.white : COLORS.gray
          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={require('../assets/icons/flash_icon.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
            case 'Box':
              return (
                <Image
                  source={require('../assets/icons/cube_icon.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
            case 'Camera':
              return (
                <Image
                  source={require('../assets/icons/camera.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: customTintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
              return <CameraButton />;
            case 'Search':
              return (
                <Image
                  source={require('../assets/icons/search_icon.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: customTintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
            case 'Favourite':
              return (
                <Image
                  source={require('../assets/icons/heart_icon.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: customTintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
          }
        },
      })}
      tabBar={(props) => (
        <CustomTabBar {...props} />
    )}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Box"
        component={Home}
        options={{
          tabBarButton: (props) => <TabBarCustomButton {...props}  more={true}/>,
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Home}
        options={{
          tabBarButton: (props) => <TabBarCustomButton {...props} color={COLORS.pewterBlue} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarButton: (props) => <TabBarCustomButton {...props} color={COLORS.deepTaupe} />,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Home}
        options={{
          tabBarButton: (props) => <TabBarCustomButton {...props}  color={COLORS.cerise}/>,
        }}
      />
    </Tab.Navigator>
  );
};

const TabBarCustomButton = ({ onPress, children, accessibilityState, color = COLORS.white, more =false }) => {
  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            top: 0,
          }}
        >

          {more && <View style={{ flex: 1, backgroundColor: COLORS.white }} />}
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>

          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.white}
            />
          </Svg>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>

        </View>
        <TouchableOpacity
          style={{
            top: -22.5,
            // right: 3,

            justifyContent: 'center',
            alignItems: 'center',
            width: SIZE,
            height: SIZE,
            borderRadius: SIZE / 2,
            backgroundColor: color,
            ...styles.shadow,
          }}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
          height: 50,
          backgroundColor: COLORS.white,
        }}
        activeOpacity={1}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Tabs;
