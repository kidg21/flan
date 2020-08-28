/* eslint-disable linebreak-style */
/* eslint-disable complexity */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { useState } from "hooks";
import {
  Padding, CenterDecorator,
} from "helpers/Display";
import Bar from "layout/Bar";
import Icon from "atoms/Icon";
import DataRange from "blocks/DataRange";
import FileImport from "blocks/FileImport";
import Text, { Title, Link } from "base/Typography";
import Button from "atoms/Button";
import Command from "atoms/Command";
import Radio, { RadioGroup } from "atoms/Radio";
import Tabs, { TabItem } from "blocks/Tabs";
import Container from "atoms/Container";
import List, { ListItem } from "blocks/List";
import TextInput from "atoms/TextInput";
import Divider from "atoms/Divider";
import Card from "elements/Card";
import Layout from "layout/Layout";
import Modal from "layout/Modal";
import Checkbox, { CheckboxGroup } from "atoms/Checkbox";
import Panel from "layout/Panel";
import DialogBox from "elements/DialogBox";
import Grid from "layout/Grid";
import Form, { FormSection } from "layout/Form";
import Picker, { ImageSwatch } from "elements/Picker";
import PrintNone from "images/dialogs/image-none.gif";
import PrintFull from "images/dialogs/image-full.gif";
import PrintHalf from "images/dialogs/image-half.gif";
import PrintQuarter from "images/dialogs/image-quarter.gif";
import PrintLegend from "images/dialogs/image-legend.gif";

function doNothing() {
  // do nothing
}

storiesOf("Templates/Modules/Dialogs", module)
  .addDecorator(Padding)
  .addDecorator(CenterDecorator)
  .addDecorator(withA11y)
  .add("Print Options", () => {
    return React.createElement(() => {
      const [activeSingleTab, setActiveSingleTab] = useState("option1");
      const [legend, setLegend] = useState(false);
      function toggleLegend() {
        if (legend) {
          setLegend(false);
        } else {
          setLegend(true);
        }
      }
      return (
        <DialogBox
          buttons={[
            {
              id: "Cancel",
              label: "Cancel",
              onClick: doNothing,
            },
            {
              id: "Save Map Image",
              label: "Save Map Image",
              onClick: doNothing,
            },
          ]}
        >
          <Form>
            <Picker
              id="size"
              label="Choose an Image Size and Legend Option"
              columns="repeat(6, auto);"
            >
              <ImageSwatch
                src={PrintNone}
                alt="None"
                width="75"
                label="None"
                isSelected={activeSingleTab === "option1"}
                onClick={() => { setActiveSingleTab("option1"); }}
              />
              <ImageSwatch
                src={PrintFull}
                alt="Full"
                width="75"
                label="Full"
                isSelected={activeSingleTab === "option2"}
                onClick={() => { setActiveSingleTab("option2"); }}
              />
              <ImageSwatch
                src={PrintHalf}
                alt="Half"
                width="75"
                label="Half"
                isSelected={activeSingleTab === "option3"}
                onClick={() => { setActiveSingleTab("option3"); }}
              />
              <ImageSwatch
                src={PrintQuarter}
                alt="Quarter"
                width="75"
                label="Quarter"
                isSelected={activeSingleTab === "option4"}
                onClick={() => { setActiveSingleTab("option4"); }}
              />
              <Divider isVertical />
              <ImageSwatch
                src={PrintLegend}
                alt="Legend"
                width="75"
                label="Legend"
                isSelected={legend}
                onClick={toggleLegend}
              />
            </Picker>
          </Form>
        </DialogBox>
      );
    });
  })
  .add("Share Dialog", () => {
    return React.createElement(() => {
      const [activeSingleTab, setActiveSingleTab] = useState("option1");
      const [legend, setLegend] = useState(false);
      function toggleLegend() {
        if (legend) {
          setLegend(false);
        } else {
          setLegend(true);
        }
      }
      return (
        <DialogBox
          title="Share"
          buttons={[
            {
              id: "Cancel",
              label: "Cancel",
              onClick: doNothing,
            },
            {
              id: "Share",
              label: "Share",
              onClick: doNothing,
            },
          ]}
        >
          <Form>
            <FormSection columns="2">
              <TextInput label="Username" placeholder="i.e. JDoe" isRequired />
              <TextInput label="Email" />
            </FormSection>
          </Form>
        </DialogBox>
      );
    });
  })

  .add("Attachment Dialog", () => {
    return React.createElement(() => {
      const [activeSingleTab, setActiveSingleTab] = useState("option1");
      const [legend, setLegend] = useState(false);
      function toggleLegend() {
        if (legend) {
          setLegend(false);
        } else {
          setLegend(true);
        }
      }
      return (
        <DialogBox
          title="Attachments "
        >
          <Container padding="1x" hasBorder maxHeight="25rem" width="30rem">
            <List isDivided>
              <ListItem title="filename.jpg" description="10/10/10 by tchung" post={{ type: "icon", icon: "close" }} />
              <ListItem title="filename.jpg" description="10/10/10 by tchung" post={{ type: "icon", icon: "close" }} />
              <ListItem title="filename.jpg" description="10/10/10 by tchung" post={{ type: "icon", icon: "close" }} />
              <ListItem title="filename.jpg" description="10/10/10 by tchung" post={{ type: "icon", icon: "close" }} />
              <ListItem title="filename.jpg" description="10/10/10 by tchung" post={{ type: "icon", icon: "close" }} />
              <ListItem title="filename.jpg" description="10/10/10 by tchung" post={{ type: "icon", icon: "close" }} />
              <ListItem title="filename.jpg" description="10/10/10 by tchung" post={{ type: "icon", icon: "close" }} />
              <ListItem title="filename.jpg" description="10/10/10 by tchung" post={{ type: "icon", icon: "close" }} />
            </List>
          </Container>
          <Bar left={<Command label="Add File" icon="plus" />} />
          <Bar right={<Button label="Done" isSolid />} />
        </DialogBox>
      );
    });
  })
  .add("Upload Dialog", () => {
    return React.createElement(() => {
      const [activeSingleTab, setActiveSingleTab] = useState("option1");
      const [legend, setLegend] = useState(false);
      function toggleLegend() {
        if (legend) {
          setLegend(false);
        } else {
          setLegend(true);
        }
      }
      return (
        <DialogBox
          title="Add File"
          buttons={[
            {
              id: "Cancel",
              label: "Cancel",
              onClick: doNothing,
            },
            {
              id: "Complete",
              label: "Upload",
              onClick: doNothing,
            },
          ]}
        >
          <Form>
            <FileImport id="FileImport_Standard" />
            <TextInput label="Rename" />
          </Form>
        </DialogBox>
      );
    });
  })
  .add("Filter PT Dialog", () => {
    return React.createElement(() => {
      const [activeSingleTab, setActiveSingleTab] = useState("option1");
      const [legend, setLegend] = useState(false);
      function toggleLegend() {
        if (legend) {
          setLegend(false);
        } else {
          setLegend(true);
        }
      }
      return (
        <DialogBox
          title="Filters"
          buttons={[
            {
              id: "Cancel",
              label: "Cancel",
              onClick: doNothing,
            },
            {
              id: "Complete",
              label: "Apply",
              onClick: doNothing,
            },
          ]}
        >
          <Tabs>
            <TabItem label="Property Type" isSelected />
            <TabItem label="Building" />
            <TabItem label="Lot" />
            <TabItem label="Ownership" />
            <TabItem label="Sales" />
            <TabItem label="Value" />
          </Tabs>
          <Divider />
          <Form>
            <FormSection title="Residential Type">
              <CheckboxGroup columns="2">
                <Checkbox label="Multifamily" />
                <Checkbox label="Duplex, Triplex, Quadraplex" />
                <Checkbox label="Single Family" />
                <Checkbox label="Condominium, PUD" />
                <Checkbox label="Vacant Residential" />
                <Checkbox label="Mobile/Manufactured" />
                <Checkbox label="Misc. Residential" />
              </CheckboxGroup>
            </FormSection>
            <FormSection title="Commercial Type">
              <CheckboxGroup columns="2">
                <Checkbox label="Industrial" />
                <Checkbox label="Office" />
                <Checkbox label="Retail" />
                <Checkbox label="Entertainment & Recreation" />
                <Checkbox label="Hotel/Motel" />
                <Checkbox label="Health Care" />
                <Checkbox label="Misc. Commercial" />
                <Checkbox label="Agricultural" />
                <Checkbox label="Vacant Land" />
                <Checkbox label="Governmental, Public" />
                <Checkbox label="Schools" />
                <Checkbox label="Religious" />
              </CheckboxGroup>
            </FormSection>
          </Form>
        </DialogBox>
      );
    });
  })
  .add("Filter Building Dialog", () => {
    return React.createElement(() => {
      const [activeSingleTab, setActiveSingleTab] = useState("option1");
      const [legend, setLegend] = useState(false);
      function toggleLegend() {
        if (legend) {
          setLegend(false);
        } else {
          setLegend(true);
        }
      }
      return (
        <DialogBox
          title="Filters"
          buttons={[
            {
              id: "Cancel",
              label: "Cancel",
              onClick: doNothing,
            },
            {
              id: "Complete",
              label: "Apply",
              onClick: doNothing,
            },
          ]}
        >
          <Tabs>
            <TabItem label="Property Type" />
            <TabItem label="Building" isSelected />
            <TabItem label="Lot" />
            <TabItem label="Ownership" />
            <TabItem label="Sales" />
            <TabItem label="Value" />
          </Tabs>
          <Divider />
          <Form>
            <FormSection columns="1">
              <DataRange
                id="default"
                label="Year Built"
                min={{
                  label: "Min",
                }}
                max={{
                  label: "Max",
                }}
              />
              <DataRange
                id="default"
                label="Number of Units"
                min={{
                  label: "Min",
                }}
                max={{
                  label: "Max",
                }}
              />
              <DataRange
                id="default"
                label="Building Size (ft2)"
                min={{
                  label: "Min",
                }}
                max={{
                  label: "Max",
                }}
              />
            </FormSection>
          </Form>
        </DialogBox>
      );
    });
  })
  .add("Filter Lot Dialog", () => {
    return React.createElement(() => {
      const [activeSingleTab, setActiveSingleTab] = useState("option1");
      const [legend, setLegend] = useState(false);
      function toggleLegend() {
        if (legend) {
          setLegend(false);
        } else {
          setLegend(true);
        }
      }
      return (
        <DialogBox
          title="Filters"
          buttons={[
            {
              id: "Cancel",
              label: "Cancel",
              onClick: doNothing,
            },
            {
              id: "Complete",
              label: "Apply",
              onClick: doNothing,
            },
          ]}
        >
          <Tabs>
            <TabItem label="Property Type" />
            <TabItem label="Building" />
            <TabItem label="Lot" isSelected />
            <TabItem label="Owners" />
            <TabItem label="Sales" />
            <TabItem label="Value" />
          </Tabs>
          <Divider />
          <Form>
            <FormSection columns="1">
              <DataRange
                id="default"
                label="Lot Size (Acre)"
                min={{
                  label: "Min",
                }}
                max={{
                  label: "Max",
                }}
              />
              <DataRange
                id="default"
                label="Lot Size (ft2)"
                min={{
                  label: "Min",
                }}
                max={{
                  label: "Max",
                }}
              />
              <DataRange
                id="default"
                label="Aggregate Acreage"
                min={{
                  label: "Min",
                }}
                max={{
                  label: "Max",
                }}
              />
              <DataRange
                id="default"
                label="Aggregate Lot Count"
                min={{
                  label: "Min",
                }}
                max={{
                  label: "Max",
                }}
              />
              <DataRange
                id="default"
                label="Aggregated Lot Width Median"
                min={{
                  label: "Min",
                }}
                max={{
                  label: "Max",
                }}
              />
            </FormSection>
            <FormSection columns="1" title="Zoning">
              <TextInput
                label="Zoning (Assessor)"
              />
              <FormSection title="Opportunity Zone">
                <RadioGroup title="Opportunity Zone">
                  <Radio label="Yes" />
                  <Radio label="No" />
                </RadioGroup>
              </FormSection>
            </FormSection>
          </Form>
        </DialogBox>
      );
    });
  })
  .add("Filter Owner Dialog", () => {
    return React.createElement(() => {
      const [activeSingleTab, setActiveSingleTab] = useState("option1");
      const [legend, setLegend] = useState(false);
      function toggleLegend() {
        if (legend) {
          setLegend(false);
        } else {
          setLegend(true);
        }
      }
      return (
        <DialogBox
          title="Filters"
          buttons={[
            {
              id: "Cancel",
              label: "Cancel",
              onClick: doNothing,
            },
            {
              id: "Complete",
              label: "Apply",
              onClick: doNothing,
            },
          ]}
        >
          <Tabs>
            <TabItem label="Property Type" />
            <TabItem label="Building" />
            <TabItem label="Lot" />
            <TabItem label="Owners" isSelected />
            <TabItem label="Sales" />
            <TabItem label="Value" />
          </Tabs>
          <Divider />
          <Form>
            <FormSection columns="1">
              <FormSection title="Owner Details" columns="2">
                <TextInput label="First Owner Name" />
                <TextInput label="Second Owner Name" />
                <TextInput label="Address" />
                <TextInput label="City" />
                <TextInput label="State" />
                <TextInput label="Zip" />
              </FormSection>
              <FormSection title="Ownership Status">
                <CheckboxGroup columns="2">
                  <Checkbox label="Also known as (A/K/A)" />
                  <Checkbox label="Company/Corporation" />
                  <Checkbox label="Community Property" />
                  <Checkbox label="Contract Owner" />
                  <Checkbox label="Doing Business As (DBA)" />
                  <Checkbox label="ET AL (And Others)" />
                  <Checkbox label="Also known as (A/K/A)" />
                  <Checkbox label="Company/Corporation" />
                  <Checkbox label="Community Property" />
                  <Checkbox label="Contract Owner" />
                  <Checkbox label="Doing Business As (DBA)" />
                  <Checkbox label="ET AL (And Others)" />
                </CheckboxGroup>
              </FormSection>
            </FormSection>
          </Form>
        </DialogBox>
      );
    });
  })
  .add("Filter Sales Dialog", () => {
    return React.createElement(() => {
      const [activeSingleTab, setActiveSingleTab] = useState("option1");
      const [legend, setLegend] = useState(false);
      function toggleLegend() {
        if (legend) {
          setLegend(false);
        } else {
          setLegend(true);
        }
      }
      return (
        <DialogBox
          title="Filters"
          buttons={[
            {
              id: "Cancel",
              label: "Cancel",
              onClick: doNothing,
            },
            {
              id: "Complete",
              label: "Apply",
              onClick: doNothing,
            },
          ]}
        >
          <Tabs>
            <TabItem label="Property Type" />
            <TabItem label="Building" />
            <TabItem label="Lot" />
            <TabItem label="Owners" />
            <TabItem label="Sales" isSelected />
            <TabItem label="Value" />
          </Tabs>
          <Divider />
          <Form>
            <FormSection>
              <DataRange
                id="default"
                label="Last Sale Price"
                min={{
                  label: "Min",
                }}
                max={{
                  label: "Max",
                }}
              />
              <TextInput label="Seller Name" />
              <FormSection title="Last Sale Date">
                <RadioGroup>
                  <Radio label="Last 3 months" />
                  <Radio label="Last 6 months" />
                  <Radio label="Last 12 months" />
                  <Radio label="Custom" />
                </RadioGroup>
              </FormSection>
              <FormSection title="Last Sale Deed Type">
                <CheckboxGroup>
                  <Checkbox label="Grand Deed/Deed of Trust" />
                  <Checkbox label="Warranty Deed/Deed of Trust" />
                  <Checkbox label="Land Contract" />
                </CheckboxGroup>
              </FormSection>
            </FormSection>
          </Form>
        </DialogBox>
      );
    });
  })
  .add("Filter Price Dialog", () => {
    return React.createElement(() => {
      const [activeSingleTab, setActiveSingleTab] = useState("option1");
      const [legend, setLegend] = useState(false);
      function toggleLegend() {
        if (legend) {
          setLegend(false);
        } else {
          setLegend(true);
        }
      }
      return (
        <DialogBox
          title="Filters"
          buttons={[
            {
              id: "Cancel",
              label: "Cancel",
              onClick: doNothing,
            },
            {
              id: "Complete",
              label: "Apply",
              onClick: doNothing,
            },
          ]}
        >
          <Tabs>
            <TabItem label="Property Type" />
            <TabItem label="Building" />
            <TabItem label="Lot" />
            <TabItem label="Owners" />
            <TabItem label="Sales" />
            <TabItem label="Price" isSelected />
          </Tabs>
          <Divider />
          <Form>
            <FormSection>
              <DataRange
                id="default"
                label="Assessed Value"
                min={{
                  label: "Min",
                }}
                max={{
                  label: "Max",
                }}
              />
              <DataRange
                id="default"
                label="Improvement Pct."
                min={{
                  label: "Min",
                }}
                max={{
                  label: "Max",
                }}
              />
              <DataRange
                id="default"
                label="Assessed Land Value"
                min={{
                  label: "Min",
                }}
                max={{
                  label: "Max",
                }}
              />
              <DataRange
                id="default"
                label="Assessed Improvement Value"
                min={{
                  label: "Min",
                }}
                max={{
                  label: "Max",
                }}
              />
            </FormSection>
          </Form>
        </DialogBox>
      );
    });
  })
  .add("Filter Location Dialog", () => {
    return React.createElement(() => {
      const [activeSingleTab, setActiveSingleTab] = useState("option1");
      const [legend, setLegend] = useState(false);
      function toggleLegend() {
        if (legend) {
          setLegend(false);
        } else {
          setLegend(true);
        }
      }
      return (
        <DialogBox
          title="Filters"
          buttons={[
            {
              id: "Cancel",
              label: "Cancel",
              onClick: doNothing,
            },
            {
              id: "Complete",
              label: "Apply",
              onClick: doNothing,
            },
          ]}
        >
          <Tabs>
            <TabItem label="Property Type" />
            <TabItem label="Building" />
            <TabItem label="Lot" />
            <TabItem label="Owners" />
            <TabItem label="Sales" />
            <TabItem label="Location" isSelected />
          </Tabs>
          <Divider />
          <Form>
            <FormSection>
              <TextInput label="Address" />
              <TextInput label="City" />
              <TextInput label="State" />
              <TextInput label="Zip" />
              <FormSection title="Boundaries">
                <Bar
                  left={
                    <Text text="Boundary 1" />
                  }
                  right={(
                    <FormSection columns="2">
                      <Icon icon="edit" onClick={() => { }} />
                      <Icon icon="close" onClick={() => { }} />
                    </FormSection>
                  )}
                />
                <Button label="Add a Boundary" icon="plus" isSolid />
              </FormSection>
            </FormSection>
          </Form>
        </DialogBox>
      );
    });
  })
  .add("Boundary", () => {
    return React.createElement(() => {
      const [activeSingleTab, setActiveSingleTab] = useState("option1");
      const [legend, setLegend] = useState(false);
      function toggleLegend() {
        if (legend) {
          setLegend(false);
        } else {
          setLegend(true);
        }
      }
      return (
        <DialogBox
          title="Draw Boundary"
          buttons={[
            {
              id: "Cancel",
              label: "Cancel",
              onClick: doNothing,
            },
            {
              id: "Complete",
              label: "Draw",
              onClick: doNothing,
            },
          ]}
        >
          <Form>
            <FormSection title="Geometry Type">
              <RadioGroup columns="3">
                <Radio label="Polygon" />
                <Radio label="Circle" />
                <Radio label="Line" />
              </RadioGroup>
            </FormSection>
            <FormSection title="Boundary Type">
              <RadioGroup columns="2">
                <Radio label="Inclusion" />
                <Radio label="Exclusion" />
              </RadioGroup>
            </FormSection>
            <TextInput label="Boundary Name" />
          </Form>
        </DialogBox>
      );
    });
  });
