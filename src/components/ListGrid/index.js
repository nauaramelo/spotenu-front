import React from 'react'; 
import { Grid, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@material-ui/core';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';

const IconButtons = styled(IconButton)`
    color: white;
`
const Div = styled.div`
    margin-top: 3vh;
`

const DividerHead = styled(Divider)`
    background-color: whitesmoke;
`


const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: ${props => `repeat(${props.columnsLength}, 1fr)`};
    padding: 10px;
    align-content: center;
    align-items: center;
    justify-self: center;
`

const ColumnsNameGrid = styled.div`
    font-weight: bold;
    text-align: center;
`

const ColumnActionsGrid = styled.div`
    display: grid;
    grid-template-columns: ${props => `5vh `.repeat(props.actionLength)};
    grid-gap: 2px;
    justify-content: center;
`

const RowsGrid = styled.div`
    text-align: center;
`

const ListGridComponent = (props) => {
    return (
        <Div>
            <ContainerGrid columnsLength={props.headerColumns.length}>
                { props.headerColumns.map((headerColumn) => (
                    <ColumnsNameGrid> { headerColumn } </ColumnsNameGrid>
                )) }
            </ContainerGrid>
            <DividerHead variant="middle"/>
            { props.dataList.map(data => (
                <div>
                    <ContainerGrid columnsLength={props.headerColumns.length}>
                        <RowsGrid>{ data }</RowsGrid>
                        <ColumnActionsGrid actionLength={ props.actionsColumn ? props.actionsColumn.length : 0 }>
                            { props.actionsColumn && props.actionsColumn.map(actionColumn => (
                            <IconButtons edge="end" aria-label="delete" onClick={() => actionColumn.action(data)}>
                                {actionColumn.icon}
                            </IconButtons>
                            )) }
                        </ColumnActionsGrid>
                    </ContainerGrid>
                    <DividerHead variant="middle"/>
                </div>
            )) }
        </Div>

    )
}

export default ListGridComponent;