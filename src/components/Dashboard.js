import React, { Component } from "react";
import HeaderBar from "./HeaderBar";
import Tabs from "./Tabs";
import GeneralTab from "./GeneralTab";
import CategoriesTab from "./CategoriesTab";
import Loading from "./Loading";
import axios from "axios";

const API_URL =
  "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      athletes: [],
      totals: {
        gold: 0,
        silver: 0,
        bronze: 0,
      },
    };
  }

  componentDidMount() {
    this.loadAthletes();
  }

  loadAthletes() {
    if (!this.state.athletes.length) {
      axios
        .get(API_URL)
        .then((response) => response.data)
        .then((data) => {
          let totals = this.calculateTotals(data);
          this.setState({
            athletes: data,
            totals: totals,
          });
        });
      console.log("Dashboard state: " + JSON.stringify(this.state));
    }
  }

  calculateTotals(athletes) {
    let goldCount = 0;
    let silverCount = 0;
    let bronzeCount = 0;

    for (const athlete of athletes) {
      goldCount += athlete.gold;
      silverCount += athlete.silver;
      bronzeCount += athlete.bronze;
    }

    return {
      gold: goldCount,
      silver: silverCount,
      bronze: bronzeCount,
    };
  }

  renderWithLoading(input) {
    return this.state.athletes.length ? input : <Loading />;
  }

  renderTabs() {
    return (
      <Tabs>
        <div label="General">
          <GeneralTab athletes={this.state.athletes} />
        </div>
        <div label="Categorías">
          <CategoriesTab totals={this.state.totals} />
        </div>
      </Tabs>
    );
  }

  render() {
    return (
      <div>
        <HeaderBar
          loggedUser={this.props.loggedUser}
          handleLogout={this.props.handleLogout}
        />
        <div className="dashboard-container">
          {this.renderWithLoading(this.renderTabs())}
        </div>
      </div>
    );
  }
}
