import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import ListGridComponent from '../../components/ListGrid'

const bands = ['one', 'two', 'three', 'four']

const ApproveBandPage = (props) => {

    const [dense, setDense] = React.useState(false); 

    const approveBand = (band) => {
        alert('A banda aprovada ' + band)
    }

    return (
        <ListGridComponent 
            headerColumns={[
                'Nome da música',
                'Ações'
            ]}
            dataList={bands}
            actionsColumn={[
                {
                    icon: <DoneIcon />,
                    action: approveBand
                }
            ]}
        />
    )
}

export default ApproveBandPage; 