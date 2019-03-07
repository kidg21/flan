import styled from "styled-components";

export const Grid = styled.div`
  /* display: flex;
  flex: none;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  text-align: left;
  margin: 0;
  padding: 0.5rem;
  transition: all 0.25s ease-in-out; */
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: 80px 120px;
  grid-auto-flow: dense;
  margin: 0;
  padding: 0.5rem 1rem;
  list-style: none;
  max-height: 500vh;
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
`;
