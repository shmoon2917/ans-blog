import { STYLES } from 'services/constants';
import styled from 'styled-components';

export const SpecialArticleWrapper = styled.article`
  width: 250px;
  height: 150px;
  border-radius: 15px;
  position: relative;

  transition: transform, box-shadow cubic-bezier(0.4, 0, 0.2, 1) 200ms;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${STYLES.shadows.lightEl6};
  }
`;

export const SpecialArticleImageWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 15px;
  overflow: hidden;
`;

export const SpecialArticleTitleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: 'flex-end';
  height: 84px;
  padding: 12px;

  border-radius: 0 0 15px 15px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
`;
