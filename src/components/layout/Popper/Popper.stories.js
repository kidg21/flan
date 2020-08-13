/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { useState, useRef } from "hooks";
import Popper from "layout/Popper";
import Button from "atoms/Button";
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

export const BoxMock = ({ children }) => {
  return (
    <div style={{ width: "12rem" }}>
      {children}
    </div>
  );
}; // absolute width instead of inconsistent grid

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
        usePortal
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
        <BoxMock>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </BoxMock>
      </Popper>
      <Popper
        id="popper-portal-position-topRight"
        usePortal
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
        <BoxMock>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </BoxMock>
      </Popper>
      <Popper
        id="popper-portal-position-bottomLeft"
        usePortal
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
        <BoxMock>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </BoxMock>
      </Popper>
      <Popper
        id="popper-portal-position-topLeft"
        usePortal
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
        <BoxMock>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </BoxMock>
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
        <BoxMock>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </BoxMock>
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
        <BoxMock>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </BoxMock>
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
        <BoxMock>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </BoxMock>
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
        <BoxMock>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </BoxMock>
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
        usePortal
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
        <BoxMock>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </BoxMock>
      </Popper>
      <Popper
        id="popper-portal-flex-position-topRight"
        usePortal
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
        <BoxMock>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </BoxMock>
      </Popper>
      <Popper
        id="popper-portal-flex-position-bottomLeft"
        usePortal
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
        <BoxMock>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </BoxMock>
      </Popper>
      <Popper
        id="popper-portal-flex-position-topLeft"
        usePortal
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
        <BoxMock>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </BoxMock>
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
        usePortal
        visible
        anchorRef={anchorRef}
      >
        <BoxMock>
          <Card
            id="card"
            title="Corn"
            description={textMock}
          />
        </BoxMock>
      </Popper>
    </Grid>
  );
};
