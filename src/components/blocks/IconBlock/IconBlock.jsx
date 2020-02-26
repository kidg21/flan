/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";

const Block = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  justify-content: space-between;
`;

function IconBlock({
  children, className, data, id, large,
}) {
  return (
    <Block id={id} className={className} large={large} >
      {children ||
        data.map((item) => {
          return (
            <Icon
              badge={item.badge}
              brand={item.brand}
              disabled={item.disabled}
              fixedWidth
              flip={item.flip}
              href={item.href}
              icon={item.icon}
              id={item.id}
              onClick={item.onClick}
              pulse={item.pulse}
              rotation={item.rotation}
              size={large ? "2x" : item.size}
              spin={item.spin}
              type={item.type}
            />
          );
        })}
    </Block>
  );
}

IconBlock.propTypes = {
  children: PropTypes.node.isRequired,
  /** className used for extending styles */
  className: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  id: PropTypes.string,
  large: PropTypes.boolean,
};


IconBlock.defaultProps = {
  className: null,
  data: null,
  id: null,
  large: false,
};

export default IconBlock;
