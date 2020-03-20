/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import Text, { Title } from "base/Typography";
import Grid from "layout/Grid";

const FormWrapper = styled.form`
  color: ${(props) => {
    return props.theme.text.primary;
  }};
  background-color: ${(props) => {
    return props.theme.background.default;
  }};
  height: 100%;
  padding: 1rem 1rem 1.5rem;
`;

const Header = styled(Grid)`
  margin-bottom: 1.5rem;
`;

const Section = styled.section`
  display: grid;
  grid-gap: 1.25rem;
  margin-bottom: 1rem;
`;
function FormSection({ children, title }) {
  return (
    <Section>
      {title ? <Title weight="bold" text={title} /> : null}
      {children}
    </Section>
  );
}
FormSection.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
FormSection.defaultProps = {
  children: null,
  title: null,
};

const Inputs = styled(Grid)`
  grid-template-columns: ${(props) => {
    return props.setColumns || "repeat(1, minmax(0, 1fr))";
  }};
  /* Prototype Content - displays when a Form is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      content: "{ Form }";
    }
  }
`;

function Form({
  action,
  children,
  columns,
  description,
  method,
  novalidate,
  onSubmit,
  subtitle,
  title,
}) {
  // 1-3 colums with custom override
  let setColumns;
  const _columns = parseInt(columns, 10);
  if (_columns > 0 && columns < 4) {
    setColumns = `repeat(${_columns}, minmax(0, 1fr))`;
  } else {
    setColumns = columns;
  }
  return (
    <FormWrapper action={action} method={method} novalidate={novalidate} onSubmit={onSubmit}>
      {title || subtitle || description ? (
        <Header columns="1" gap="tiny">
          {title ? <Title size="2x" weight="bold" text={title} /> : null}
          {subtitle ? <Text size="4x" text={subtitle} /> : null}
          {description ? <Text size="2x" text={description} /> : null}
        </Header>
      ) : null}
      <Inputs setColumns={setColumns} gap="large">
        {children}
      </Inputs>
    </FormWrapper>
  );
}
Form.propTypes = {
  action: PropTypes.node,
  children: PropTypes.node,
  columns: PropTypes.oneOf(["1", "2", "3"]),
  description: PropTypes.string,
  method: PropTypes.string,
  novalidate: PropTypes.bool,
  onSubmit: PropTypes.func,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};
Form.defaultProps = {
  action: null,
  children: null,
  columns: "1",
  description: null,
  method: null,
  novalidate: false,
  onSubmit: null,
  subtitle: null,
  title: null,
};

export { Form as default, FormSection };
