/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import Dialog, { Alert, Prompt, Confirm } from "elements/DialogueBox";
import Title from "base/Typography";
import Bar from "blocks/Bar";
import SelectMenu from "atoms/SelectMenu";
import { Piece } from "layout/Card";
import List, { ListItem } from "blocks/List";
import TextInput from "atoms/TextInput";
import Icon from "atoms/Icon";
import { Section } from "layout/Form";
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
  .add("General/Default", () => {
    return (
      <Confirm
        title="Hey are you sure your okay doing this?"
        message="This is the body of your message. Tells you more about the action you are about to commit."
        accept={{ label: "Create" }}
      />
    );
  })
  .add("General/Alert", () => {
    return (
      <Alert
        title="Something unexpected happened!"
        message="Just letting you know!"
      />
    );
  })
  .add("General/Login", () => {
    return (
      <Dialog
        header={<Bar left={<Logo src={image.src} alt={image.alt} />} />}
        title="Welcome"
        buttons={{ label: "Login" }}
      >
        <Section>
          <TextInput inputLabel="Username" placeholder="Username" />
          <TextInput inputLabel="Password" placeholder="Password" />
          <Bar
            center={
              <Title text="Forget Password?" size="tiny" weight="light" />
            }
          />
        </Section>
      </Dialog>
    );
  })
  .add("General/Save Box", () => {
    return (
      <Prompt
        title="Save As"
        accept={{ label: "Save" }}
        cancel={{ label: "Cancel" }}
      >
        <Section>
          <TextInput inputLabel="Name" placeholder="Type Name" />
          <SelectMenu
            inputLabel="Location"
            options={[
              { value: "1", label: "my folder" },
              { value: "2", label: "our folder" },
              { value: "3", label: "dmp" },
              { value: "4", label: "lightbox" },
            ]}
          />
          <SelectMenu
            inputLabel="File Type"
            options={[
              { value: "jpg", label: ".jpg" },
              { value: "png", label: ".png" },
            ]}
          />{" "}
        </Section>
      </Prompt>
    );
  })
  .add("General/Delete", () => {
    return (
      <Confirm
        title="Are you sure you want to delete this user?"
        message="If you delete this user you will not be able to get back any information or work they have done. Their work will be lost forever."
        buttonColor="alert"
        accept={{ label: "Delete" }}
      />
    );
  })
  .add("General/Success", () => {
    return (
      <Confirm
        title="View your report?"
        message="Your report successfully downloaded. Do you want to check out the deets."
        buttonColor="success"
        accept={{ label: "View " }}
      />
    );
  })
  .add("Role/Edit User List", () => {
    return (
      <Dialog
        title="Edit User List for Role"
        buttons={[{ label: "Edit" }, { label: "Cancel" }]}
      >
        <Section>
          <Title text="Role: Developer" type="info" />
          <SelectMenu
            multiSelect
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
      </Dialog>
    );
  })
  .add("Role/Edit Files", () => {
    return (
      <Dialog
        title="Edit Files Role"
        buttons={[{ label: "Add" }, { label: "Cancel" }]}
      >
        <Section>
          <Title text="Role: Developer" type="info" />
          <SelectMenu
            multiSelect
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
      </Dialog>
    );
  })
  .add("Role/Add Permission", () => {
    return React.createElement(() => {
      const [folders, setFolders] = useState([
        { value: "bde811.groups.Developer", label: "Developer" },
        { value: "bde811.groups.Marketing", label: "Marketing" },
        { value: "bde811.groups.Acquisitions", label: "Acquisitions" },
      ]);

      function createFolder(folderName, setState) {
        const newFolder = { label: folderName, value: `bde811.groups.${folderName}` };
        setFolders([...folders, newFolder]);
        setState({ selected: newFolder });
      }

      return (
        <Dialog
          title="Add Permission"
          buttons={[{ label: "Add" }, { label: "Cancel" }]}
        >
          <Section>
            <Title text="Role: Developer" type="info" />
            <SelectMenu
              multiSelect
              inputLabel="+ Folder"
              placeholder="Select Folder to grant Permission to"
              options={folders}
              onCreateOption={createFolder}
            />
          </Section>
        </Dialog>
      );
    });
  })
  .add("User/Add User", () => {
    return (
      <Dialog
        title="+ Add a New User"
        buttons={[{ label: "Add" }, { label: "Cancel" }]}
      >
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
            multiSelect
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
      </Dialog>
    );
  })
  .add("User/Edit User", () => {
    return (
      <Dialog
        title="Edit User"
        buttons={[{ label: "Save" }, { label: "Cancel" }]}
      >
        <Section>
          <TextInput inputLabel="User Name" placeholder="Elizabeth Gallagher" />
          <TextInput
            inputLabel="User Account"
            placeholder="egallagher@digmap.com "
          />
          <SelectMenu
            multiSelect
            placeholder="Admin"
            inputLabel="Roles"
            options={[
              { value: "Marketing", label: "Marketing" },
              { value: "Acquisitions", label: "Acquisitions" },
              { value: "Developer", label: "Builder / Developer" },
              { value: "Admin", label: "Admin" },
            ]}
          />
          <Title size="tiny" weight="light">Delete User?</Title>
        </Section>
      </Dialog>
    );
  });
