import React, { Component } from "react";
import HeaderBar from "./HeaderBar";
import Tabs from "./Tabs";
import GeneralTab from "./GeneralTab"
import CategoriesTab from "./CategoriesTab"


export const API_URL =
  "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json";

  

export default class Dashboard extends Component {
  
  render() {
    return (
      <div>
        <HeaderBar />
        <div className="dashboard-container">
          <Tabs>
            <div label="General">
              <GeneralTab/>
            </div>
            <div label="Categorías">
              <CategoriesTab />
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}
