/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import styled from "styled-components";

import { Padding } from "helpers/Display";
import DialogBox from "elements/DialogBox";
import Title from "base/Typography";
import Command from "atoms/Command";
import Bar from "blocks/Bar";
import SelectMenu from "atoms/SelectMenu";
import List, { ListItem } from "blocks/List";
import TextInput from "atoms/TextInput";
import { Section } from "layout/Form";
import DMPlogo from "images/DMPlogo.jpg";
import Container from "atoms/Container";
import Switch from "atoms/Switch";
import Divider from "atoms/Divider";

const permissions = [
  { value: "Read", label: "Read" },
  { value: "Write", label: "Write" },
  { value: ["Read", "Write"], label: "Read / Write" }
];

const image = {
  src: DMPlogo,
  alt: "DMP"
};

const Logo = styled.img`
  width: 12em;
  height: 2.5em;
`;

storiesOf("Elements|Dialog Box", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text:
        "Dialogue Boxes are used to convey a message between the server/computer and the user. A dialogue box either has one absolute action (button) or two button options; typically an affirmative and dissenting option. If two buttons are selected then they are located on the bottom left corner as to be readily accessbile to the user. The primary button is always solid, the second is outlined. Both buttons must be the same color family. If one button is selected the button is center in the middle of the dialogue box. "
    }
  })
  .add(
    "Documentation",
    withInfo()(() => {
      return (
        <DialogBox
          title="Dialogue Box Title"
          message="Dialogue Box Message"
          buttons={[{ label: "Affirm" }, { label: "Negative" }]}
        />
      );
    })
  );

storiesOf("Templates|Dialog Box/General", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Default", () => {
    return (
      <DialogBox
        title="Hey are you sure your okay doing this?"
        message="This is the body of your message. Tells you more about the action you are about to commit."
        buttons={[{ label: "Create" }, { label: "Cancel" }]}
      />
    );
  })
  .add("Login", () => {
    return (
      <DialogBox
        header={<Bar left={<Logo src={image.src} alt={image.alt} />} />}
        title="Welcome"
        buttons={[{ label: "Login" }]}
      >
        <Section>
          <TextInput label="Username" placeholder="Username" />
          <TextInput label="Password" placeholder="Password" />
          <Bar
            center={
              <Title text="Forget Password?" size="tiny" weight="light" />
            }
          />
        </Section>
      </DialogBox>
    );
  })
  .add("Delete", () => {
    return (
      <DialogBox
        title="Are you sure you want to delete this user?"
        message="If you delete this user you will not be able to get back any information or work they have done. Their work will be lost forever."
        buttons={[{ label: "Delete" }, { label: "Cancel" }]}
        buttonColor="alert"
      />
    );
  })
  .add("Success", () => {
    return (
      <DialogBox
        title="View your report?"
        message="Your report successfully downloaded. Do you want to check out the deets."
        buttons={[{ label: "View" }, { label: "Cancel" }]}
        buttonColor="success"
      />
    );
  });

storiesOf("Templates|Dialog Box/Files", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Save As", () => {
    return (
      <DialogBox
        title="Save As"
        buttons={[{ label: "Save" }, { label: "Cancel" }]}
      >
        <Section>
          <TextInput label="Name" placeholder="i.e. My new Map Composition" />
          <SelectMenu
            label="Location"
            options={[
              { value: "1", label: "my folder" },
              { value: "2", label: "our folder" },
              { value: "3", label: "dmp" },
              { value: "4", label: "lightbox" }
            ]}
          />
          <Command label="+ Add New Location" />
        </Section>
      </DialogBox>
    );
  })
  .add("Open", () => {
    return (
      <DialogBox
        title="Open File"
        buttons={[{ label: "Open" }, { label: "Cancel" }]}
      >
        <Section>
          <Container height="12rem">
            <List>
              <ListItem label="Recent Item" />
              <ListItem label="Recent Item" />
              <ListItem label="Recent Item" />
              <ListItem label="Recent Item" />
              <ListItem label="Recent Item" />
              <ListItem label="Recent Item" />
            </List>
          </Container>
          <SelectMenu
            label="Location"
            options={[
              { value: "1", label: "my folder" },
              { value: "2", label: "our folder" },
              { value: "3", label: "dmp" },
              { value: "4", label: "lightbox" }
            ]}
          />
        </Section>
      </DialogBox>
    );
  })
  .add("Add New Folder", () => {
    return (
      <DialogBox
        title="+ Add New Folder"
        buttons={[{ label: "Add" }, { label: "Cancel" }]}
      >
        <Section>
          <TextInput label="Name" placeholder="i.e. Potential Sites" />
          <SelectMenu
            label="New Folder Location"
            options={[
              { value: "1", label: "my folder" },
              { value: "2", label: "our folder" },
              { value: "3", label: "dmp" },
              { value: "4", label: "lightbox" }
            ]}
          />
        </Section>
      </DialogBox>
    );
  });

storiesOf("Templates|Dialog Box/User Roles", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Edit User List", () => {
    return (
      <DialogBox
        title="Edit User List for Role"
        buttons={[{ label: "Edit" }, { label: "Cancel" }]}
      >
        <Section>
          <Title text="Role: Developer" type="info" />
          <SelectMenu
            multiSelect="true"
            label="+ Add Users"
            options={[
              { value: "1", label: "Adam" },
              { value: "2", label: "Oliver" },
              { value: "3", label: "Matt" },
              { value: "4", label: "Joe" }
            ]}
          />
          <Container height="12rem">
            <List>
              <ListItem label="BDE811.Public">
                <SelectMenu width="40%" options={permissions} />
              </ListItem>

              <ListItem label="BDE811.Marketing">
                <SelectMenu width="40%" options={permissions} />
              </ListItem>
              <ListItem label="BDE811.Acquisitions">
                <SelectMenu width="40%" options={permissions} />
              </ListItem>
              <ListItem label="BDE811.Developer">
                <SelectMenu width="40%" options={permissions} />
              </ListItem>
            </List>
          </Container>
        </Section>
      </DialogBox>
    );
  })
  .add("Edit Files", () => {
    return (
      <DialogBox
        title="Edit Files Role"
        buttons={[{ label: "Edit" }, { label: "Cancel" }]}
      >
        <Section>
          <TextInput label="Role" placeholder="Builder/Developer" />
          <SelectMenu
            multiSelect="true"
            label="+ Add Folder"
            placeholder="Add Folder for Role to access"
            options={[
              { value: "1", label: "Folder 1" },
              { value: "2", label: "Folder 2" },
              { value: "3", label: "Folder 3" },
              { value: "4", label: "File 24" }
            ]}
          />
          <Divider />
          <Container>
            <List>
              <ListItem label="BDE811.Public">
                <SelectMenu width="40%" options={permissions} />
              </ListItem>

              <ListItem label="BDE811.Marketing">
                <SelectMenu width="40%" options={permissions} />
              </ListItem>
              <ListItem label="BDE811.Acquisitions">
                <SelectMenu width="40%" options={permissions} />
              </ListItem>
              <ListItem label="BDE811.Developer">
                <SelectMenu width="40%" options={permissions} />
              </ListItem>
            </List>
          </Container>
        </Section>
      </DialogBox>
    );
  })
  .add("Add Role", () => {
    return (
      <DialogBox
        title="+Add Role"
        buttons={[{ label: "add" }, { label: "Cancel" }]}
      >
        <Section>
          <TextInput
            label="Role Name"
            placeholder="Type the name for your new role."
          />
        </Section>
      </DialogBox>
    );
  })
  .add("Add User", () => {
    return (
      <DialogBox
        title="+ Add a New User"
        buttons={[{ label: "Add" }, { label: "Cancel" }]}
      >
        <Section>
          <TextInput
            label="User Name"
            placeholder="Type the name for your new user."
          />
          <TextInput
            label="User Account"
            placeholder="Type in User email or account name "
          />
          <SelectMenu
            multiSelect="true"
            placeholder="Select one or many roles for this user."
            label="Assign Roles"
            options={[
              { value: "Marketing", label: "Marketing" },
              { value: "Acquisitions", label: "Acquisitions" },
              { value: "Developer", label: "Builder / Developer" },
              { value: "Admin", label: "Admin" }
            ]}
          />
        </Section>
      </DialogBox>
    );
  })
  .add("Edit User", () => {
    return (
      <DialogBox
        title="Edit User"
        buttons={[{ label: "Save" }, { label: "Cancel" }]}
      >
        <Section>
          <TextInput label="User Name" placeholder="Elizabeth Gallagher" />
          <TextInput
            label="User Account"
            placeholder="egallagher@digmap.com "
          />
          <SelectMenu
            multiSelect="true"
            placeholder="Admin"
            label="Roles"
            options={[
              { value: "Marketing", label: "Marketing" },
              { value: "Acquisitions", label: "Acquisitions" },
              { value: "Developer", label: "Builder / Developer" },
              { value: "Admin", label: "Admin" }
            ]}
          />
          <Switch label="Enabled" />
          <Title text="Delete User?" size="tiny" weight="light" />
        </Section>
      </DialogBox>
    );
  });
