/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "layout/Grid";
import Text, { Label, Link } from "base/Typography";

const FieldItem = styled(Grid)`
  text-align: left;
  color: ${(props) => {
    return props.theme.text.secondary;
  }};
  align-items: baseline;
  width: 100%;
  grid-template-columns: ${(props) => {
    return props.fieldColumns || "";
  }};
  grid-gap: ${(props) => {
    return props.fieldGap || "";
  }};
`;

const GroupTitle = styled(Text)`
  color: ${(props) => {
    return props.theme.text.secondary;
  }};
  text-transform: uppercase;
  grid-column: 1/-1;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
  font-weight: 400;
`;

const FieldLabel = styled(Label)`
  text-align: inherit;
  color: ${(props) => {
    return props.theme.text[props.labelColor] || "inherit";
  }};
  cursor: initial;
  user-select: initial;
`;

const FieldValue = styled(Text)`
  text-align: ${(props) => {
    return props.valueAlign || "inherit";
  }};
  color: ${(props) => {
    return props.theme.text[props.valueColor] || "inherit";
  }};
  /* Default Value - displays when a Field's value is empty */
  &:empty {
    &:before {
      content: "- - -";
    }
  }
`;

const FieldGrid = styled(Grid)`
  grid-column-gap: 2rem;
  overflow: auto;
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

const Section = styled.section`
  display: grid;
  grid-gap: 1rem;
  margin-bottom: 1rem;
`;

function Field({
  align, className, disabled, id, label, onChange, onClick, value,
}) {
  let fieldColumns;
  let fieldGap;
  let valueAlign;
  switch (align) {
    case "vertical":
      fieldColumns = "repeat(1, minmax(0, 1fr))";
      fieldGap = "0.25rem";
      break;
    case "edge":
      fieldColumns = "1fr 1fr";
      valueAlign = "right";
      break;
    default:
      break;
  }


  let field = (
    <FieldValue
      onChange={onChange}
      text={value}
      weight="medium"
      valueAlign={valueAlign}
    />
  );

  if (onClick) {
    field = (
      <Link disabled={disabled} size="lg" onClick={onClick}>
        {field}
      </Link>
    );
  }

  return (
    <FieldItem
      className={className}
      fieldColumns={fieldColumns}
      fieldGap={fieldGap}
      id={id}
    >
      <FieldLabel size="lg" text={label} />
      {field}
    </FieldItem>
  );
}

Field.propTypes = {
  align: PropTypes.oneOf(["vertical", "edge", "tight"]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  /** Not currently being used but staying put for the next iteration. */
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.string,
};

Field.defaultProps = {
  align: null,
  className: null,
  disabled: false,
  id: null,
  onChange: null,
  onClick: null,
  value: null,
};

function FieldGroup({
  align, children, className, columns, data, gap, id, title, isDense,
}) {
  // 1-3 colums
  let setColumns;
  const _columns = parseInt(columns, 10);
  if (_columns > 0 && _columns < 4) {
    setColumns = `repeat(${_columns}, minmax(0, 1fr))`;
  }

  return (
    <FieldGrid
      className={className}
      columns={setColumns}
      gap={gap}
      id={id}
    >
      {title ? <GroupTitle size="sm" text={title} /> : null}
      {children
        || data.map((item, index) => {
          return (
            <Field
              align={item.align}
              disabled={item.disabled}
              key={item.id || item.label || index}
              id={item.id}
              label={item.label}
              onChange={item.onChange}
              isDense={isDense}
              onClick={item.onClick}
              value={item.value}
            />
          );
        })}
    </FieldGrid>
  );
}

function FieldSection({ children, title, columns }) {
  let setColumns;
  const _columns = parseInt(columns, 10);
  if (_columns > 0 && _columns < 4) {
    setColumns = `repeat(${_columns}, minmax(0, 1fr))`;
  } else {
    setColumns = columns;
  }
  return (
    <Section>
      {title ? <GroupTitle size="sm" text={title} /> : null}
      <FieldGrid
        columns={setColumns}
      >
        {children}
      </FieldGrid>
    </Section>
  );
}
FieldSection.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
FieldSection.defaultProps = {
  children: null,
  title: null,
  columns: "1",
};

FieldGroup.propTypes = {
  align: PropTypes.oneOf(["vertical", "edge", "tight"]),
  children: PropTypes.node,
  /** Defines the widths of grid columns
   *
   * Options: 1-3
   */
  className: PropTypes.string,
  gap: PropTypes.oneOf([
    "",
    "0",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
  ]),
  columns: PropTypes.oneOf(["1", "2", "3", 1, 2, 3]),
  isDense: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape(Field.propTypes)),
  id: PropTypes.string,
  title: PropTypes.string,
};

FieldGroup.defaultProps = {
  align: null,
  children: null,
  className: null,
  gap: null,
  columns: null,
  isDense: false,
  data: [],
  id: null,
  title: null,
};

export { Field as default, FieldGroup, FieldSection };
