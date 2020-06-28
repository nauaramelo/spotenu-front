import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import ListGridComponent from '../../components/ListGrid';
import { useHistory} from 'react-router-dom';
import { listGenres } from '../../actions/genre';
import { setLogged } from '../../actions/login'
import { push } from 'connected-react-router';
import { routes } from '../Router';

const ListGenrePage = props => {

    const [state, setState] = useState({})

    useEffect(() => {
        if (!window.localStorage.getItem('token')) {
          props.setLogged(false)
          props.goToLogin()
        }

        if (window.localStorage.getItem('token')) {
            props.listGenres()
        }

    }, [])

    return (
        <ListGridComponent 
            headerColumns={[
                'Gêneros',
            ]}
            dataList={props.genres}
        />
    )
}

const mapStateToProps = state => {
    return {
      genres: state.genre.genres
    }
}

const mapDispatchToProps = dispatch => ({
    listGenres: () => dispatch(listGenres()),
    setLogged: (logged) => dispatch(setLogged(logged)),
    goToLogin: () => dispatch(push(routes.root))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListGenrePage)