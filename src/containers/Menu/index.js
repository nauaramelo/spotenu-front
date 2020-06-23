import React, { Fragment } from 'react';
import { connect } from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logo2 from "./logo2.png"
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import AlbumIcon from '@material-ui/icons/Album';
import EditIcon from '@material-ui/icons/Edit';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteIcon from '@material-ui/icons/Delete';
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
    goTo: ''
  },
  {
    name: 'Adicionar Gêneros',
    icon: <PlaylistAddCheckIcon />,
    ruleForRender: 'Admin',
    goTo: ''
  },
  {
    name: 'Bloquear Usuario',
    icon: <PersonAddDisabledIcon />,
    ruleForRender: 'Admin',
    goTo: ''
  },
  {
    name: 'Album',
    icon: <AlbumIcon />,
    ruleForRender: 'Band',
    goTo: ''
  },
  {
    name: 'Música',
    icon: <LibraryMusicIcon />,
    ruleForRender: 'Band',
    goTo: ''
  },
  {
    name: 'Música',
    icon: <MusicNoteIcon/>,
    ruleForRender: 'Listener',
    goTo: ''
  },
  {
    name: 'Gênero',
    icon: <QueueMusicIcon/>,
    ruleForRender: 'Listener',
    goTo: ''
  },
]

const Logo = styled.img`
  height: 9vh;
  /* width: 12vh; */
  margin-left: 6vh;
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

const typesUser = 'Admin' || window.localStorage.getItem('role')

const MenuPage = props => {

  const goTo = (route) => {
    props.goTo(route)
  }

  return (
    <Lists>
        <Logo src={logo2}/>
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