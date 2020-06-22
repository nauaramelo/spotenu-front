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


const features = [
  {
    name: 'Cadastrar Administrador',
    icon: <SupervisorAccountIcon />,
    ruleForRender: "Admin"
  },
  {
    name: 'Aprovar Bandas',
    icon: <CheckCircleIcon />,
    ruleForRender: "Admin"
  },
  {
    name: 'Adicionar Gêneros',
    icon: <PlaylistAddCheckIcon />,
    ruleForRender: "Admin"
  },
  {
    name: 'Bloquear Usuario',
    icon: <PersonAddDisabledIcon />,
    ruleForRender: "Admin"
  },
  {
    name: 'Criar Album',
    icon: <AlbumIcon />,
    ruleForRender: "Band"
  },
  {
    name: 'Editar Album',
    icon: <EditAttributesIcon />,
    ruleForRender: "Band"
  },
  {
    name: 'Deletar Album',
    icon: <DeleteForeverIcon />,
    ruleForRender: "Band"
  },
  {
    name: 'Criar Música',
    icon: <LibraryMusicIcon />,
    ruleForRender: "Band"
  },
  {
    name: 'Editar Música',
    icon: <EditIcon />,
    ruleForRender: "Band"
  },
  {
    name: 'Deletar Música',
    icon: <DeleteIcon/>,
    ruleForRender: "Band"
  },
  {
    name: 'Música',
    icon: <MusicNoteIcon/>,
    ruleForRender: "Listener"
  },
  {
    name: 'Gênero',
    icon: <QueueMusicIcon/>,
    ruleForRender: "Listener"
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

const typesUser = "Band"

const MenuPage = props => {
  return (
    <Lists>
        <Logo src={logo2}/>
        {features.map((feature, index) => (
        feature.ruleForRender === typesUser ? 
        <ListItem button key={feature.name}>
            <ListIcons>{feature.icon} </ListIcons>
            <ListItemText primary={<TypographyCustom> {feature.name} </TypographyCustom>} />
        </ListItem>
        : null
        ))}
    </Lists>
  )
}

const mapDispatchToProps = dispatch => ({

})

export default connect(null, mapDispatchToProps)(MenuPage)