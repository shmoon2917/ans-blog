import Image, { ImageProps } from 'next/image';
import React from 'react';
import styled, { css } from 'styled-components';

const MDXResponsiveImage = (props: ImageProps) => {
  return (
    <ImageWrapper style={{ maxWidth: props.width, maxHeight: props.height }}>
      <Image {...props} alt={props.alt} layout="responsive" loading="lazy" quality={100} />;
    </ImageWrapper>
  );
};

export default MDXResponsiveImage;

const ImageWrapper = styled.div`
  display: block;
  margin: 0 auto;

  * {
    border-radius: 10px;
    transition: 0.2s;
  }
`;
