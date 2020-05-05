import React from 'react';
import { Text } from 'react-native';

export function StyledTextLight(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'JosefinSans-Light' }]} />
  );
}

export function StyledTextRegular(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'JosefinSans-Regular' }]} />
  );
}


export function StyledTextMedium(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'JosefinSans-Medium' }]} />
  );
}

export function StyledTextSemiBold(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'JosefinSans-Bold' }]} />
  );
}

export function StyledTextBold(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'JosefinSans-Bold' }]} />
  );
}

export function StyledTextItalic(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'JosefinSans-Italic' }]} />
  );
}

