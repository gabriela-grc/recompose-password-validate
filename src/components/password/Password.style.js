import styled from 'styled-components';

export const Item = styled.li`
  ${props => props.truth && 'color: green;'};
`;