import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import './App.css';

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selector";

class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            // this.setState({currentUser: user});
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                })
            } else {
                setCurrentUser(userAuth);
            }

            // console.log(user);
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                    <Route exact path='/signin'
                           render={() => this.props.currentUser
                               ? (<Redirect to='/'/>)
                               : (<SignInAndSignUpPage/>)}
                    />
                </Switch>
            </div>
        );
    }
}

// Get an specific object from the state in the store. Pass the selector to handle it with memoization
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

// Send an action to the reducer
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
