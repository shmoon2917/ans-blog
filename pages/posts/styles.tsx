import { Typos } from 'components/Typo';
import { STYLES } from 'services/constants';
import styled from 'styled-components';

export const Title = styled(Typos.Heading1)`
  text-align: center;
  font-size: 40px;
  line-height: 54px;

  ${STYLES.media.mobile} {
    font-size: 28px;
    line-height: 38px;
  }
`;

export const Wrapper = styled.div`
  ${Typos.Body1};

  h1 {
    ${Typos.Heading1Style}
  }

  h2 {
    ${Typos.Heading2Style}
  }

  h3 {
    ${Typos.Heading3Style}
  }

  h4 {
    ${Typos.Heading4Style}
  }
`;
