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

storiesOf("Work|Dialogue Box", module)
  .addDecorator(Padding)
  .addDecorator(withInfo)
  .add("General/Default", () => (
    <DialogueBox
      header={
        <Bar left={<Title title="Hey are you sure your okay doing this?" />} />
      }
      content={
        <Bar
          left={
            <Body body="This is the body of your message. Tells you more about the action you are about to commit." />
          }
        />
      }
      action="two"
      buttonLabel="Create"
      buttonLabel2="Cancel"
    />
  ))
  .add("General/Login", () => (
    <DialogueBox
      header={
        <Bar
          left={
            <Section>
              {" "}
              <Logo src={image.src} alt={image.alt} />
              <Title title="Welcome" />
            </Section>
          }
        />
      }
      content={
        <Bar
          left={
            <Section>
              <TextInput inputLabel="Username" placeholder="Username" />
              <TextInput inputLabel="Password" placeholder="Password" />
              <Bar
                center={
                  <Title title="Forget Password?" size="tiny" weight="light" />
                }
              />
            </Section>
          }
        />
      }
      action="one"
      buttonLabel="Login"
    />
  ))
  .add("General/Save Box", () => (
    <DialogueBox
      header={<Bar left={<Title title="Save As" />} />}
      content={
        <Bar
          left={
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
          }
        />
      }
      action="two"
      buttonLabel="Save"
      buttonLabel2="Cancel"
    />
  ))
  .add("General/Delete", () => (
    <DialogueBox
      header={
        <Bar
          left={<Title title="Are you sure you want to delete this user?" />}
        />
      }
      content={
        <Bar
          left={
            <Body body="If you delete this user you will not be able to get back any information or work they have done. Their work will be lost forever." />
          }
        />
      }
      action="two"
      buttonLabel="Delete"
      buttonLabel2="Cancel"
      buttonColor="alert"
    />
  ))
  .add("General/Success", () => (
    <DialogueBox
      header={<Bar left={<Title title="View your report?" />} />}
      content={
        <Bar
          left={
            <Body body="Your report successfully downloaded. Do you want to check out the deets." />
          }
        />
      }
      action="two"
      buttonLabel="View"
      buttonLabel2="Cancel"
      buttonColor="success"
    />
  ))
  .add("Role/Edit User List", () => (
    <DialogueBox
      header={<Bar left={<Title title="Edit User List for Role" />} />}
      content={
        <Bar
          left={
            <Section>
              <Title title="Role: Developer" type="info" />
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
                <Container setHeight="12rem">
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
        />
      }
      action="two"
      buttonLabel="Edit"
      buttonLabel2="Cancel"
    />
  ))
  .add("Role/Edit Files", () => (
    <DialogueBox
      header={<Bar left={<Title title="Edit Files Role" />} />}
      content={
        <Bar
          left={
            <Section>
              <Title title="Role: Developer" type="info" />
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
        />
      }
      action="two"
      buttonLabel="Add"
      buttonLabel2="Cancel"
    />
  ))
  .add("User/Add User", () => (
    <DialogueBox
      header={<Bar left={<Title title="+ Add a New User" />} />}
      content={
        <Bar
          left={
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
        />
      }
      action="two"
      buttonLabel="Add"
      buttonLabel2="Cancel"
    />
  ))
  .add("User/Edit User", () => (
    <DialogueBox
      header={<Bar left={<Title title="Edit User" />} />}
      content={
        <Bar
          left={
            <Section>
              <TextInput
                inputLabel="User Name"
                placeholder="Elizabeth Gallagher"
              />
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
        />
      }
      action="two"
      buttonLabel="Save"
      buttonLabel2="Cancel"
    />
  ));
