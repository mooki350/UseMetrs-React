import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import UsageGoalEnergyDaily from './views/usage-goal-energy-daily'
import EnergyDashWeekly from './views/energy-dash-weekly'
import Devices from './views/devices'
import UsageGoalWaterWeekly from './views/usage-goal-water-weekly'
import CompareWaterWeekly from './views/compare-water-weekly'
import CompareWaterMonthly from './views/compare-water-monthly'
import WaterDashMonthly from './views/water-dash-monthly'
import MainDashboard from './views/main-dashboard'
import UsageGoalWaterMonthly from './views/usage-goal-water-monthly'
import CompareUsage from './views/compare-usage'
import UsageGoalGasMonthly from './views/usage-goal-gas-monthly'
import GasDashMonthly from './views/gas-dash-monthly'
import CompareEnergyMonthly from './views/compare-energy-monthly'
import CompareGasWeekly from './views/compare-gas-weekly'
import CompareGasDaily from './views/compare-gas-daily'
import UsageGoalWaterDaily from './views/usage-goal-water-daily'
import WaterDashWeekly from './views/water-dash-weekly'
import GasDashWeekly from './views/gas-dash-weekly'
import UsageGoalsNewGoal from './views/usage-goals-new-goal'
import EnergyDashMonthly from './views/energy-dash-monthly'
import UsageGoals from './views/usage-goals'
import Settings from './views/settings'
import GasDashDaily from './views/gas-dash-daily'
import EnergyDashDaily from './views/energy-dash-daily'
import CompareEnergyDaily from './views/compare-energy-daily'
import UsageGoalGasWeekly from './views/usage-goal-gas-weekly'
import CompareWaterDaily from './views/compare-water-daily'
import UsageGoalEnergyWeekly from './views/usage-goal-energy-weekly'
import UsageGoalEnergyMonthly from './views/usage-goal-energy-monthly'
import WaterDashDaily from './views/water-dash-daily'
import UsageGoalGasDaily from './views/usage-goal-gas-daily'
import AddDevice from './views/add-device'
import CompareGasMonthly from './views/compare-gas-monthly'
import CompareEnergyWeekly from './views/compare-energy-weekly'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          component={UsageGoalEnergyDaily}
          exact
          path="/usage-goal-energy-daily"
        />
        <Route component={EnergyDashWeekly} exact path="/energy-dash-weekly" />
        <Route component={Devices} exact path="/devices" />
        <Route
          component={UsageGoalWaterWeekly}
          exact
          path="/usage-goal-water-weekly"
        />
        <Route
          component={CompareWaterWeekly}
          exact
          path="/compare-water-weekly"
        />
        <Route
          component={CompareWaterMonthly}
          exact
          path="/compare-water-monthly"
        />
        <Route component={WaterDashMonthly} exact path="/water-dash-monthly" />
        <Route component={MainDashboard} exact path="/" />
        <Route
          component={UsageGoalWaterMonthly}
          exact
          path="/usage-goal-water-monthly"
        />
        <Route component={CompareUsage} exact path="/compare-usage" />
        <Route
          component={UsageGoalGasMonthly}
          exact
          path="/usage-goal-gas-monthly"
        />
        <Route component={GasDashMonthly} exact path="/gas-dash-monthly" />
        <Route
          component={CompareEnergyMonthly}
          exact
          path="/compare-energy-monthly"
        />
        <Route component={CompareGasWeekly} exact path="/compare-gas-weekly" />
        <Route component={CompareGasDaily} exact path="/compare-gas-daily" />
        <Route
          component={UsageGoalWaterDaily}
          exact
          path="/usage-goal-water-daily"
        />
        <Route component={WaterDashWeekly} exact path="/water-dash-weekly" />
        <Route component={GasDashWeekly} exact path="/gas-dash-weekly" />
        <Route
          component={UsageGoalsNewGoal}
          exact
          path="/usage-goals-new-goal"
        />
        <Route
          component={EnergyDashMonthly}
          exact
          path="/energy-dash-monthly"
        />
        <Route component={UsageGoals} exact path="/usage-goals" />
        <Route component={Settings} exact path="/settings" />
        <Route component={GasDashDaily} exact path="/gas-dash-daily" />
        <Route component={EnergyDashDaily} exact path="/energy-dash-daily" />
        <Route
          component={CompareEnergyDaily}
          exact
          path="/compare-energy-daily"
        />
        <Route
          component={UsageGoalGasWeekly}
          exact
          path="/usage-goal-gas-weekly"
        />
        <Route
          component={CompareWaterDaily}
          exact
          path="/compare-water-daily"
        />
        <Route
          component={UsageGoalEnergyWeekly}
          exact
          path="/usage-goal-energy-weekly"
        />
        <Route
          component={UsageGoalEnergyMonthly}
          exact
          path="/usage-goal-energy-monthly"
        />
        <Route component={WaterDashDaily} exact path="/water-dash-daily" />
        <Route
          component={UsageGoalGasDaily}
          exact
          path="/usage-goal-gas-daily"
        />
        <Route component={AddDevice} exact path="/add-device" />
        <Route
          component={CompareGasMonthly}
          exact
          path="/compare-gas-monthly"
        />
        <Route
          component={CompareEnergyWeekly}
          exact
          path="/compare-energy-weekly"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
