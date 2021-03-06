import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function UnFavoriteIcon(props) {
  return (
    <Svg
      width={19}
      height={17}
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M17.076 2.343a4.584 4.584 0 00-6.483 0l-.884.884-.883-.884a4.584 4.584 0 00-6.483 6.484l.883.883 6.483 6.483 6.484-6.483.883-.883a4.584 4.584 0 000-6.484v0z"
        stroke="#A6A6A6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
