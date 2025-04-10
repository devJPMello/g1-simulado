import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors['base-text']};
`;

export function Loading() {
  return (
    <LoadingContainer>
      Aguarde, estamos preparando o melhor café pra você!
    </LoadingContainer>
  );
}