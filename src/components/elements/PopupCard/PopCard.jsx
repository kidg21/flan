import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Button from "atoms/Button";
import Card, {Piece} from "layout/Card";
import Bar from "blocks/Bar";
import Grid from 'helpers/Grid';


function PopCard({ id, title, message}) {
  return (
    <Card
    id={id}> 
        <Bar onePart='true' secondSlot={<Icon icon={["fal", "times"]} />}/>
        <Bar threeParts='true' title={title} />
        <Bar threeParts='true' title={message} />
        <Grid col_2>
          <Button buttonLabel="yes please!" isRound={true} />
          <Button
            buttonLabel="No thanks"
            isSecondStandard={true}
            isRound={true}
          />
          </Grid>
    </Card>
  );
}
PopCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string.isRequired
};

export default PopCard;
