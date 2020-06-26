import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListGridComponent from '../../components/ListGrid'

const musics = ['music1', 'music2', 'music3', 'music4']

const ListMusicPage = props => {

    const [state, setState] = useState({})

    const editMusic = (music) => {
        alert('Alteração Salva => ' + music)
    }

    const deleteMusic = (music) => {
        alert('Música Apagada => ' + music)
    }

    return (
        <ListGridComponent 
            headerColumns={[
                'Músicas',
                'Ações'
            ]}
            dataList={musics}
            actionsColumn={[
                {
                    icon: <EditIcon />,
                    action: editMusic
                },
                {
                    icon: <DeleteIcon />,
                    action: deleteMusic
                },
            ]}
        />
    )
}

export default ListMusicPage; 