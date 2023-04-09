import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand className="px-5" href="/">APP TT</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="pe-5">
                <NavLink href="">Trang chủ</NavLink>
              </NavItem>
              <NavItem className="pe-5">
                <NavLink href="">Tin tức</NavLink>
              </NavItem>
              <NavItem className="pe-5">
                <NavLink href="">Profile</NavLink>
              </NavItem>
              <NavItem className="pe-5">
                <NavLink href="/login">Đăng nhập</NavLink>
              </NavItem>
              <NavItem className="pe-5">
                <NavLink href="/register">Đăng ký</NavLink>
              </NavItem>
              <NavItem className="pe-5">
                <NavLink href="">Đăng xuất</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}