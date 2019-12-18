/* eslint-disable linebreak-style */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import Title, { SubTitle, Description } from "base/Typography";
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

const FormHeader = styled(Grid)`
  margin-bottom: 1.5rem;
`;

const FormSection = styled.section`
  display: grid;
  grid-gap: 1.25rem;
  margin-bottom: 1rem;
`;

const SectionTitle = styled(Title)`
  margin-bottom: 0rem;
`;

function Section({ children, title }) {
  return (
    <FormSection>
      {title ? <SectionTitle weight="bold" text={title} /> : null}
      {children}
    </FormSection>
  );
}
Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
Section.defaultProps = {
  children: null,
  title: null,
};

const FormInputs = styled(Grid)`
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
  subtitle,
  title,
  onSubmit,
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
        <FormHeader gap="tiny">
          {title ? <Title text={title} /> : null}
          {subtitle ? <SubTitle text={subtitle} /> : null}
          {description ? <Description text={description} /> : null}
        </FormHeader>
      ) : null}
      <FormInputs setColumns={setColumns} gap="large">
        {children}
      </FormInputs>
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
  subtitle: PropTypes.string,
  title: PropTypes.string,
  onSubmit: PropTypes.func,
};
Form.defaultProps = {
  action: null,
  children: null,
  columns: "1",
  description: null,
  method: null,
  novalidate: false,
  subtitle: null,
  title: null,
  onSubmit: null,
};

export { Form as default, Section };
