import React, { Component, Fragment } from 'react';
import styled, {css} from 'styled-components';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]



const MultiSelect = styled(Select)`

    &.Select--single  {

        .Select-value {
            display: inline-flex;
            align-items: center;
        }
    }

    & .Select-placeholder {
        font-size: smaller;
    }
`

export default class MenuSelect extends Component {
  render() {
    return (
            <Fragment>
              <MultiSelect
                className="basic-single"
                classNamePrefix="select"
                defaultValue={options[0]}
                name="color"
                options={options}
              />
              </Fragment>
            );
  }
}