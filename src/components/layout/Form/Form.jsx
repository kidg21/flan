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
  grid-gap: 1.5rem;
  margin-bottom: 1rem;
`;

function Section({ children, title }) {
  return (
    <FormSection>
      {title ? <Title text={title} /> : null}
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

function Form({ action, children, columns, description, method, subtitle, title }) {
  // 1-3 colums with custom override
  let setColumns;
  const _columns = parseInt(columns);
  if (_columns > 0 && columns < 4) {
    setColumns = `repeat(${_columns}, minmax(0, 1fr))`;
  } else {
    setColumns = columns;
  }
  return (
    <FormWrapper action={action} method={method}>
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
  subtitle: PropTypes.string,
  title: PropTypes.string,
};
Form.defaultProps = {
  action: null,
  children: null,
  columns: "1",
  description: null,
  method: null,
  subtitle: null,
  title: null,
};

const Label = styled.label`
  grid-column: 1 / -1;
  font-weight: 700;
  user-select: none;
  cursor: pointer;
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
    <Label isRequired={isRequired} className={className} {...props}>
      {label || children}
    </Label>
  );
}
InputLabel.propTypes = {
  inputLabel: PropTypes.string,
  isRequired: PropTypes.bool,
};
InputLabel.defaultProps = {
  inputLabel: null,
  isRequired: false,
};

const Help = styled(Label)`
  color: ${colors.grey_80};
  font-weight: initial;
  cursor: initial;
`;
function HelpText({ helpText, children }) {
  return <Help>{helpText || children}</Help>;
}
HelpText.propTypes = {
  helpText: PropTypes.string,
};
HelpText.defaultProps = {
  helpText: null,
};

const Error = styled(Label)`
  color: ${colors.alert};
  cursor: initial;
`;
function ErrorText({ errorText, children }) {
  return <Error>{errorText || children}</Error>;
}
ErrorText.propTypes = {
  errorText: PropTypes.string.isRequired,
};

export { Form as default, Section, InputLabel, HelpText, ErrorText };
