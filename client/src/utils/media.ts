import {
  css,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components';

interface IScreenSize {
  large: number;
  medium: number;
  small: number;
  [label: string]: number;
}

const screenSize: IScreenSize = {
  large: 1366,
  medium: 900,
  small: 560,
};

type MediaQueryFunction = (
  first: TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
) => FlattenSimpleInterpolation;

interface IMediaQuery {
  large: MediaQueryFunction;
  medium: MediaQueryFunction;
  small: MediaQueryFunction;
  [label: string]: MediaQueryFunction;
}

export const media = Object.keys(screenSize).reduce(
  (acc: { [label: string]: MediaQueryFunction }, label) => {
    acc[label] = (
      first: TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ) => css`
      @media (max-width: ${screenSize[label] / 16}em) {
        ${css(first, ...interpolations)}
      }
    `;
    return acc;
  },
  {},
) as IMediaQuery;
