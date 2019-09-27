import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "Variables";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import Title, { Headline, SubTitle, Description } from "base/Typography";
import Grid from "layout/Grid";

const FormWrapper = styled.form`
  height: 100%;
  padding: 1rem 1rem 1.5rem;
  background-color: ${colors.white};
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
      {title ? <SectionTitle text={title} /> : null}
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
  grid-template-columns: ${props => {
    return props.setColumns || "repeat(1, minmax(0, 1fr))";
  }};
  /* Prototype Content - displays when a Form is empty */
  &:empty {
    &:before {
      ${PlaceholderText}
      content: "{ Form } \00000A 'Displays a grid of user inputs in responsive columns'";
    }
  }
`;

function Form({ action, children, columns, description, method, novalidate, subtitle, title }) {
  // 1-3 colums with custom override
  let setColumns;
  const _columns = parseInt(columns);
  if (_columns > 0 && columns < 4) {
    setColumns = `repeat(${_columns}, minmax(0, 1fr))`;
  } else {
    setColumns = columns;
  }
  return (
    <FormWrapper action={action} method={method} novalidate={novalidate}>
      {title || subtitle || description ? (
        <FormHeader gap="tiny">
          {title ? <Headline text={title} /> : null}
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
  columns: PropTypes.oneOf(["1 (default)", "2", "3"]),
  description: PropTypes.string,
  method: PropTypes.string,
  novalidate: PropTypes.bool,
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
  subtitle: null,
  title: null,
};

const StyledLabel = styled.label`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: lowercase;
  color: ${colors.grey_60};
  background-color: ${colors.grey_light};
  border: 1px solid ${colors.grey_20};
  border-radius: 4px;
  padding: 0.25rem 1rem;
  white-space: nowrap;
  user-select: none;
`;
function Label({ children, label }) {
  return <StyledLabel>{children || label}</StyledLabel>;
}
Label.propTypes = {
  label: PropTypes.string.isRequired,
};

const TextLabel = styled.label`
  grid-column: 1 / -1;
  width: 100%;
  font-weight: 700;
  user-select: none;
  &:after {
    display: ${props => (props.isRequired ? "" : "none")};
    content: "*";
    color: ${colors.alert};
    font-size: 1.25rem;
    line-height: 0;
    vertical-align: middle;
    padding-left: 0.25em;
  }
`;
function InputLabel({ label, isRequired, className, children, ...props }) {
  return (
    <TextLabel isRequired={isRequired} className={className} {...props}>
      {label || children}
    </TextLabel>
  );
}
InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
};
InputLabel.defaultProps = {
  isRequired: false,
};

const Help = styled(TextLabel)`
  color: ${colors.grey_80};
  font-weight: initial;
`;
function HelpText({ helpText, children }) {
  return <Help>{helpText || children}</Help>;
}
HelpText.propTypes = {
  helpText: PropTypes.string.isRequired,
};

const Error = styled(TextLabel)`
  color: ${colors.alert};
  user-select: all;
  cursor: initial;
  &::selection {
    background-color: ${colors.alert};
  }
`;
function ErrorText({ error, children }) {
  return <Error>{error || children}</Error>;
}
ErrorText.propTypes = {
  error: PropTypes.string.isRequired,
};

export { Form as default, Section, Label, InputLabel, HelpText, ErrorText };
