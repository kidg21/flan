import styled from "styled-components";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const CommandWrapper = styled.div``;
const Icon = styled.i``;
const Label = styled.h6``;

class Command extends PureComponent {
  render() {
    const {
      label, labelProps, icon, iconRight, iconProps,
    } = this.props;

    const displayOrder = [];

    displayOrder.push(<Icon {...iconProps}>{icon}</Icon>);
    displayOrder.push(<Label {...labelProps}>{label}</Label>);

    if (iconRight) {
      displayOrder.reverse();
    }

    return (
      <CommandWrapper>
        {displayOrder}
      </CommandWrapper>
    );
  }
}

export default Command;
