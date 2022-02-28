import { STYLES } from 'services/constants';
import styled from 'styled-components';

export const ContentsWrapper = styled.main`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 12px 40px;
  margin-top: 80px;

  ${STYLES.media.mobile} {
    > * ~ * {
      margin-left: 64px;
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;
