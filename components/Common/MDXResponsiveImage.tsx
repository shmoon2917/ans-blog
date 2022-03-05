import Image, { ImageProps } from 'next/image';
import React from 'react';
import styled, { css } from 'styled-components';

const MDXResponsiveImage = (props: ImageProps) => {
  return (
    <ImageWrapper>
      <Image {...props} alt={props.alt} layout="responsive" loading="lazy" quality={100} />;
    </ImageWrapper>
  );
};

export default MDXResponsiveImage;

const ImageWrapper = styled.div`
  * {
    border-radius: 10px;
    transition: 0.2s;
  }
`;
