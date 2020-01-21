/* eslint-disable linebreak-style */
/* eslint-disable import/first */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { useContext, useState } from "react";
import AppLayout from "./AppLayout";
// import PanelHeader from "elements/PanelHeader";
// import CardBar from "elements/CardBar";
import Accordion from "blocks/Accordion";
import Table from "blocks/Table";
import Panel from "layout/Panel";
import Button from "atoms/Button";
import { I18nContext } from "../../../locales/index";
import LanguageSelect from "../../base/LanguageSelect";

function TrialApp() {
  const { translate } = useContext(I18nContext);
  const [visibility, setVisibility] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const [visibility3, setVisibility3] = useState(false);
  const [visibility4, setVisibility4] = useState(false);
  const [visibility5, setVisibility5] = useState(false);
  const [visibility6, setVisibility6] = useState(false);
  return (
    <AppLayout
      leftOpen="true"
      rightOpen="false"
      leftchild={
        <Panel>
          <Table />
          <Accordion
            // header={<CardBar title="Ownership" info={true} />}
            visibility={visibility}
            onClick={() => {
              setVisibility(!visibility);
            }}
          >
            <Table />
          </Accordion>
          <Accordion
            // header={<CardBar title="Site Information" info={true} />}
            visibility={visibility2}
            onClick={() => {
              setVisibility2(!visibility2);
            }}
          >
            <Table />
          </Accordion>
          <Accordion
            // header={<CardBar title="Property Characteristics" info={true} />}
            visibility={visibility3}
            onClick={() => {
              setVisibility3(!visibility3);
            }}
          >
            <Table />
          </Accordion>
          <Accordion
            // header={<CardBar title="Value and Tax" info={true} />}
            visibility={visibility4}
            onClick={() => {
              setVisibility4(!visibility4);
            }}
          >
            <Table />
          </Accordion>
          <Accordion
            // header={<CardBar title="Last Market Sale" info={true} />}
            visibility={visibility5}
            onClick={() => {
              setVisibility5(!visibility5);
            }}
          >
            <Table />
          </Accordion>
          <Accordion
            // header={<CardBar title="Site Views" info={true} />}
            visibility={visibility6}
            onClick={() => {
              setVisibility6(!visibility6);
            }}
          >
            <Table />
          </Accordion>
        </Panel>
      }
      rightchild={
        <Panel
          footer={<Button label={translate("Apply")} isRound="true" />}
        >
          <LanguageSelect />
        </Panel>
      }
    />
  );
}

export default TrialApp;
