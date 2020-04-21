/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import Panel from "layout/Panel";
import List, { ListItem } from "blocks/List";
import Icon from "atoms/Icon";
import Button from "atoms/Button";
import Image from "atoms/Image";
import IconBlock from "blocks/IconBlock";
import Text, { Title, Link } from "base/Typography";
import Avatar from "atoms/Avatar";
import Command from "atoms/Command";
import Tabs, { TabItem } from "blocks/Tabs";
import Card, {CardGrid} from "elements/Card";
import NavigationPanelHeader from "elements/PanelHeaders/NavigationPanelHeader";
import Bar from "layout/Bar";
import Legend from "blocks/Legend";
import Grid from "layout/Grid";
import Form, {FormSection} from "layout/Form";
import TextInput from "atoms/TextInput";
import Map from "layout/Map";
import Menu from "blocks/Menu";
import MainPanelHeader from "elements/PanelHeaders/MainPanelHeader";
import Layout from "layout/Layout";
import Page, { PageSection } from "layout/Page";



storiesOf("Templates|Login", module)
  .add(
    "Login",
    () => {
      return React.createElement(() => {

        return (
            <Page
            columns={2}>
                <Grid columns={1}>
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
      }}/>
                <Form title="Login">
                    <FormSection>
             <TextInput
               label="Email"
               placeholder="youremail@company.com"
             />
            <TextInput
               label="Password"
             />
             </FormSection>
             <FormSection>
             <Button label="Login"/>
             <Bar center={
                 <Link weight="regular" text="Forget Password?"/>}/>
             <Bar center={
                 <Button isSolid label="New User? Go to Register"/>}/>
             </FormSection>
                </Form>
                </Grid>
                <Panel>
                </Panel>

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
            <Page
            columns={2}>
                <Grid columns={1}>
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
      }}/>
                <Form title="Registration">
                    <FormSection>
             <TextInput
               label="Email"
               placeholder="youremail@company.com"
             />
            <TextInput
               label="Password"
             />
            <TextInput
               label="Confirm Password"
             />
             </FormSection>
             <FormSection>
             <Button label="Register"/>
             </FormSection>
                </Form>
                </Grid>
                <Panel>
<span>two</span>
                </Panel>

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
            <Page
            columns={2}>
                <Grid columns={1}>
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
      }}/>
                <Form title="Reset Password">
                    <FormSection>
             <TextInput
               label="Email"
               placeholder="youremail@company.com"
             />
             </FormSection>
             <FormSection>
             <Button label="Send"/>
             <Bar center={
                 <Button isSolid label="New User? Go to Register"/>}/>
             </FormSection>
                </Form>
                </Grid>
                <Panel>
<span>two</span>
                </Panel>

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
            <Page
            columns={2}>
                <Grid columns={1}>
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
      }}/>
                <Form title="Email Sent">
                <FormSection>
                 <Text text="If you don't see an email in the next few minutes please select the link to send again."/>
                 <Link text="Send Again"/>
                 </FormSection>

                </Form>
                </Grid>
                <Panel>
<span>two</span>
                </Panel>

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
            <Page
            columns={2}>
                <Grid columns={1}>
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
      }}/>
                <Form title="Create New Password">
                <FormSection>
            <TextInput
               label="Password"
             />
            <TextInput
               label="Confirm Password"
             />
             </FormSection>
             <FormSection>
      
                 <Button label="Confirm"/>
             </FormSection>
                </Form>
                </Grid>
                <Panel>
<span>two</span>
                </Panel>

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
            <Page
            columns={2}>
                <Grid columns={1}>
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
      }}/>
                <Form title="Confirmed New Password">
                <FormSection>
                 <Text text="You have successfully changed your password. Return to Login to re-enter your new credentials."/>
                 </FormSection>
             <FormSection>
                 <Button label="Go to Login"/>
             </FormSection>
                </Form>
                </Grid>
                <Panel>
<span>two</span>
                </Panel>

            </Page>
                     
        );
      });
    },
  );