import React, { Component } from 'react';
import styled, {css} from 'styled-components';


const MenuTitle = styled.button`
background: white;
font-family: Muli;
border: 0px solid black;
font-size: 14px;
color: black;
padding: 2px;
alignment: left;
cursor: pointer;

&:hover {
    color: DodgerBlue;
  }
`


const MenuButton = styled.button`
background: white;
font-family: Muli;
font-size: 14px;
padding: 2px 10px 2px 2px;
color: black;
display:block;
border: 0px solid black;
font-weight: 500;
cursor: pointer;

&:hover {
    color: DodgerBlue;
  }
  
`

export default class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  

    }

  }


  render() {
    return (
      <div>
        <MenuTitle onClick={this.showMenu}>
          Show menu
        </MenuTitle>
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
              <div/>
                <MenuButton> Menu item 1 </MenuButton>
                <MenuButton> Menu item 2 </MenuButton>
                <MenuButton> Menu item 3 </MenuButton>
              </div>
            )

            : (
              null
            )
        }
      </div>

    );
  }

}