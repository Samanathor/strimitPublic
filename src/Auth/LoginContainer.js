import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {AuthActions} from "Auth/AuthActions";
import LoginScreen from "Auth/LoginScreen";

const { facebookLogin,resetState } = AuthActions;

const Login = (props) => {
    const dispatch = useDispatch();
    const mapStates = {
        ...useSelector((state) => state.auth.toJS()),
    };

    const mapDispatch = {
        onFacebookLogin: () => dispatch(facebookLogin()),
        onResetState: () => dispatch(resetState()),
    };


    const mapProps = {
        ...props, ...mapStates, ...mapDispatch
    };


    return (<LoginScreen {...mapProps} />);
};

Login.propTypes = {
    match: PropTypes.object,
};

export default memo(Login);
