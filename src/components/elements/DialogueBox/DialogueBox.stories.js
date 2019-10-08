/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import DialogueBox from "elements/DialogueBox";
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
        buttons={[{ label: "Affirm" }, { label: "Negative" }]}
      />);
    }),
  );

storiesOf("Elements|Dialogue Box/General", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Default", () => {
    return (
      <DialogueBox
        title="Hey are you sure your okay doing this?"
        message="This is the body of your message. Tells you more about the action you are about to commit."
        buttons={[{ label: "Create" }, { label: "Cancel" }]}
      />
    );
  })
  .add("Login", () => {
    return (
      <DialogueBox
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
      </DialogueBox>
    );
  })
  .add("Save As", () => {
    return (
      <DialogueBox
        title="Save As"
        buttons={[{ label: "Save" }, { label: "Cancel" }]}
      >
        <Section>
          <TextInput label="Name" placeholder="Type Name" />
          <SelectMenu
            label="Location"
            options={[
              { value: "1", label: "my folder" },
              { value: "2", label: "our folder" },
              { value: "3", label: "dmp" },
              { value: "4", label: "lightbox" },
            ]}
          />
          <SelectMenu
            label="File Type"
            options={[
              { value: "jpg", label: ".jpg" },
              { value: "png", label: ".png" },
            ]}
          />
        </Section>
      </DialogueBox>
    );
  })
  .add("Delete", () => {
    return (
      <DialogueBox
        title="Are you sure you want to delete this user?"
        message="If you delete this user you will not be able to get back any information or work they have done. Their work will be lost forever."
        buttons={[{ label: "Delete" }, { label: "Cancel" }]}
        buttonColor="alert"
      />
    );
  })
  .add("Success", () => {
    return (
      <DialogueBox
        title="View your report?"
        message="Your report successfully downloaded. Do you want to check out the deets."
        buttons={[{ label: "View" }, { label: "Cancel" }]}
        buttonColor="success"
      />
    );
  });

storiesOf("Elements|Dialogue Box/User Roles", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("Edit User List", () => {
    return (
      <DialogueBox
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
      </DialogueBox>
    );
  })
  .add("Edit Files", () => {
    return (
      <DialogueBox
        title="Edit Files Role"
        buttons={[{ label: "Add" }, { label: "Cancel" }]}
      >
        <Section>
          <Title text="Role: Developer" type="info" />
          <SelectMenu
            multiSelect="true"
            label="+ Files"
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
      </DialogueBox>
    );
  })
  .add("Add User", () => {
    return (
      <DialogueBox
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
              { value: "Admin", label: "Admin" },
            ]}
          />
        </Section>
      </DialogueBox>
    );
  })
  .add("Edit User", () => {
    return (
      <DialogueBox
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
              { value: "Admin", label: "Admin" },
            ]}
          />
          <Title text="Delete User?" size="tiny" weight="light" />
        </Section>
      </DialogueBox>
    );
  });
