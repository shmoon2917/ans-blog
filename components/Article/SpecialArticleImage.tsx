import React from 'react';
import Image, { ImageProps } from 'next/image';

import * as Styles from './SpecialArticle.styles';

interface SpecialArticleImageProps extends ImageProps {
  alt: string;
}

const SpecialArticleImage: React.FC<SpecialArticleImageProps> = ({ alt, ...rest }) => {
  return (
    <Styles.SpecialArticleImageWrapper>
      <figure style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image {...rest} alt={alt} layout="fill" objectFit="cover" />
      </figure>
    </Styles.SpecialArticleImageWrapper>
  );
};

export default SpecialArticleImage;
