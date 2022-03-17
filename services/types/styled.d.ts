import 'styled-components';
import { Width, Margin, Padding, Responsive } from 'styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    width: Width;
    margin: Margin;
    padding: Padding;
    responsive: Responsive;
  }
}
