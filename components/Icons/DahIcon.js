import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

export default function DahIcon(props) {
  return (
    <Svg
      width={9}
      height={1}
      viewBox="0 0 9 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={9} height={1} rx={0.5} fill="#C4C4C4" />
    </Svg>
  );
}
