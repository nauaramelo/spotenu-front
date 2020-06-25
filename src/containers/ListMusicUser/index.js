import React, { useState } from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ListGridComponent from '../../components/ListGrid'

const musics = ['music1', 'music2', 'music3', 'music4']

const ListMusicUserPage = props => {

    const [state, setState] = useState({})

    return (
        <ListGridComponent 
            headerColumns={[
                'Músicas',
            ]}
            dataList={musics}
        />
    )
}

export default ListMusicUserPage; 