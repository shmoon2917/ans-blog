import styled from 'styled-components';

const Wrapper = styled.article`
  ${({ theme }) => theme.responsive.xl} {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export default Wrapper;
