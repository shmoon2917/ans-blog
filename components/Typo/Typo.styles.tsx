import styled, { css } from 'styled-components';

export const Heading1Style = css`
  font-size: 40px;
  font-weight: 400;
  line-height: 54px;
`;

export const Heading1 = styled.h1`
  ${Heading1Style};
`;

export const Heading2Style = css`
  font-size: 32px;
  font-weight: 400;
  line-height: 44px;
`;

export const Heading2 = styled.h2`
  ${Heading2Style}
`;

export const Heading3Style = css`
  font-size: 28px;
  font-weight: 400;
  line-height: 38px;
`;

export const Heading3 = styled.h3`
  ${Heading3Style}
`;

export const Heading4Style = css`
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
`;

export const Heading4 = styled.h4`
  ${Heading4Style}
`;

export const Heading5Style = css`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
`;

export const Heading5 = styled.h5`
  ${Heading5Style}
`;

export const Heading6Style = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;

export const Heading6 = styled.h6`
  ${Heading6Style}
`;

export const Lead = styled.p`
  font-weight: 400;
  font-size: 14;
  line-height: 24px;
`;

export const Small = styled.p`
  font-weight: normal;
  font-size: 12;
  line-height: 14px;
`;

export const Tiny = styled.p`
  font-weight: bold;
  font-size: 10;
  line-height: 12px;
`;

export const Body1 = styled.p`
  font-weight: normal;
  font-size: 16;
  line-height: 24px;
`;

export const Body2 = styled.p`
  font-weight: normal;
  font-size: 14;
  line-height: 24px;
`;

export const BlockQuotes = styled.blockquote`
  font-weight: semi-bold;
  font-size: 20;
  line-height: 28px;
`;

export const Label = styled.span<{ type: 'small' | 'medium' | 'large' }>`
  font-weight: normal;

  ${({ type }) => {
    switch (type) {
      case 'small':
        return css`
          font-size: 10px;
          line-height: 14px;
          letter-spacing: 0.2px;
        `;
      case 'medium':
        return css`
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.2px;
        `;
      case 'large':
        return css`
          font-size: 14px;
          line-height: 24px;
        `;
      default:
        return;
    }
  }}
`;
