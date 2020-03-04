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
  children, className, data, id, size,
}) {
  return (
    <Block id={id} className={className} >
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
              size={size}
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
  data: PropTypes.arrayOf(PropTypes.shape(Icon.propTypes)),
  id: PropTypes.string,
  /** The 'font-size' of the child Icons is inherited from the parent Icon Block and are relatively sized.
   * Options: 'xs', 'sm', 'lg', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'
  */
  size: PropTypes.string,
};


IconBlock.defaultProps = {
  className: null,
  data: null,
  id: null,
  size: null,
};

export default IconBlock;
