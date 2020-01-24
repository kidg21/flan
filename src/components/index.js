/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
// Publicly exported files from 'base'
export {
  default as Text,
  Title,
  Link,
  Label,
} from "./base/Typography";
export { default as GlobalStyles } from "./base/GlobalStyles/GlobalStyles.jsx";

// Publicly exported files from 'atoms'
export { default as Avatar } from "./atoms/Avatar";
export { default as Badge } from "./atoms/Badge";
export { default as Button } from "./atoms/Button";
export { default as Calendar } from "./atoms/Calendar";
export { default as Checkbox, CheckboxGroup } from "./atoms/Checkbox";
export { default as Command } from "./atoms/Command";
export { default as Container } from "./atoms/Container";
export { default as Divider } from "./atoms/Divider";
export { default as Icon } from "./atoms/Icon";
export { default as Image } from "./atoms/Image";
export { default as Radio, RadioGroup } from "./atoms/Radio";
export { default as SelectMenu } from "./atoms/SelectMenu";
export { default as Slider } from "./atoms/Slider";
export { default as Switch } from "./atoms/Switch";
export { default as Tag } from "./atoms/Tag";
export { default as TextInput } from "./atoms/TextInput";

// Publicly exported files from 'blocks'
export { default as Banner } from "./blocks/Banner";
export { default as Bar } from "./blocks/Bar";
export { default as Legend } from "./blocks/Legend";
export { default as Controls, Control } from "./blocks/Controls";
export { default as DataRange } from "./blocks/DataRange";
export { default as List, ListItem } from "./blocks/List";
export { default as IconBlock } from "./blocks/IconBlock";
export { default as InputBlock } from "./blocks/InputBlock";
export { default as MediaBlock } from "./blocks/MediaBlock";
export { default as Menu } from "./blocks/Menu";
export { default as RangeSlider } from "./blocks/RangeSlider";
export { default as Table } from "./blocks/Table";
export { default as Tabs, Tab } from "./blocks/Tabs";
export { CardList } from "./blocks/List";

// Publicly exported files from 'elements'
export { default as Card, CardSection, CardGrid } from "./elements/Card";
export { default as MainPanelHeader } from "./elements/PanelHeaders/MainPanelHeader";
export { default as PropertyPanelHeader } from "./elements/PanelHeaders/PropertyPanelHeader";
export { default as NavigationPanelHeader } from "./elements/PanelHeaders/NavigationPanelHeader";
export { default as Notification } from "./elements/Notification";
export { UserRoles, RolePermissions } from "./elements/UserRoles";
export {
  default as Dialog,
  Alert,
  Confirm,
  Prompt,
} from "./elements/DialogBox";

// Publicly exported files from 'layout'
export { default as CardLayout, CardList as oldCardList } from "./layout/Card"; // TODO: deprecated Card, fix
export { default as Form, Section } from "./layout/Form";
export { default as Grid } from "./layout/Grid";
export { default as Layout } from "./layout/Layout";
export { default as Modal } from "./layout/Modal";
export { default as Page } from "./layout/Page";
export { default as Panel } from "./layout/Panel";

export { default as Expander } from "./utils/Expander";

export {
  colors,
  fonts,
  shadows,
  screen,
  DMPTheme,
  darkTheme,
} from "./base/Variables/Variables.jsx";
export { ThemeProvider } from "styled-components";
