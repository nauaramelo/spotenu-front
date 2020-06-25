import React, { useState } from 'react';
import ListGridComponent from '../../components/ListGrid'


const genres = ['Rock', 'Forró', 'Mpb', 'Funk']

const ListGenrePage = props => {

    const [state, setState] = useState({})

    return (
        <ListGridComponent 
            headerColumns={[
                'Gêneros',
            ]}
            dataList={genres}
        />
    )
}

export default ListGenrePage; 