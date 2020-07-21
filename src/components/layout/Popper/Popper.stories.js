/* eslint-disable react/jsx-filename-extension */
import React, { useState, useRef } from "react";
import Popper from "layout/Popper";
import Button, { ButtonGroup } from "atoms/Button";
import Grid from "layout/Grid";
import Card from "elements/Card";
import { Padding, CenterDecorator, Container } from "helpers/Display";

export default {
  title: "Utilities/Popper/Tests", // storyshots - js & mdx file
  component: Popper,
  parameters: {
    docs: { page: null }, // canvas view for these stories

  },
  decorators: [CenterDecorator, Container, Padding, Padding],
  excludeStories: /.*Mock$/,
};

export const textMock = `Maize, also known as corn, is a cereal grain first domesticated
 by indigenous peoples in southern Mexico about 10,000 years ago. Also, popcorn is yummy.
`;

const EmptySpace = <div />; // absolute width instead of inconsistent grid

export const PortalPostions = () => {
  const [visiblePoppers, setVisiblePoppers] = useState({
    bottomRight: true,
    bottomLeft: true,
    topRight: true,
    topLeft: true,
  });
  return (
    <Grid columns="4">
      <Popper
        id="popper-portal-position-bottomRight"
        portal
        anchor={(
          <Button
            id="popper-button-bottomRight"
            label="Bottom Right"
            isSolid
            onClick={() => {
              setVisiblePoppers((poppers) => {
                return { ...poppers, bottomRight: !poppers.bottomRight };
              });
            }}
          />
        )}
        visible={visiblePoppers.bottomRight}
        position="bottomRight"
        onClose={() => {
          setVisiblePoppers((poppers) => {
            return { ...poppers, bottomRight: false };
          });
        }}
      >
        <Grid>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </Grid>
      </Popper>
      <Popper
        id="popper-portal-position-topRight"
        portal
        anchor={(
          <Button
            id="popper-button-topRight"
            label="Top Right"
            isSolid
            onClick={() => {
              setVisiblePoppers((poppers) => {
                return { ...poppers, topRight: !poppers.topRight };
              });
            }}
          />
        )}
        visible={visiblePoppers.topRight}
        position="topRight"
        onClose={() => {
          setVisiblePoppers((poppers) => {
            return { ...poppers, topRight: false };
          });
        }}
      >
        <Grid>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </Grid>
      </Popper>
      <Popper
        id="popper-portal-position-bottomLeft"
        portal
        anchor={(
          <Button
            id="popper-button-bottomLeft"
            label="Bottom Left"
            isSolid
            onClick={() => {
              setVisiblePoppers((poppers) => {
                return { ...poppers, bottomLeft: !poppers.bottomLeft };
              });
            }}
          />
        )}
        visible={visiblePoppers.bottomLeft}
        position="bottomLeft"
        onClose={() => {
          setVisiblePoppers((poppers) => {
            return { ...poppers, bottomLeft: false };
          });
        }}
      >
        <Grid>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </Grid>
      </Popper>
      <Popper
        id="popper-portal-position-topLeft"
        portal
        anchor={(
          <Button
            id="popper-button-topLeft"
            label="Top Left"
            isSolid
            onClick={() => {
              setVisiblePoppers((poppers) => {
                return { ...poppers, topLeft: !poppers.topLeft };
              });
            }}
          />
        )}
        visible={visiblePoppers.topLeft}
        position="topLeft"
        onClose={() => {
          setVisiblePoppers((poppers) => {
            return { ...poppers, topLeft: false };
          });
        }}
      >
        <Grid>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </Grid>
      </Popper>
    </Grid>
  );
};

export const FlexPositions = () => {
  const [visiblePoppers, setVisiblePoppers] = useState({
    bottomRight: true,
    bottomLeft: true,
    topRight: true,
    topLeft: true,
  });
  return (
    <Grid columns="4">
      <Popper
        id="popper-flex-position-bottomRight"
        isFlex
        anchor={(
          <Button
            id="popper-button-bottomRight"
            label="Bottom Right"
            isSolid
            onClick={() => {
              setVisiblePoppers((poppers) => {
                return { ...poppers, bottomRight: !poppers.bottomRight };
              });
            }}
          />
        )}
        visible={visiblePoppers.bottomRight}
        position="bottomRight"
        onClose={() => {
          setVisiblePoppers((poppers) => {
            return { ...poppers, bottomRight: false };
          });
        }}
      >
        <Grid>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </Grid>
      </Popper>
      <Popper
        id="popper-flex-position-topRight"
        isFlex
        anchor={(
          <Button
            id="popper-button-topRight"
            label="Top Right"
            isSolid
            onClick={() => {
              setVisiblePoppers((poppers) => {
                return { ...poppers, topRight: !poppers.topRight };
              });
            }}
          />
        )}
        visible={visiblePoppers.topRight}
        position="topRight"
        onClose={() => {
          setVisiblePoppers((poppers) => {
            return { ...poppers, topRight: false };
          });
        }}
      >
        <Grid>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </Grid>
      </Popper>
      <Popper
        id="popper-flex-position-bottomLeft"
        isFlex
        anchor={(
          <Button
            id="popper-button-bottomLeft"
            label="Bottom Left"
            isSolid
            onClick={() => {
              setVisiblePoppers((poppers) => {
                return { ...poppers, bottomLeft: !poppers.bottomLeft };
              });
            }}
          />
        )}
        visible={visiblePoppers.bottomLeft}
        position="bottomLeft"
        onClose={() => {
          setVisiblePoppers((poppers) => {
            return { ...poppers, bottomLeft: false };
          });
        }}
      >
        <Grid>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </Grid>
      </Popper>
      <Popper
        id="popper-flex-position-topLeft"
        isFlex
        anchor={(
          <Button
            id="popper-button-topLeft"
            label="Top Left"
            isSolid
            onClick={() => {
              setVisiblePoppers((poppers) => {
                return { ...poppers, topLeft: !poppers.topLeft };
              });
            }}
          />
        )}
        visible={visiblePoppers.topLeft}
        position="topLeft"
        onClose={() => {
          setVisiblePoppers((poppers) => {
            return { ...poppers, topLeft: false };
          });
        }}
      >
        <Grid>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </Grid>
      </Popper>
    </Grid>
  );
};

export const PortalFlexPositions = () => {
  const [visiblePoppers, setVisiblePoppers] = useState({
    bottomRight: true,
    bottomLeft: true,
    topRight: true,
    topLeft: true,
  });
  return (
    <Grid columns="4">
      <Popper
        id="popper-portal-flex-position-bottomRight"
        portal
        isFlex
        anchor={(
          <Button
            id="popper-button-bottomRight"
            label="Bottom Right"
            isSolid
            onClick={() => {
              setVisiblePoppers((poppers) => {
                return { ...poppers, bottomRight: !poppers.bottomRight };
              });
            }}
          />
        )}
        visible={visiblePoppers.bottomRight}
        position="bottomRight"
        onClose={() => {
          setVisiblePoppers((poppers) => {
            return { ...poppers, bottomRight: false };
          });
        }}
      >
        <Grid>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </Grid>
      </Popper>
      <Popper
        id="popper-portal-flex-position-topRight"
        portal
        isFlex
        anchor={(
          <Button
            id="popper-button-topRight"
            label="Top Right"
            isSolid
            onClick={() => {
              setVisiblePoppers((poppers) => {
                return { ...poppers, topRight: !poppers.topRight };
              });
            }}
          />
        )}
        visible={visiblePoppers.topRight}
        position="topRight"
        onClose={() => {
          setVisiblePoppers((poppers) => {
            return { ...poppers, topRight: false };
          });
        }}
      >
        <Grid>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </Grid>
      </Popper>
      <Popper
        id="popper-portal-flex-position-bottomLeft"
        portal
        isFlex
        anchor={(
          <Button
            id="popper-button-bottomLeft"
            label="Bottom Left"
            isSolid
            onClick={() => {
              setVisiblePoppers((poppers) => {
                return { ...poppers, bottomLeft: !poppers.bottomLeft };
              });
            }}
          />
        )}
        visible={visiblePoppers.bottomLeft}
        position="bottomLeft"
        onClose={() => {
          setVisiblePoppers((poppers) => {
            return { ...poppers, bottomLeft: false };
          });
        }}
      >
        <Grid>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </Grid>
      </Popper>
      <Popper
        id="popper-portal-flex-position-topLeft"
        portal
        isFlex
        anchor={(
          <Button
            id="popper-button-topLeft"
            label="Top Left"
            isSolid
            onClick={() => {
              setVisiblePoppers((poppers) => {
                return { ...poppers, topLeft: !poppers.topLeft };
              });
            }}
          />
        )}
        visible={visiblePoppers.topLeft}
        position="topLeft"
        onClose={() => {
          setVisiblePoppers((poppers) => {
            return { ...poppers, topLeft: false };
          });
        }}
      >
        <Grid>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </Grid>
      </Popper>
    </Grid>
  );
};

export const AnchorRef = () => {
  const anchorRef = useRef();
  return (
    <Grid>
      <div ref={anchorRef} style={{ width: "100px", height: "100px", background: "grey" }}>Anchor</div>
      <Popper
        id="popper-anchor-ref"
        portal
        visible
        anchorRef={anchorRef}
      >
        <Grid>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </Grid>
      </Popper>
    </Grid>
  );
};
