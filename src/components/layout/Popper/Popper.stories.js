/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { useState, useRef } from "hooks";
import Popper from "layout/Popper";
import Button from "atoms/Button";
import Grid from "layout/Grid";
import Card from "elements/Card";
import { Padding, CenterDecorator, Container, CenterDisplayGrid } from "helpers/Display";

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

export const lessTextMock = "Maize, also known as corn. Also, popcorn is yummy.";

const PBoxMock = ({ children }) => {
  return (
    <div style={{ width: "12rem" }}>
      {children}
    </div>
  );
}; // absolute width instead of inconsistent grid

// need to declare helper react mock before using in other stories for this file
// since this is not technically a story, otherwise it will flood console with warnings
export const BoxMock = PBoxMock;

export const TopBottomPortalPositions = () => {
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
        closeOnClickAway={false}
      >
        <PBoxMock>
          <Card
            id="card"
            title="Corn"
            description={lessTextMock}
          />
        </PBoxMock>
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
        closeOnClickAway={false}
      >
        <PBoxMock>
          <Card
            id="card"
            title="Corn"
            description={lessTextMock}
          />
        </PBoxMock>
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
        closeOnClickAway={false}
      >
        <PBoxMock>
          <Card
            id="card"
            title="Corn"
            description={lessTextMock}
          />
        </PBoxMock>
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
        closeOnClickAway={false}
      >
        <PBoxMock>
          <Card
            id="card"
            title="Corn"
            description={lessTextMock}
          />
        </PBoxMock>
      </Popper>
    </Grid>
  );
};
export const LeftRightPortalPositions = () => {
  const [visiblePoppers, setVisiblePoppers] = useState({
    leftUp: true,
    rightUp: true,
    leftDown: true,
    rightDown: true,
  });
  return (
    <Grid columns="2">
      <Popper
        id="popper-portal-position-leftUp"
        usePortal
        anchor={(
          <Button
            id="popper-button-leftUp"
            label="Left Up"
            isSolid
            onClick={() => {
              setVisiblePoppers((poppers) => {
                return { ...poppers, leftUp: !poppers.leftUp };
              });
            }}
          />
        )}
        visible={visiblePoppers.leftUp}
        position="leftUp"
        onClose={() => {
          setVisiblePoppers((poppers) => {
            return { ...poppers, leftUp: false };
          });
        }}
        closeOnClickAway={false}
      >
        <PBoxMock>
          <Card
            id="card"
            title="Corn"
            description={lessTextMock}
          />
        </PBoxMock>
      </Popper>
      <Popper
        id="popper-portal-position-rightUp"
        usePortal
        anchor={(
          <Button
            id="popper-button-rightUp"
            label="Right Up"
            isSolid
            onClick={() => {
              setVisiblePoppers((poppers) => {
                return { ...poppers, rightUp: !poppers.rightUp };
              });
            }}
          />
        )}
        visible={visiblePoppers.rightUp}
        position="rightUp"
        onClose={() => {
          setVisiblePoppers((poppers) => {
            return { ...poppers, rightUp: false };
          });
        }}
        closeOnClickAway={false}
      >
        <PBoxMock>
          <Card
            id="card"
            title="Corn"
            description={lessTextMock}
          />
        </PBoxMock>
      </Popper>
      <Popper
        id="popper-portal-position-leftDown"
        usePortal
        anchor={(
          <Button
            id="popper-button-leftDown"
            label="Left Down"
            isSolid
            onClick={() => {
              setVisiblePoppers((poppers) => {
                return { ...poppers, leftDown: !poppers.leftDown };
              });
            }}
          />
        )}
        visible={visiblePoppers.leftDown}
        position="leftDown"
        onClose={() => {
          setVisiblePoppers((poppers) => {
            return { ...poppers, leftDown: false };
          });
        }}
        closeOnClickAway={false}
      >
        <PBoxMock>
          <Card
            id="card"
            title="Corn"
            description={lessTextMock}
          />
        </PBoxMock>
      </Popper>
      <Popper
        id="popper-portal-position-rightDown"
        usePortal
        anchor={(
          <Button
            id="popper-button-rightDown"
            label="Right Down"
            isSolid
            onClick={() => {
              setVisiblePoppers((poppers) => {
                return { ...poppers, rightDown: !poppers.rightDown };
              });
            }}
          />
        )}
        visible={visiblePoppers.rightDown}
        position="rightDown"
        onClose={() => {
          setVisiblePoppers((poppers) => {
            return { ...poppers, rightDown: false };
          });
        }}
        closeOnClickAway={false}
      >
        <PBoxMock>
          <Card
            id="card"
            title="Corn"
            description={lessTextMock}
          />
        </PBoxMock>
      </Popper>
    </Grid>
  );
};
LeftRightPortalPositions.story = {
  decorators: [CenterDisplayGrid],
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
        <PBoxMock>
          <Card
            id="card"
            title="Corn"
            description={lessTextMock}
          />
        </PBoxMock>
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
        <PBoxMock>
          <Card
            id="card"
            title="Corn"
            description={lessTextMock}
          />
        </PBoxMock>
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
        <PBoxMock>
          <Card
            id="card"
            title="Corn"
            description={lessTextMock}
          />
        </PBoxMock>
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
        <PBoxMock>
          <Card
            id="card"
            title="Corn"
            description={lessTextMock}
          />
        </PBoxMock>
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
        <PBoxMock>
          <Card
            id="card"
            title="Corn"
            description={lessTextMock}
          />
        </PBoxMock>
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
        <PBoxMock>
          <Card
            id="card"
            title="Corn"
            description={lessTextMock}
          />
        </PBoxMock>
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
        <PBoxMock>
          <Card
            id="card"
            title="Corn"
            description={lessTextMock}
          />
        </PBoxMock>
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
        <PBoxMock>
          <Card
            id="card"
            title="Corn"
            description={lessTextMock}
          />
        </PBoxMock>
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
        <PBoxMock>
          <Card
            id="card"
            title="Corn"
            description={lessTextMock}
          />
        </PBoxMock>
      </Popper>
    </Grid>
  );
};
