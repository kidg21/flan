/* eslint-disable react/jsx-filename-extension */
import React, { useState, useRef } from "react";
import Popper from "layout/Popper";
import Button, { ButtonGroup } from "atoms/Button";
import Tabs, { TabItem } from "blocks/Tabs";
import Menu from "blocks/Menu";
import Grid from "layout/Grid";
import Card from "elements/Card";
import { Padding } from "helpers/Display";

export default {
  title: "Utilities/Popper",
  component: Popper,
  parameters: {
    docs: { page: null },
  },
  decorators: [Padding],
  includeStories: [],
};

const EmptySpace = <div />;

export const Position = () => {
  const [visible, setVisible] = useState({});
  return (
    <Grid columns="4">
      {EmptySpace}
      <Popper
        id="popper-position-bottomRight"
        anchor={(
          <Button
            // icon="options"
            // isPlain
            // isRound
            label="Bottom Right"
            onClick={() => {
              setVisible((hash) => { return { ...hash, bottomRight: !hash.bottomRight }; });
            }}
          />
        )}
        position="bottomRight"
        visible={visible.bottomRight}
        onClose={() => {
          setVisible((hash) => { return { ...hash, bottomRight: false }; });
        }}
      >
        <Card />
      </Popper>
      <Popper
        id="popper-position-bottomLeft"
        anchor={(
          <Button
            // icon="options"
            // isPlain
            // isRound
            label="Bottom Left"
            onClick={() => {
              setVisible((hash) => { return { ...hash, bottomLeft: !hash.bottomLeft }; });
            }}
          />
        )}
        position="bottomLeft"
        visible={visible.bottomLeft}
        onClose={() => {
          setVisible((hash) => { return { ...hash, bottomLeft: false }; });
        }}
      >
        <Card />
      </Popper>
      {EmptySpace}
      {EmptySpace}
      <Popper
        id="popper-position-topRight"
        anchor={(
          <Button
            // icon="options"
            // isPlain
            // isRound
            label="Top Right"
            onClick={() => {
              setVisible((hash) => { return { ...hash, topRight: !hash.topRight }; });
            }}
          />
        )}
        position="topRight"
        visible={visible.topRight}
        onClose={() => {
          setVisible((hash) => { return { ...hash, topRight: false }; });
        }}
      >
        <Card />
      </Popper>
      <Popper
        id="popper-position-topLeft"
        anchor={(
          <Button
            // icon="options"
            // isPlain
            // isRound
            label="Top Left"
            onClick={() => {
              setVisible((hash) => { return { ...hash, topLeft: !hash.topLeft }; });
            }}
          />
        )}
        position="topLeft"
        visible={visible.topLeft}
        onClose={() => {
          setVisible((hash) => { return { ...hash, topLeft: false }; });
        }}
      >
        <Card />
      </Popper>
      {EmptySpace}
    </Grid>
  );
};

export const PositionPortal = () => {
  const [visible, setVisible] = useState({});
  return (
    <Grid columns="4">
      {EmptySpace}
      <Popper
        id="popper-portal-position-bottomRight"
        portal
        anchor={(
          <Button
            // icon="options"
            // isPlain
            // isRound
            label="Bottom Right"
            onClick={() => {
              setVisible((hash) => { return { ...hash, bottomRight: !hash.bottomRight }; });
            }}
          />
        )}
        position="bottomRight"
        visible={visible.bottomRight}
        onClose={() => {
          setVisible((hash) => { return { ...hash, bottomRight: false }; });
        }}
      >
        <Card />
      </Popper>
      <Popper
        id="popper-portal-position-bottomLeft"
        portal
        anchor={(
          <Button
            // icon="options"
            // isPlain
            // isRound
            label="Bottom Left"
            onClick={() => {
              setVisible((hash) => { return { ...hash, bottomLeft: !hash.bottomLeft }; });
            }}
          />
        )}
        position="bottomLeft"
        visible={visible.bottomLeft}
        onClose={() => {
          setVisible((hash) => { return { ...hash, bottomLeft: false }; });
        }}
      >
        <Card />
      </Popper>
      {EmptySpace}
      {EmptySpace}
      <Popper
        id="popper-portal-position-topRight"
        portal
        anchor={(
          <Button
            // icon="options"
            // isPlain
            // isRound
            label="Top Right"
            onClick={() => {
              setVisible((hash) => { return { ...hash, topRight: !hash.topRight }; });
            }}
          />
        )}
        position="topRight"
        visible={visible.topRight}
        onClose={() => {
          setVisible((hash) => { return { ...hash, topRight: false }; });
        }}
      >
        <Card />
      </Popper>
      <Popper
        id="popper-portal-position-topLeft"
        portal
        anchor={(
          <Button
            // icon="options"
            // isPlain
            // isRound
            label="Top Left"
            onClick={() => {
              setVisible((hash) => { return { ...hash, topLeft: !hash.topLeft }; });
            }}
          />
        )}
        position="topLeft"
        visible={visible.topLeft}
        onClose={() => {
          setVisible((hash) => { return { ...hash, topLeft: false }; });
        }}
      >
        <Card />
      </Popper>
      {EmptySpace}
    </Grid>
  );
};

export const PortalAnchorRef = () => {
  const [activeAnchor, setActiveAnchor] = useState(true);
  // true - anchorRef, false - anchorRef2
  const anchorRef = useRef();
  const anchorRef2 = useRef();
  const [visible, setVisible] = useState(true);

  return (
    <Grid columns="3">
      <Button label="Toggle Anchor Ref" onClick={() => { setActiveAnchor((show) => { return !show; }); }} />
      <Button label="Toggle Popper On/Off" onClick={() => { setVisible((show) => { return !show; }); }} />
      {EmptySpace}
      <Popper
        id="popper-anchor-ref"
        portal
        anchor={(
          <React.Fragment>
            <div ref={anchorRef} style={{ width: "100px", height: "100px", background: "green" }}>Anchor</div>
            {EmptySpace}
            <div ref={anchorRef2} style={{ width: "100px", height: "100px", background: "lightgreen" }}>Anchor 2</div>
          </React.Fragment>
        )}
        visible={visible}
        anchorRef={activeAnchor ? anchorRef : anchorRef2}
      >
        <Card />
      </Popper>
    </Grid>
  );
};

// const data = [
//   { id: "option 1", label: "option 1", onClick: () => { alert("option 1"); } },
//   {
//     id: "option 2", label: "option 2", onClick: () => { alert("option 2"); },
//     data: [
//       { id: "nested option 1", label: "nested option 1", onClick: () => { alert("nested option 1"); } },
//       {
//         id: "nested option 2", label: "nested option 2", onClick: () => { alert("nested option 2"); },
//         data: [
//           { id: "nested option 21", label: "nested option 21", onClick: () => { alert("nested option 21"); } },
//           { id: "nested option 22", label: "nested option 22", onClick: () => { alert("nested option 22"); } },
//         ]
//       },
//     ]
//   },
//   { id: "option 3", label: "option 3", onClick: () => { alert("option 3"); } },
// ];
// export const MenuTest = () => {
//   return (<React.Fragment>
//     {/* <div style={{ height: "500px", width: "500px", background: "green"}} /> */}
//     <Menu visible position="bottomRight" data={data} />
//   </React.Fragment>)
//   // return <Menu visible />;
// };

// export const PopperTest = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <React.Fragment>
//       <div style={{ padding: "100px" }}>
//         <Popper
//           anchor={<Button label="testing" onClick={() => { setVisible((vis) => { return !vis; }); }} />}
//           position="bottomLeft"
//           visible={visible}
//         >
//           <div style={{ height: "100px", width: "100px", background: "green" }} >testing</div>
//         </Popper>
//         <div style={{ height: "500px", width: "500px", background: "gray" }} />
//       </div>
//     </React.Fragment>
//   )
// }
// export const PopperTest2 = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <React.Fragment>
//       <div style={{ padding: "100px" }}>
//         <Popper
//           anchor={<Button label="testing" onClick={() => { setVisible((vis) => { return !vis; }); }} />}
//           position="bottomLeft"
//           visible={visible}
//         >
//           <div style={{ height: "100px", width: "100px", background: "green" }} >testing</div>
//         </Popper>
//         <div style={{ height: "500px", width: "500px", background: "gray" }} />
//       </div>
//     </React.Fragment>
//   )
// }


// export const Test = () => {
//   const anchorRef = useRef();
//   const [visible, setVisible] = useState(false);
//   return (
//     <React.Fragment>
//       <Tabs>
//         <div style={{ height: "100px" }} ref={anchorRef}>testing anchor</div>
//         <TabItem label="test1" onClick={() => {
//           setVisible((vis) => { return !vis; });
//         }} />
//         <Popper
//           portal
//           anchor={(<TabItem label="test2" onClick={() => {
//             setVisible((vis) => { return !vis; });
//           }} />)}
//           visible
//           onClose={() => {
//             setVisible(false);
//           }}
//           position="bottomLeft"
//           anchorRef={visible ? anchorRef : undefined}
//         >
//           <div>hello world</div>
//         </Popper>
//         <TabItem label="test3" />
//       </Tabs>
//       {/* <ButtonGroup> */}
//       {/* <Popper
//         anchor={<div ref={anchorRef}>wowowow</div>}
//         visible
//         position="topLeft"
//         anchorRef={visible ? anchorRef : undefined}
//       >
//         <div>number 2</div>
//       </Popper> */}
//       {/* </ButtonGroup> */}
//     </React.Fragment>
//   );
// };
