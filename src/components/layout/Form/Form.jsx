import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { PlaceholderText } from "helpers/Placeholders.jsx";
import { DisabledContext } from "States";
import Title, { Headline, SubTitle, Description } from "base/Typography";
import Grid from "layout/Grid";

const FormWrapper = styled.form`
  height: 100%;
  padding: 1rem 1rem 1.5rem;
  background-color: ${props => {
    return props.theme.background.default;
  }};
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

function Form({ action, children, columns, description, method, novalidate, subtitle, title, onSubmit }) {
  // 1-3 colums with custom override
  let setColumns;
  const _columns = parseInt(columns);
  if (_columns > 0 && columns < 4) {
    setColumns = `repeat(${_columns}, minmax(0, 1fr))`;
  } else {
    setColumns = columns;
  }
  return (
    <FormWrapper action={action} method={method} novalidate={novalidate} onSubmit={onSubmit}>
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
  columns: PropTypes.oneOf(["1", "2", "3"]),
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
  color: ${props => {
    return props.theme.text[props.color] || "inherit";
  }};
  background-color: ${props => {
    return props.theme.palette.white;
  }};
  border: 1px solid
    ${props => {
      return props.theme.palette.grey3;
    }};
  border-radius: 5px;
  padding: 0.25rem 1rem;
  white-space: nowrap;
  user-select: none;
  height: 100%;
`;
function Label({ children, disabled, label }) {
  let color;
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) color = "disabled";
  return (
    <StyledLabel color={color} disabled={disabled}>
      {children || label}
    </StyledLabel>
  );
}
Label.propTypes = {
  label: PropTypes.string.isRequired,
};

const TextLabel = styled.label`
  grid-column: 1 / -1;
  color: ${props => {
    return props.theme.text[props.color] || "inherit";
  }};
  width: max-content;
  font-weight: 700;
  user-select: none;
  &:after {
    display: ${props => (props.isRequired ? "" : "none")};
    content: "*";
    color: ${props => {
      return props.theme.palette.alert;
    }};
    font-size: 1.25rem;
    line-height: 0;
    vertical-align: middle;
    padding-left: 0.25em;
  }
`;
function InputLabel({ label, isRequired, className, children, disabled, ...props }) {
  let color;
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) color = "disabled";
  return (
    <TextLabel
      isRequired={isRequired}
      className={className}
      color={color}
      disabled={disabled}
      {...props}
    >
      {label || children}
    </TextLabel>
  );
}
InputLabel.propTypes = {
  label: PropTypes.string,
  isRequired: PropTypes.bool,
};
InputLabel.defaultProps = {
  label: "",
  isRequired: false,
};

// needed so that each child in the list will have a unique key
function InnerText({ children }) {
  return (
    <React.Fragment>
      {children}
      <br />
    </React.Fragment>
  );
}
const Help = styled(TextLabel)`
  font-weight: initial;
`;
function HelpText({ helpText, disabled, children }) {
  let color;
  const isDisabled = typeof disabled === "boolean" ? disabled : useContext(DisabledContext);
  if (isDisabled) color = "disabled";
  const content = children || helpText;
  if (typeof content === "string") {
    return (
      <Help color={color} disabled={disabled}>
        {content.split("\n").map((text, index) => {
          return (<InnerText key={`helptext-${index}`}>{text}</InnerText>);
        })}
      </Help>
    );
  } else {
    return (
      <Help color={color} disabled={disabled}>
        {content}
      </Help>
    );
  }
}
HelpText.propTypes = {
  helpText: PropTypes.string,
};
HelpText.defaultProps = {
  helpText: "",
};

const Error = styled(TextLabel)`
  color: ${props => {
    if (props.isWarning) return props.theme.text.warning;
    return props.theme.text.alert;
  }};
  user-select: all;
  cursor: initial;
  &::selection {
    background-color: ${props => {
      if (props.isWarning) return props.theme.text.warning;
      return props.theme.background.alert;
    }};
  }
`;
function ErrorText({ error, children, warningText }) {
  let content = children || error;
  let isWarning = false;
  if (!content) {
    if (warningText) {
      content = warningText;
      isWarning = true;
    } else {
      return null;
    }
  }
  if (typeof content === "string") {
    return (
      <Error isWarning={isWarning}>
        {content.split("\n").map((text, index) => {
          return (<InnerText key={`errortext-${index}`}>{text}</InnerText>);
        })}
      </Error>
    );
  } else {
    return <Error isWarning={isWarning}>{content}</Error>;
  }
}
ErrorText.propTypes = {
  error: PropTypes.string,
  warningText: PropTypes.string,
};
ErrorText.defaultProps ={
  error: "",
  warningText: "",
}

export { Form as default, Section, Label, InputLabel, HelpText, ErrorText };
