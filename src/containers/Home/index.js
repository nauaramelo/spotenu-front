import React, { Fragment, useEffect } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { setLogged } from '../../actions/login'
import { push } from 'connected-react-router';
import { routes } from '../Router';

const Playlists = styled.div`
  padding-top: 6vh;
  display: grid;
  grid-gap: 16px;
  /* grid-template-columns: repeat(auto-fill,minmax(164px,1fr)); */
  text-align: center;
`


const HomePage = props => {
  useEffect(() => {
    if (!window.localStorage.getItem('token')) {
      props.setLogged(false)
      props.goToLogin()
    }
  }, [])

  return (
    <Fragment>
      <Playlists >
        Bem vindo ao Spotenu! 
      </Playlists>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  setLogged: (logged) => dispatch(setLogged(logged)),
  goToLogin: () => dispatch(push(routes.root))
})

export default connect(null, mapDispatchToProps)(HomePage)