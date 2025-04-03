"use client";

import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./DropdownMenu.module.css"; // Import styles

const DropdownMenu = () => {
  return (
    <div className={styles.dropdownContainer}>
      <Dropdown>
        <Dropdown.Toggle className={styles.dropdownToggle} id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles.dropdownMenu}>
          <Dropdown.Item className={styles.dropdownItem} href="#/action-1">
            Action
          </Dropdown.Item>
          <Dropdown.Item className={styles.dropdownItem} href="#/action-2">
            Another action
          </Dropdown.Item>
          <Dropdown.Item className={styles.dropdownItem} href="#/action-3">
            Something else
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownMenu;
