import styled from "styled-components";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  /* padding: 1rem; */
`;

const Grid_2 = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
`;

const Grid_3 = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
`;

export { Grid as default, Grid_2, Grid_3 };
