import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
`;

const InnerContainer = styled.div`
  width: 100%;
  padding: 8rem 10px 4rem;
`;

export { Container, InnerContainer };
