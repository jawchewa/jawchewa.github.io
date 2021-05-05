import React from 'react';
import { AppBar } from './Components/AppBar';
import { MenuItem } from './Components/MenuItem';
import { MenuLink } from './Components/MenuLink';
import { Logo } from './Components/Logo';
import {createUseStyles} from 'react-jss'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AboutPage, ContactPage, PortfolioPage, HomePage } from './Pages/Main';
import { RoboRepairPage, TapshotPage, GraveGuardianPage, HoloDefenderPage, BurstFightersPage, CakeWalkPage, RogueBotPage } from './Pages/Games';
import { Container } from '@material-ui/core';
import * as history from "history";
import { Footer } from "./Components/Footer";
import { Stars } from "./Components/Stars";
import { AHITModdingPage } from './Pages/Projects/AHITModding';
import { NomadPage } from './Pages/Projects/NomadPage';
import { Grid } from '@material-ui/core';

const useStyles = createUseStyles({
  app: {
    color: 'white',
    minHeight: '100vh',
    width: '100%',
  },
  container: {
    width: '100%',
    minHeight: '94.6vh',
    backgroundColor: 'rgba(20, 20, 40, 0.7)',
    paddingBottom: '5px',
  },
  footer: {
    width: '100%',
    backgroundColor: 'rgba(20, 20, 40, 0.7)',
    padding: '1px',
  }
});


export const hist = history.createBrowserHistory();

hist.listen((location, action) => {
    window.scrollTo(0, 0);
})

function App() {
  const classes = useStyles();
  return (
    <Router history={hist}>
      <div className={classes.app}>
        <Stars></Stars>
        <Container className={classes.container} maxWidth="lg">
          <div>
            <Logo/>
            <AppBar>
              <Grid item xs={6} sm={4} md={2} className={classes.gridItem}>
                <MenuItem url='/'>Home</MenuItem>
              </Grid>
              <Grid item xs={6} sm={4} md={2} className={classes.gridItem}>
                <MenuItem url='/portfolio'>Portfolio</MenuItem>
                </Grid>
              <Grid item xs={6} sm={4} md={2} className={classes.gridItem}>
                <MenuItem url='/about'>About</MenuItem>
                </Grid>
              <Grid item xs={6} sm={4} md={2} className={classes.gridItem}>
                <MenuItem url='/contact'>Contact</MenuItem>
                </Grid>
              <Grid item xs={6} sm={4} md={2} className={classes.gridItem}>
                <MenuLink url='/content/Joshua-Stephens-Resume.pdf'>Résumé</MenuLink>
                </Grid>
              <Grid item xs={6} sm={4} md={2} className={classes.gridItem}>
                <MenuLink url='https://www.linkedin.com/in/j-stephens/'>LinkedIn</MenuLink>
              </Grid>
            </AppBar>
            <div>
              <Switch>
                <Route path="/about">
                  <AboutPage />
                </Route>
                <Route path="/contact">
                  <ContactPage />
                </Route>
                <Route path="/portfolio">
                  <PortfolioPage />
                </Route>
                <Route path="/games/tap-shot">
                  <TapshotPage />
                </Route>
                <Route path="/games/robo-repair">
                  <RoboRepairPage />
                </Route>
                <Route path="/games/grave-guardian">
                  <GraveGuardianPage />
                </Route>
                <Route path="/games/holo-defender">
                  <HoloDefenderPage />
                </Route>
                <Route path="/games/burst-fighters">
                  <BurstFightersPage />
                </Route>
                <Route path="/games/cake-walk">
                  <CakeWalkPage />
                </Route>
                <Route path="/games/rogue-bot">
                  <RogueBotPage />
                </Route>
                <Route path="/projects/ahit-modding">
                  <AHITModdingPage />
                </Route>
                <Route path="/projects/nomad">
                  <NomadPage />
                </Route>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            </div>
          </div>
        </Container>
        <Container className={classes.footer} maxWidth="lg">
          <Footer/>
        </Container>
      </div>
    </Router>
  );
}

export default App;