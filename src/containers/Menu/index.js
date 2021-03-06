import React, { Fragment } from 'react';
import { connect } from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import logo2 from "./logo2.png"
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import AlbumIcon from '@material-ui/icons/Album';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { routes } from '../Router';
import { push } from 'connected-react-router';
import { TYPE_USER } from './typeUserEnum'
import HomeIcon from '@material-ui/icons/Home';

const features = [
  {
    name: 'Home',
    icon: <HomeIcon />,
    rolesForRender: [
      TYPE_USER.ADMIN,
      TYPE_USER.LISTENER_NO_PAYING,
      TYPE_USER.LISTENER_PAYING,
      TYPE_USER.BAND
    ],
    goTo: routes.signupAdm
  },
  {
    name: 'Cadastrar Administrador',
    icon: <SupervisorAccountIcon />,
    rolesForRender: [TYPE_USER.ADMIN],
    goTo: routes.signupAdm
  },
  {
    name: 'Aprovar Bandas',
    icon: <CheckCircleIcon />,
    rolesForRender: [TYPE_USER.ADMIN],
    goTo: routes.approveBand
  },
  {
    name: 'Listar Gêneros',
    icon: <PlaylistAddCheckIcon />,
    rolesForRender: [TYPE_USER.ADMIN, TYPE_USER.BAND],
    goTo: routes.listGenre
  },
  {
    name: 'Adicionar Gêneros',
    icon: <PlaylistAddIcon/>,
    rolesForRender: [TYPE_USER.ADMIN],
    goTo: routes.addGenre
  },
  {
    name: 'Album',
    icon: <AlbumIcon />,
    rolesForRender: [TYPE_USER.BAND],
    goTo: routes.addAlbum
  },
  {
    name: 'Adicionar Música',
    icon: <QueueMusicIcon />,
    rolesForRender: [TYPE_USER.BAND],
    goTo: routes.addMusic
  }
]

const Head = styled.div`
  display: flex;
  justify-content: center;
  height: 15vh;
  margin-top: 2vh;
  gap: 1vh;
`

const Logo = styled.img`
  height: 9vh;
`

const Lists = styled(List)`
  color: white;
  background-color: rgba(0,0,0,.8); 
`

const ListIcons = styled(ListItemIcon)`
  color: white;
`

const TypographyCustom = styled(Typography)`
  color: white;
`

const TypographyLogo = styled(Typography)`
  color: #1ed760;
  margin-top: 1.5vh;
  font-size: 5vh;
  margin-left: 1vh;
  font-weight: bold;
`

const MenuPage = props => {

  const goTo = (route) => {
    props.goTo(route)
  }

  const shouldRender = (rolesForRender) => {
    const rolesFilter = rolesForRender.filter((role) => {
      return (props.role || window.localStorage.getItem('role')) === role
    })

    return rolesFilter.length > 0
  }

  return (
    <Lists>
        <Head>
          <Logo src={logo2}/> 
          <TypographyLogo> 
            Spotenu 
          </TypographyLogo>
        </Head>
        { features.map((feature) => (
          shouldRender(feature.rolesForRender) ?
            <ListItem button key={feature.name} onClick={() => goTo(feature.goTo)}>
              <ListIcons>{feature.icon} </ListIcons>
                <ListItemText primary={<TypographyCustom> {feature.name} </TypographyCustom>} />
              </ListItem>
          :
            null
        )) }
    </Lists>
  )
}

const mapStateToProps = state => {
  return {
    role: state.login.role
  }
}

const mapDispatchToProps = dispatch => ({
  goTo: (route) => dispatch(push(route))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage)