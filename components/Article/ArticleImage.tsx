import Image, { ImageProps } from 'next/image';
import React, { useEffect, useState } from 'react';
import { useIsMounted } from 'services/hooks';
import styled, { css } from 'styled-components';

const ArticleImage = (props: ImageProps) => {
  const isMounted = useIsMounted();

  return (
    isMounted && (
      <ImageWrapper style={{ maxWidth: props.width, maxHeight: props.height }}>
        <Image {...props} alt={props.alt} layout="responsive" loading="lazy" quality={100} />
      </ImageWrapper>
    )
  );
};

export default ArticleImage;

const ImageWrapper = styled.div`
  display: block;
  margin: 0 auto;

  * {
    border-radius: 5px;
    transition: 0.2s;
  }
`;
