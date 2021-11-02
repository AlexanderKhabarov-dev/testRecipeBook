import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from "./components/layout/Navigation"
import AllRecipes from "./components/containers/AllRecipes"
import RecipesDetails from "./components/recipes/RecipesDetails"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import CreateRecipe from "./components/containers/CreateRecipe"
import MyRecipes from "./components/containers/MyRecipes"
import EditRecipe from "./components/containers/EditRecipe"
import Homepage from "./components/homepage/Homepage"
import Notification from "./components/notification/Notification"
import "./app.css"

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/all-recipes" component={AllRecipes}></Route>
          <Route exact path="/all-recipes/:sorting" component={AllRecipes}></Route>
          <Route exact path="/my-recipes" component={MyRecipes}></Route>
          <Route exact path="/my-recipes/:sorting" component={MyRecipes}></Route>
          <Route exact path="/recipe/:id" component={RecipesDetails}></Route>
          <Route exact path="/signin" component={SignIn}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/create-recipe" component={CreateRecipe}></Route>
          <Route exact path="/edit-recipe/:id" component={EditRecipe}></Route>
        </Switch>
      </div>
    </BrowserRouter>
    <Notification/>
    </>
  );
}

export default App;
