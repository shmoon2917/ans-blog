import { STYLES } from 'services/constants';
import styled from 'styled-components';

export const Wrapper = styled.footer`
  min-height: 50px;
  margin-top: ${({ theme }) => theme.margin._8};
  display: flex;
  justify-content: center;
  align-items: center;
`;
