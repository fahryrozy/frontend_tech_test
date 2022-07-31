import * as React from 'react';
import { StackActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function replace(...args) {
  navigationRef.current?.dispatch(StackActions.replace(...args));
}

export function push(...args) {
  navigationRef.current?.dispatch(StackActions.push(...args));
}

export function pop(...args) {
  navigationRef.current?.dispatch(StackActions.pop(...args));
}

export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

export function reset(...args) {
  navigationRef.current?.dispatch(StackActions.popToTop());
  navigationRef.current?.dispatch(StackActions.replace(...args));
}
