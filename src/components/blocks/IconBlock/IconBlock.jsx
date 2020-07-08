/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";

const Block = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  > a {
    display: flex;
  }
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
              key={item.id || item.icon}
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
  children: PropTypes.node,
  /** className used for extending styles */
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape(Icon.propTypes)),
  id: PropTypes.string,
  /** The 'font-size' of the child Icons is inherited from the parent Icon Block and are relatively sized.
   * Options: 'xs', 'sm', 'lg', 'xl', '2xl', '3xl', '4xl'
  */
  size: PropTypes.string,
};


IconBlock.defaultProps = {
  children: null,
  className: null,
  data: null,
  id: null,
  size: null,
};

export default IconBlock;
