import React, { Fragment, useEffect } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { setLogged } from '../../actions/login'
import InputAdornment from '@material-ui/core/InputAdornment';
import Divider from '@material-ui/core/Divider';

const InputSearch = styled(InputBase)`
  box-sizing: 100vh;
  width: 70vh;
  height: 10vh;
  color: white;
  background-color: transparent;
`
const Playlists = styled.div`
  padding-top: 6vh;
  display: grid;
  grid-gap: 16px;
  /* grid-template-columns: repeat(auto-fill,minmax(164px,1fr)); */
  text-align: center;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`
const DividerHead = styled(Divider)`
  background-color: whitesmoke;
`

const HomePage = props => {
  useEffect(() => {
    console.log('chegou?')

    if (window.localStorage.getItem('token')) {
      props.setLogged(window.localStorage.getItem('token'))
    }
  }, [])

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
        <ExitToAppIcon fontSize="large"/>
      </Header>
      <DividerHead variant="fullWidth"/>
      <Playlists>
        Bem vindo ao Spotenu! 
      </Playlists>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  setLogged: (logged) => dispatch(setLogged(logged))
})

export default connect(null, mapDispatchToProps)(HomePage)