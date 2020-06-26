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

const features = [
  {
    name: 'Cadastrar Administrador',
    icon: <SupervisorAccountIcon />,
    ruleForRender: 'Admin',
    goTo: routes.signupAdm
  },
  {
    name: 'Aprovar Bandas',
    icon: <CheckCircleIcon />,
    ruleForRender: 'Admin',
    goTo: routes.approveBand
  },
  {
    name: 'Listar Gêneros',
    icon: <PlaylistAddCheckIcon />,
    ruleForRender: 'Admin',
    goTo: routes.listGenre
  },
  {
    name: 'Adicionar Gêneros',
    icon: <PlaylistAddIcon/>,
    ruleForRender: 'Admin',
    goTo: routes.addGenre
  },
  {
    name: 'Bloquear Usuario',
    icon: <PersonAddDisabledIcon />,
    ruleForRender: 'Admin',
    goTo: routes.blockUser
  },
  {
    name: 'Album',
    icon: <AlbumIcon />,
    ruleForRender: 'Band',
    goTo: routes.addAlbum
  },
  {
    name: 'Músicas',
    icon: <LibraryMusicIcon />,
    ruleForRender: 'Band',
    goTo: routes.listMusic
  },
  {
    name: 'Adicionar Música',
    icon: <QueueMusicIcon />,
    ruleForRender: 'Band',
    goTo: routes.addMusic
  },
  {
    name: 'Música',
    icon: <MusicNoteIcon/>,
    ruleForRender: 'Listener',
    goTo: routes.listMusicUser
  },
  {
    name: 'Gênero',
    icon: <QueueMusicIcon/>,
    ruleForRender: 'Listener',
    goTo: routes.listGenre
  },
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
  /* width: 12vh; */
  /* margin-left: 6vh; */
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

const typesUser = 'Listener' || window.localStorage.getItem('role')

const MenuPage = props => {

  const goTo = (route) => {
    props.goTo(route)
  }

  return (
    <Lists>
        <Head>
        <Logo src={logo2}/> 
        <TypographyLogo> 
          Spotenu 
        </TypographyLogo>
        </Head>
        { features.map((feature, index) => (
          feature.ruleForRender === typesUser ?
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

const mapDispatchToProps = dispatch => ({
  goTo: (route) => dispatch(push(route))
})

export default connect(null, mapDispatchToProps)(MenuPage)