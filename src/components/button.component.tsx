import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';

interface Props extends TouchableOpacityProps {
  label: string;
  isLoading?: boolean;
  buttonViewStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

export function ButtonComponent(props: Props) {
  const buttonViewStyle = Array.isArray(props.buttonViewStyle)
    ? [styles.buttonView, ...props.buttonViewStyle]
    : [styles.buttonView, props.buttonViewStyle];

  return (
    <TouchableOpacity
      disabled={props.isLoading}
      style={[styles.container, props.containerStyle]}
      {...props}>
      <View style={buttonViewStyle}>
        <Text style={styles.label}>
          {props.isLoading ? <ActivityIndicator color={'#fff'} /> : props.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 100,
    width: '80%',
    marginVertical: 20
  },
  label: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonView: {
    backgroundColor: 'yellow',
    width: '100%',
    height: 70,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
