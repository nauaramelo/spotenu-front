import React, { useState, useEffect }  from 'react';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { connect } from "react-redux";
import DoneIcon from '@material-ui/icons/Done';
import ListGridComponent from '../../components/ListGrid'
import { listBands, approveBand } from '../../actions/band';
import { setLogged } from '../../actions/login'

const ApproveBandPage = (props) => {

    const [dense, setDense] = React.useState(false); 

    useEffect(() => {
        if (!window.localStorage.getItem('token')) {
            props.setLogged(false)
            props.goToLogin()
        }

        if (window.localStorage.getItem('token')) {
            props.listBands()
        }

    }, [])

    const approveBand = (id) => {
        props.approveBand(id);
    }

    return (
        <ListGridComponent 
            headerColumns={[
                'Nome da Banda',
                'Ações'
            ]}
            dataList={props.bands}
            actionsColumn={[
                {
                    icon: <DoneIcon />,
                    action: approveBand
                }
            ]}
        />
    )
}

const mapStateToProps = state => {
    return {
      bands: state.band.bands
    }
}

const mapDispatchToProps = dispatch => ({
    listBands: () => dispatch(listBands()),
    setLogged: (logged) => dispatch(setLogged(logged)),
    goToLogin: () => dispatch(push(routes.root)),
    approveBand: (id) => dispatch(approveBand(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ApproveBandPage)
