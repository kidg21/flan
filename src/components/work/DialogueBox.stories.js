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
  .add("Default", () => (
    <DialogueBox
      header={
        <Bar left={<Title title="Are you sure you want to do that?" />} />
      }
      content={
        <Bar
          left={
            <Body body="This is the body of your message. So I'll ask again, are you sure you want to delete this layer?" />
          }
        />
      }
      footer={
        <Bar
          right={
            <Grid columns="2">
              <Button buttonLabel="Delete" />
              <Button buttonLabel="Cancel" />
            </Grid>
          }
        />
      }
    />
  ))
  .add("Login", () => (
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
      footer={
        <Bar
          left={
            <Section>
              <Button buttonLabel="Login" />
              <Bar
                center={
                  <Grid columns="1">
                    <Title title="Sign in using" size="tiny" />
                    <Grid columns="3">
                      <Icon icon={["fab", "google"]} />
                      <Icon icon={["fab", "linkedin"]} />
                      <Icon icon={["fab", "facebook"]} />
                    </Grid>
                  </Grid>
                }
              />
            </Section>
          }
        />
      }
    />
  ))
  .add("Save Box", () => (
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
      footer={
        <Bar
          right={
            <Grid columns="2">
              <Button buttonLabel="Done" type="solid" />
              <Button buttonLabel="Cancel" />
            </Grid>
          }
        />
      }
    />
  ))
  .add("Adding a New User Group", () => (
    <DialogueBox
      header={<Bar left={<Title title="Create New User Group" />} />}
      content={
        <Bar
          left={
            <Section>
              <TextInput
                inputLabel="Group Name"
                placeholder="Type a descriptive name for your new group."
              />
              <SelectMenu
                multiSelect="true"
                inputLabel="+ Add Group Users"
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
      footer={
        <Bar
          right={
            <Grid columns="2">
              <Button buttonLabel="Create" type="solid" />
              <Button buttonLabel="Cancel" />
            </Grid>
          }
        />
      }
    />
  ))
  .add("Editing a Role", () => (
    <DialogueBox
      header={<Bar left={<Title title="Edit existing User Role" />} />}
      content={
        <Bar
          left={
            <Section>
              <SelectMenu
                placeholder="Select one or many roles for this user."
                inputLabel="Assign Roles"
                options={[
                  { value: "Marketing", label: "Marketing" },
                  { value: "Acquisitions", label: "Acquisitions" },
                  { value: "Developer", label: "Builder / Developer" },
                  { value: "Admin", label: "Admin" },
                ]}
              />
              <TextInput
                inputLabel="Group Name"
                placeholder="Type a descriptive name for your new group."
              />
              <SelectMenu
                multiSelect="true"
                inputLabel="+ Add Group Users"
                options={[
                  { value: "1", label: "Adam" },
                  { value: "2", label: "Oliver" },
                  { value: "3", label: "Matt" },
                  { value: "4", label: "Joe" },
                ]}
              />
              <Container>
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
                </List>
              </Container>
            </Section>
          }
        />
      }
      footer={
        <Bar
          right={
            <Grid columns="2">
              <Button buttonLabel="Save" type="solid" />
              <Button buttonLabel="Cancel" />
            </Grid>
          }
        />
      }
    />
  ))
  .add("Add a new User", () => (
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
      footer={
        <Bar
          right={
            <Grid columns="2">
              <Button buttonLabel="Create" type="solid" />
              <Button buttonLabel="Cancel" />
            </Grid>
          }
        />
      }
    />
  ));
