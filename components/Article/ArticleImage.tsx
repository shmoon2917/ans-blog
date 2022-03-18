import Image, { ImageProps } from 'next/image';
import React, { useEffect, useState } from 'react';
import { STYLES } from 'services/constants';
import { useIsMounted } from 'services/hooks';
import styled, { css } from 'styled-components';

interface Props extends ImageProps {
  title?: string;
}

const ArticleImage = (props: Props) => {
  const { width, height, title, alt } = props;
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  if (!!title) {
    return (
      <ImageWrapper style={{ maxWidth: width, maxHeight: height }}>
        <Image {...props} alt={alt} loading="lazy" quality={100} />
        <figcaption>{title}</figcaption>
      </ImageWrapper>
    );
  } else {
    return (
      <ImageWrapper as="div">
        <Image {...props} alt={alt} layout="fill" loading="lazy" quality={100} />
      </ImageWrapper>
    );
  }
};

export default ArticleImage;

const ImageWrapper = styled.figure`
  position: relative;
  display: block;
  margin: 0 auto ${({ theme }) => theme.margin._16};
  text-align: center;

  * {
    border-radius: 5px;
    transition: 0.2s;
  }

  figcaption {
    margin-top: ${({ theme }) => theme.margin._2};
    line-height: 1.55rem;
    font-size: 0.85rem;
    letter-spacing: -0.025em;
    color: ${STYLES.color.greyscale500};
  }
`;
