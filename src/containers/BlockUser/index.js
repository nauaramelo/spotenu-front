import React, { useState } from 'react';
import { connect } from "react-redux";
import ListGridComponent from '../../components/ListGrid'
import BlockIcon from '@material-ui/icons/Block';

const users = ['Fulano', 'Beltrano', 'Sicrano']


const BlockUserPage = props => {

    const [state, setState] = useState({})

    const blockUser = (user) => {
        alert('usuario bloqueado => ' + user)
    }

    return (
        <ListGridComponent 
            headerColumns={[
                'Nome do usuário',
                'Ações'
            ]}
            dataList={users}
            actionsColumn={[
                {
                    icon: <BlockIcon />,
                    action: blockUser
                }
            ]}
        />
    )
}

const mapDispatchToProps = dispatch => ({})

export default connect(null, mapDispatchToProps)(BlockUserPage)

