import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import styled, { css, FlattenSimpleInterpolation, StyledComponent } from 'styled-components';

interface HorizontalScrollShadowerProps {
  wrapperStyle?: FlattenSimpleInterpolation;
  scrollAreaStyle?: FlattenSimpleInterpolation;
  children?: ReactNode;
}

const withHorizontalScrollShadower = (Wrapper: StyledComponent<'div', any, { css?: FlattenSimpleInterpolation }>) => {
  const Component = ({ children, wrapperStyle, scrollAreaStyle }: HorizontalScrollShadowerProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const [scrolledLeft, setScrolledLeft] = useState(false);
    const [scrolledRight, setScrolledRight] = useState(false);

    const handleScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
      const scrollLeft = event.currentTarget.scrollLeft;
      const scrollWidth = event.currentTarget.scrollWidth;
      const wrapperWidth = wrapperRef.current?.clientWidth;

      if (!wrapperWidth || scrollWidth <= wrapperWidth) {
        return;
      }

      if (scrollLeft === 0) {
        setScrolledLeft(false);
      }

      if (scrollLeft + wrapperWidth === scrollWidth) {
        setScrolledRight(false);
      } else if (scrollLeft > 0) {
        setScrolledLeft(true);
        setScrolledRight(true);
      }
    }, []);

    useEffect(() => {
      if (scrollRef.current?.scrollWidth) {
        const wrapperWidth = wrapperRef.current?.clientWidth;

        if (!wrapperWidth) return;
        if (scrollRef.current.scrollWidth > wrapperWidth) {
          setScrolledRight(true);
        }
      }
    }, [scrollRef]);

    return (
      <Wrapper ref={wrapperRef} css={wrapperStyle}>
        <ScrollArea ref={scrollRef} onScroll={handleScroll} css={scrollAreaStyle}>
          {children}
        </ScrollArea>
        <ScrollShadow type="left" hidden={!scrolledLeft} />
        <ScrollShadow type="right" hidden={!scrolledRight} />
      </Wrapper>
    );
  };

  return Component;
};

export default withHorizontalScrollShadower;

const ScrollArea = styled.div<{ css?: FlattenSimpleInterpolation }>`
  display: flex;
  overflow: scroll;
  position: relative;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  ${({ css }) => css}
`;

const ScrollShadow = styled.div<{ type: 'left' | 'right'; hidden: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;

  width: 50px;

  pointer-events: none;
  transition: opacity cubic-bezier(0.4, 0, 0.2, 1) 200ms;

  ${({ type }) =>
    type === 'right'
      ? css`
          right: 0px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
        `
      : css`
          left: 0px;
          background: linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
        `}

  ${({ hidden }) =>
    hidden &&
    css`
      opacity: 0;
    `}
`;
