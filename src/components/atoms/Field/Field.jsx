/* eslint-disable complexity */
/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "layout/Grid";
import Text, { Label, Link } from "base/Typography";

const FieldItem = styled(Grid)`
  font-size: ${(props) => {
    return props.fieldSize || "";
  }};
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
  line-height: normal;
`;

const GroupTitle = styled(Text)`
  color: ${(props) => {
    return props.theme.background.alt;
  }};
  text-transform: uppercase;
  grid-column: 1/-1;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
`;

const FieldLabel = styled(Label)`
  font-size: 1em;
  text-align: inherit;
  color: ${(props) => {
    return props.theme.text[props.labelColor] || "inherit";
  }};
  white-space: normal;
  cursor: initial;
  user-select: initial;
`;

const FieldValue = styled(Text)`
  font-size: 1em;
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

const LinkedField = styled(Link)`
  margin: initial;
  padding: initial;
  width: max-content;
  justify-self: ${(props) => {
    return props.justifyLink || "";
  }};
`;

const FieldGrid = styled(Grid)`
  grid-column-gap: ${(props) => {
    return props.gap || "";
  }};
  grid-row-gap: ${(props) => {
    return props.isDense ? "0.5rem" : "1rem";
  }};
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
  align,
  className,
  disabled,
  spacing,
  href,
  id,
  label,
  onChange,
  onClick,
  size,
  target,
  value,
}) {
  let fieldColumns;
  let fieldGap;
  let valueAlign;
  let justifyLink;
  let fieldSize = "";

  switch (size) {
    case "sm":
      fieldSize = ".8rem";
      break;
    case "lg":
      fieldSize = "1.2rem";
      break;
    case "xl":
      fieldSize = "1.35rem";
      break;
    case "2xl":
      fieldSize = "1.5rem";
      break;
    default:
      fieldSize = "1rem";
      break;
  }

  let labelSpacing = parseInt(spacing, 10) / 3;
  if (isNaN(labelSpacing)) labelSpacing = "minmax(auto, 7rem)";
  else labelSpacing += "fr";

  const valueSpacing = "1fr";

  switch (align) {
    case "vertical":
      fieldColumns = "repeat(1, minmax(0, 1fr))";
      fieldGap = "0.25rem";
      break;
    case "edge":
      fieldColumns = `${labelSpacing} ${valueSpacing}`;
      valueAlign = "right";
      justifyLink = "flex-end";
      break;
    default:
      fieldColumns = `${labelSpacing} ${valueSpacing}`;
      fieldGap = "1.5rem";
      break;
  }

  let field = (
    <FieldValue
      onChange={onChange}
      weight="bold"
      valueAlign={valueAlign}
      size={size}
    >
      {value}
    </FieldValue>
  );

  if (href || onClick) {
    field = (
      <LinkedField disabled={disabled} size={size} href={href} target={href ? target : undefined} onClick={onClick} justifyLink={justifyLink}>
        {field}
      </LinkedField>
    );
  }

  return (
    <FieldItem
      className={className}
      fieldColumns={fieldColumns}
      fieldGap={fieldGap}
      id={id}
      fieldSize={fieldSize}
    >
      <FieldLabel text={label} size={size} />
      {field}
    </FieldItem>
  );
}
Field.propTypes = {
  align: PropTypes.oneOf(["vertical", "edge"]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  /** Not currently being used but staying put for the next iteration. */
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["sm", "lg", "xl", "2xl"]),
  spacing: PropTypes.oneOf(["2x", "3x", "4x"]),
  target: PropTypes.string,
  value: PropTypes.node,
};
Field.defaultProps = {
  align: null,
  className: null,
  disabled: false,
  href: undefined,
  id: null,
  onChange: null,
  onClick: null,
  size: null,
  spacing: null,
  target: "_blank",
  value: null,
};

function FieldGroup({
  align, children, className, columns, data, id, isDense, size, spacing, title,
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
      id={id}
      isDense={isDense}
    >
      {title ? <GroupTitle text={title} size="sm" weight="bold" /> : null}
      {children
        || data.map((item, index) => {
          return (
            <Field
              align={item.align || align}
              spacing={item.spacing || spacing}
              disabled={item.disabled}
              key={item.id || item.label || index}
              id={item.id}
              label={item.label}
              onChange={item.onChange}
              onClick={item.onClick}
              size={item.size || size}
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
  className: PropTypes.string,
  /** Defines the widths of grid columns
   *
   * Options: 1-3
   */
  columns: PropTypes.oneOf(["1", "2", "3", 1, 2, 3]),
  data: PropTypes.arrayOf(PropTypes.shape(Field.propTypes)),
  id: PropTypes.string,
  isDense: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg", "xl", "2xl"]),
  spacing: PropTypes.oneOf([
    "2x",
    "3x",
    "4x",
  ]),
  title: PropTypes.string,
};
FieldGroup.defaultProps = {
  align: null,
  children: null,
  className: null,
  columns: 1,
  data: [],
  id: null,
  isDense: false,
  size: null,
  spacing: null,
  title: null,
};

function FieldSection({
  children, columns, gap, title,
}) {
  let setColumns;
  const _columns = parseInt(columns, 10);
  if (_columns > 0 && _columns < 4) {
    setColumns = `repeat(${_columns}, minmax(0, 1fr))`;
  } else {
    setColumns = columns;
  }
  const baseGap = 0.5;
  let setGap;
  switch (gap) {
    case "sm":
      setGap = `${baseGap * 2}rem`;
      break;
    default:
      setGap = `${baseGap * 4}rem`;
      break;
    case "lg":
      setGap = `${baseGap * 6}rem`;
      break;
    case "xl":
      setGap = `${baseGap * 8}rem`;
      break;
  }

  return (
    <Section>
      {title ? <GroupTitle size="sm" text={title} /> : null}
      <FieldGrid
        columns={setColumns}
        gap={setGap}
      >
        {children}
      </FieldGrid>
    </Section>
  );
}
FieldSection.propTypes = {
  children: PropTypes.node,
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gap: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
      "sm",
      "lg",
      "xl",
    ]),
  ]),
  title: PropTypes.string,
};
FieldSection.defaultProps = {
  children: null,
  gap: null,
  columns: "1",
  title: null,
};

export { Field as default, FieldGroup, FieldSection };
