import Image, { ImageProps } from 'next/image';
import React from 'react';
import { css } from 'styled-components';

const MDXResponsiveImage = (props: ImageProps) => {
  return <Image {...props} alt={props.alt} layout="responsive" loading="lazy" quality={100} />;
};

export default MDXResponsiveImage;

const ResponsiveImageStyle = css`
  border-radius: 10px;
`;
