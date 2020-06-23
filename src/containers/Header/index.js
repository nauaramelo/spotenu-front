import React, { Fragment } from "react";
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { connect } from "react-redux";
import styled from 'styled-components';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { setLogged } from '../../actions/login'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`
const DividerHead = styled(Divider)`
  background-color: whitesmoke;
`

const InputSearch = styled(InputBase)`
  box-sizing: 100vh;
  width: 70vh;
  height: 10vh;
  color: white;
  background-color: transparent;
`

const HeaderPage = (props) => {
    const logout = () => {
        window.localStorage.removeItem('token')
        props.setLogged(false)
        props.goToLogin()
    }

    return (
        <Fragment>
            <Header>
                <InputSearch
                placeholder="Buscar"
                    startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon fontSize="large"/>
                    </InputAdornment>
                    }
                />
                <ExitToAppIcon fontSize="large" onClick={logout}/>
            </Header>
            <DividerHead variant="fullWidth"/>
      </Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    setLogged: (logged) => dispatch(setLogged(logged)),
    goToLogin: () => dispatch(push(routes.root))  
})
  
  export default connect(null, mapDispatchToProps)(HeaderPage)