/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "layout/Grid";
import Text, { Title, Label, Link } from "base/Typography";

const FieldItem = styled(Grid)`
  text-align: left;
  align-items: baseline;
  width: 100%;
  grid-template-columns: ${(props) => {
    return props.fieldColumns || "7rem 1fr";
  }};
  grid-gap: ${(props) => {
    return props.fieldGap || "";
  }};
`;

const FieldGrid = styled(Grid)`
  grid-template-columns: ${(props) => {
    return props.columns || "repeat(auto-fill, minmax(20rem, 1fr))";
  }};
  grid-column-gap: 2rem;
  overflow: auto;
  &:not(:last-of-type) {
    margin-bottom: 1.75rem;
  }
`;

const GroupTitle = styled(Title)`
  color: ${(props) => {
    return props.theme.text.secondary;
  }};
  grid-column: 1/-1;
  letter-spacing: 1px;
`;

const FieldLabel = styled(Label)`
  text-align: inherit;
  color: ${(props) => {
    return props.theme.text[props.labelColor] || props.theme.text.secondary;
  }};
  cursor: initial;
  user-select: initial;
`;

const FieldValue = styled(Text)`
  text-align: ${(props) => {
    return props.valueAlign || "inherit";
  }};
  color: ${(props) => {
    return props.theme.text[props.valueColor] || props.theme.text.secondary;
  }};
  /* Default Value - displays when a Field's value is empty */
  &:empty {
    &:before {
      content: "- - -";
    }
  }
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
      <FieldLabel size="xl" text={label} />
      {field}
    </FieldItem>
  );
}

Field.propTypes = {
  align: PropTypes.oneOf(["vertical", "edge"]),
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
  align, children, className, columns, data, id, title,
}) {
  // 1-3 colums
  let setColumns;
  const _columns = parseInt(columns, 10);
  if (_columns > 0 && columns < 4) {
    setColumns = `repeat(${_columns}, minmax(0, 1fr))`;
  }
  if (align === "edge") {
    setColumns = `repeat(1, minmax(0, 1fr))`;
  }
  return (
    <FieldGrid
      className={className}
      columns={setColumns}
      id={id}
    >
      {title ? <GroupTitle text={title} weight="bold" /> : null}
      {children
        || data.map((item, index) => {
          return (
            <Field
              align={align}
              disabled={item.disabled}
              key={item.id || item.label || index}
              id={item.id}
              label={item.label}
              onChange={item.onChange}
              onClick={item.onClick}
              value={item.value}
            />
          );
        })}
    </FieldGrid>
  );
}

FieldGroup.propTypes = {
  align: PropTypes.oneOf(["vertical", "edge"]),
  children: PropTypes.node,
  /** Defines the widths of grid columns
   *
   * Options: 1-3
   */
  className: PropTypes.string,
  columns: PropTypes.oneOf(["1", "2", "3", 1, 2, 3]),
  data: PropTypes.arrayOf(PropTypes.shape(Field.propTypes)),
  id: PropTypes.string,
  title: PropTypes.string,
};

FieldGroup.defaultProps = {
  align: null,
  children: null,
  className: null,
  columns: null,
  data: [],
  id: null,
  title: null,
};

export { Field as default, FieldGroup };
