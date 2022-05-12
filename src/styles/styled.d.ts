import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      dark: string;
      grey: string;
      lightGrey: string;
      white: string;
    };
  }
}
