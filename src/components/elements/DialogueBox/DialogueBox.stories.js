import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import styled, { css } from "styled-components";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import DialogueBox from "elements/DialogueBox";
import Title, { Body } from "base/Typography";
import Bar from "blocks/Bar";
import SelectMenu from "atoms/SelectMenu";
import Card, { Piece } from "layout/Card";
import Grid from "layout/Grid";
import List, { ListItem } from "blocks/List";
import Button from "atoms/Button";
import TextInput from "atoms/TextInput";
import Command from "atoms/Command";
import Icon from "atoms/Icon";
import Form, { Section, SectionName } from "layout/Form";
import DMPlogo from "images/DMPlogo.jpg";
import Container from "atoms/Container";

const image = {
  src: DMPlogo,
  alt: "DMP",
};

const Logo = styled.img`
  width: 12em;
  height: 2.5em;
`;

storiesOf("Elements|Dialogue Box", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text:
        "Dialogue Boxes are used to convey a message between the server/computer and the user. A dialogue box either has one absolute action (button) or two button options; typically an affirmative and dissenting option. If two buttons are selected then they are located on the bottom left corner as to be readily accessbile to the user. The primary button is always solid, the second is outlined. Both buttons must be the same color family. If one button is selected the button is center in the middle of the dialogue box. ",
    },
  })
  .add(
    "Documentation",
    withInfo()(() => {
      return (<DialogueBox
      title="Dialogue Box Title"
      message="Dialogue Box Message"
      action="two"
      primaryLabel="Affirm"
      secondaryLabel="Negative"
      />);
    }),
  );

  storiesOf("Elements|Dialogue Box/General", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Default", () => (
    <DialogueBox
      title="Hey are you sure your okay doing this?"
      message="This is the body of your message. Tells you more about the action you are about to commit."
      action="two"
      primaryLabel="Create"
      secondaryLabel="Cancel"
    />
  ))
  .add("Login", () => (
    <DialogueBox
      header={<Bar left={<Logo src={image.src} alt={image.alt} />} />}
      title="Welcome"
      content={
        <Section>
          <TextInput inputLabel="Username" placeholder="Username" />
          <TextInput inputLabel="Password" placeholder="Password" />
          <Bar
            center={
              <Title text="Forget Password?" size="tiny" weight="light" />
            }
          />
        </Section>
      }
      action="one"
      primaryLabel="Login"
    />
  ))
  .add("Save As", () => (
    <DialogueBox
      title="Save As"
      content={
        <Section>
          <TextInput label="Name" placeholder="Type Name" />
          <SelectMenu
            inputLabel="Location"
            options={[
              { value: "1", label: "my folder" },
              { value: "2", label: "our folder" },
              { value: "3", label: "dmp" },
              { value: "4", label: "lightbox" },
            ]}
          />
          <Command label="Add new Location" icon="plus"/>
          <SelectMenu
            inputLabel="File Type"
            options={[
              { value: "jpg", label: ".jpg" },
              { value: "png", label: ".png" },
            ]}
          />{" "}
        </Section>
      }
      action="two"
      primaryLabel="Save"
      secondaryLabel="Cancel"
    />
  ))
  .add("Delete", () => (
    <DialogueBox
      title="Are you sure you want to delete this user?"
      message="If you delete this user you will not be able to get back any information or work they have done. Their work will be lost forever."
      action="two"
      primaryLabel="Delete"
      secondaryLabel="Cancel"
      buttonColor="alert"
    />
  ))
  .add("Success", () => (
    <DialogueBox
      title="View your report?"
      message="Your report successfully downloaded. Do you want to check out the deets."
      action="two"
      primaryLabel="View"
      secondaryLabel="Cancel"
      buttonColor="success"
    />
  ));


  storiesOf("Elements|Dialogue Box/User Roles", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Edit User List", () => (
    <DialogueBox
      title="Edit User List for Role"
      content={
        <Section>
          <Title text="Role: Developer" type="info" />
          <SelectMenu
            multiSelect="true"
            inputLabel="+ Add Users"
            options={[
              { value: "1", label: "Adam" },
              { value: "2", label: "Oliver" },
              { value: "3", label: "Matt" },
              { value: "4", label: "Joe" },
            ]}
          />
          <Piece>
            <Container height="12rem">
              <List>
                <ListItem
                  label="User 3"
                  action={<Icon icon={["far", "cog"]} />}
                />
                <ListItem
                  label="User 2"
                  action={<Icon icon={["far", "cog"]} />}
                />
                <ListItem
                  label="User 1"
                  action={<Icon icon={["far", "cog"]} />}
                />
                <ListItem
                  label="User 3"
                  action={<Icon icon={["far", "cog"]} />}
                />
              </List>
            </Container>
          </Piece>
        </Section>
      }
      action="two"
      primaryLabel="Edit"
      secondaryLabel="Cancel"
    />
  ))
  .add("Edit Files", () => (
    <DialogueBox
      title="Edit Files Role"
      content={
        <Section>
          <Title text="Role: Developer" type="info" />
          <SelectMenu
            multiSelect="true"
            inputLabel="+ Files"
            placeholder="Add Files for Role to access"
            options={[
              { value: "1", label: "Folder 1" },
              { value: "2", label: "Folder 2" },
              { value: "3", label: "Folder 3" },
              { value: "4", label: "File 24" },
            ]}
          />
          <Container>
            <List>
              <ListItem label="File 3" action={<Icon icon="coffee" />} />
              <ListItem label="file 2" action={<Icon icon="coffee" />} />
              <ListItem label="file 1" action={<Icon icon="coffee" />} />
            </List>
          </Container>
        </Section>
      }
      action="two"
      primaryLabel="Add"
      secondaryLabel="Cancel"
    />
  ))
  .add("Add User", () => (
    <DialogueBox
      title="+ Add a New User"
      content={
        <Section>
          <TextInput
            inputLabel="User Name"
            placeholder="Type the name for your new user."
          />
          <TextInput
            inputLabel="User Account"
            placeholder="Type in User email or account name "
          />
          <SelectMenu
            multiSelect="true"
            placeholder="Select one or many roles for this user."
            inputLabel="Assign Roles"
            options={[
              { value: "Marketing", label: "Marketing" },
              { value: "Acquisitions", label: "Acquisitions" },
              { value: "Developer", label: "Builder / Developer" },
              { value: "Admin", label: "Admin" },
            ]}
          />
        </Section>
      }
      action="two"
      primaryLabel="Add"
      secondaryLabel="Cancel"
    />
  ))
  .add("Edit User", () => (
    <DialogueBox
      title="Edit User"
      content={
        <Section>
          <TextInput inputLabel="User Name" placeholder="Elizabeth Gallagher" />
          <TextInput
            inputLabel="User Account"
            placeholder="egallagher@digmap.com "
          />
          <SelectMenu
            multiSelect="true"
            placeholder="Admin"
            inputLabel="Roles"
            options={[
              { value: "Marketing", label: "Marketing" },
              { value: "Acquisitions", label: "Acquisitions" },
              { value: "Developer", label: "Builder / Developer" },
              { value: "Admin", label: "Admin" },
            ]}
          />
          <Title title="Delete User?" size="tiny" weight="light" />
        </Section>
      }
      action="two"
      primaryLabel="Save"
      secondaryLabel="Cancel"
    />
  ));
