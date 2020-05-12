/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Button from "atoms/Button";
import Image from "atoms/Image";
import Text, { Link } from "base/Typography";

import Bar from "layout/Bar";
import Form, { FormSection } from "layout/Form";
import TextInput from "atoms/TextInput";
import Page from "layout/Page";


storiesOf("Templates|Login", module)
  .add(
    "Login",
    () => {
      return React.createElement(() => {
        return (
          <Page>
            <Bar
              contentAlign="center"
              padding="2x"
              left={{
        align: "left",
        content: (
          <Image
            src="https://www.lightboxre.com/assets/2019/09/LightBox.Logo_-300x138.png"
            width="10rem"
          />
        ),
        width: "20%",
      }}
            />
            <Form title="Login">
              <FormSection>
                <TextInput
                  id="login-email"
                  label="Email"
                  placeholder="youremail@company.com"
                />
                <TextInput
                  id="login-password"
                  label="Password"
                />
              </FormSection>
              <FormSection>
                <Button label="Login" />
                <Bar center={
                  <Link weight="regular" text="Forget Password?" />}
                />
                <Bar center={
                  <Button isSolid label="New User? Go to Register" />}
                />
              </FormSection>
            </Form>
          </Page>

        );
      });
    },
  )
  .add(
    "Registration",
    () => {
      return React.createElement(() => {
        return (
          <Page>
            <Bar
              contentAlign="center"
              padding="2x"
              left={{
        align: "left",
        content: (
          <Image
            src="https://www.lightboxre.com/assets/2019/09/LightBox.Logo_-300x138.png"
            width="10rem"
          />
        ),
        width: "20%",
      }}
            />
            <Form title="Registration">
              <FormSection>
                <TextInput
                  id="registration-email"
                  label="Email"
                  placeholder="youremail@company.com"
                />
                <TextInput
                  id="registration-password"
                  label="Password"
                />
                <TextInput
                  id="registration-confirm-password"
                  label="Confirm Password"
                />
              </FormSection>
              <FormSection>
                <Button label="Register" />
              </FormSection>
            </Form>
          </Page>

        );
      });
    },
  );

storiesOf("Templates|Login/Password", module)
  .add(
    "Reset",
    () => {
      return React.createElement(() => {
        return (
          <Page>
            <Bar
              contentAlign="center"
              padding="2x"
              left={{
        align: "left",
        content: (
          <Image
            src="https://www.lightboxre.com/assets/2019/09/LightBox.Logo_-300x138.png"
            width="10rem"
          />
        ),
        width: "20%",
      }}
            />
            <Form title="Reset Password">
              <FormSection>
                <TextInput
                  id="reset-email"
                  label="Email"
                  placeholder="youremail@company.com"
                />
              </FormSection>
              <FormSection>
                <Button label="Send" />
                <Bar center={
                  <Button isSolid label="New User? Go to Register" />}
                />
              </FormSection>
            </Form>
          </Page>

        );
      });
    },
  )
  .add(
    "Email Sent",
    () => {
      return React.createElement(() => {
        return (
          <Page>
            <Bar
              contentAlign="center"
              padding="2x"
              left={{
        align: "left",
        content: (
          <Image
            src="https://www.lightboxre.com/assets/2019/09/LightBox.Logo_-300x138.png"
            width="10rem"
          />
        ),
        width: "20%",
      }}
            />
            <Form title="Email Sent">
              <FormSection>
                <Text text="If you don't see an email in the next few minutes please select the link to send again." />
                <Link text="Send Again" />
              </FormSection>

            </Form>
          </Page>

        );
      });
    },
  )
  .add(
    "Create New Password",
    () => {
      return React.createElement(() => {
        return (
          <Page>
            <Bar
              contentAlign="center"
              padding="2x"
              left={{
        align: "left",
        content: (
          <Image
            src="https://www.lightboxre.com/assets/2019/09/LightBox.Logo_-300x138.png"
            width="10rem"
          />
        ),
        width: "20%",
      }}
            />
            <Form title="Create New Password">
              <FormSection>
                <TextInput
                  id="new-email"
                  label="Confirm Email"
                />
                <TextInput
                  id="new-password"
                  label="Password"
                />
                <TextInput
                  id="new-confirm"
                  label="Confirm Password"
                />
              </FormSection>
              <FormSection>

                <Button label="Confirm" />
              </FormSection>
            </Form>
          </Page>

        );
      });
    },
  )
  .add(
    "Confirmed New Password",
    () => {
      return React.createElement(() => {
        return (
          <Page>
            <Bar
              contentAlign="center"
              padding="2x"
              left={{
        align: "left",
        content: (
          <Image
            src="https://www.lightboxre.com/assets/2019/09/LightBox.Logo_-300x138.png"
            width="10rem"
          />
        ),
        width: "20%",
      }}
            />
            <Form title="Confirmed New Password">
              <FormSection>
                <Text text="You have successfully changed your password. Return to Login to re-enter your new credentials." />
              </FormSection>
              <FormSection>
                <Button label="Go to Login" />
              </FormSection>
            </Form>
          </Page>

        );
      });
    },
  );
