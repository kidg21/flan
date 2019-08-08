import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import styled, { css } from "styled-components";
import { withInfo } from "@storybook/addon-info";
import { Padding } from "helpers/Display";
import DialogueBox from "elements/DialogueBox";
import Title, { Body } from "base/Typography";
import Bar from "blocks/Bar";
import SelectMenu from "atoms/SelectMenu";
import Grid from "layout/Grid";
import Button from "atoms/Button";
import TextInput from "atoms/TextInput";
import Icon from "atoms/Icon";
import Form, { Section, SectionName } from "layout/Form";
import DMPlogo from "images/DMPlogo.jpg";

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
  ));
