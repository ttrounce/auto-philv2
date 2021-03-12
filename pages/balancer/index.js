import React, { useEffect, useState } from 'react'
import style from '../../styles/modules/main.module.sass'
import axios from 'axios'

function findPlayerIndex(players, playerName) {
    const index = players.findIndex((element, i) => {
        if (element.name === playerName) {
            return true
        }
    })
    return index
}

export default function Balancer(props) {
    const [players, setPlayers] = useState([])

    const [roleStatus, setRoleStatus] = useState([true, true, true])

    useEffect(() => {
        axios.get('/api/players').then((res) => {
            setPlayers(res.data)
        })
    }, [])

    if(!players || players.length == 0)
        return <></>

    const onChangeRoleSR = (playerName, role, newValue) => {
        const updatedPlayers = players.slice()
        const i = findPlayerIndex(updatedPlayers, playerName)
        if (i >= 0) {
            updatedPlayers[i][role][0] = Math.max(0, Math.min(newValue, 5000))
            console.log(updatedPlayers[i][role][0])
            setPlayers(updatedPlayers)
        }
    }

    const onClickSelectAll = (e) => {
        const updatedPlayers = players.slice()
        for (var i in updatedPlayers) {
            updatedPlayers[i].active = true
        }
        setPlayers(updatedPlayers)
    }

    const onClickUnselectAll = (e) => {
        const updatedPlayers = players.slice()
        for (var i in updatedPlayers) {
            updatedPlayers[i].active = false
        }
        setPlayers(updatedPlayers)
    }

    const onClickPlayer = (playerName, e) => {
        const index = findPlayerIndex(players, playerName)
        if (index >= 0) {
            const updatedPlayers = players.slice()
            updatedPlayers[index].active = !updatedPlayers[index].active
            setPlayers(updatedPlayers)
        }
    }

    const onClickRole = (playerName, role, e) => {
        const index = findPlayerIndex(players, playerName)
        if (index >= 0) {
            const updatedPlayers = players.slice()
            updatedPlayers[index][role][1] = !updatedPlayers[index][role][1]
            setPlayers(updatedPlayers)
        }
    }

    const lookupPlayerActive = (playerName) => {
        const index = findPlayerIndex(players, playerName)
        if (index >= 0) {
            return players[index].active
        }
    }

    const lookupRole = (playerName, role) => {
        const index = findPlayerIndex(players, playerName)
        if (index >= 0) {
            return players[index][role][1]
        }
    }

    return (
        <div className={style.bubble}>
            <table className={style.column}>
                <thead>
                    <tr>
                        <th
                            className={style.player_header}>
                            Player
                        </th>
                        <th
                            className={style.active_header}>
                            Active
                            <div className={style.subtext}>
                                <span>Select: </span>
                                <div
                                    tabIndex='0'
                                    onClick={e => {
                                        const updatedPlayers = players.slice()
                                        for(var i in updatedPlayers)
                                        {
                                            updatedPlayers[i].active = true
                                        }
                                        setPlayers(updatedPlayers)
                                    }}
                                    className={
                                        style.align_center +
                                        ' ' +
                                        style.table_header_button
                                    }>
                                    All
                                </div>
                                <div
                                    tabIndex='0'
                                    onClick={e => {
                                        const updatedPlayers = players.slice()
                                        for(var i in updatedPlayers)
                                        {
                                            updatedPlayers[i].active = false
                                        }
                                        setPlayers(updatedPlayers)
                                    }}
                                    className={
                                        style.align_center +
                                        ' ' +
                                        style.table_header_button
                                    }>
                                    None
                                </div>
                            </div>
                        </th>
                        <th
                            className={
                                style.align_center + ' ' + style.role_header
                            }>
                            Tank
                            <div className={style.subtext}>
                                <span>Select: </span>
                                <div
                                    tabIndex='0'
                                    onClick={e => {
                                        const updatedPlayers = players.slice()
                                        for(var i in updatedPlayers)
                                        {
                                            if(updatedPlayers[i].tank[0] > 0)
                                                updatedPlayers[i].tank[1] = true
                                        }
                                        setPlayers(updatedPlayers)
                                    }}
                                    className={
                                        style.align_center +
                                        ' ' +
                                        style.table_header_button
                                    }>
                                    All
                                </div>
                                <div
                                    tabIndex='0'
                                    onClick={e => {
                                        const updatedPlayers = players.slice()
                                        for(var i in updatedPlayers)
                                        {
                                            updatedPlayers[i].tank[1] = false
                                        }
                                        setPlayers(updatedPlayers)
                                    }}
                                    className={
                                        style.align_center +
                                        ' ' +
                                        style.table_header_button
                                    }>
                                    None
                                </div>
                            </div>
                        </th>
                        <th
                            className={
                                style.align_center + ' ' + style.role_header
                            }>
                            Damage
                            <div className={style.subtext}>
                                <span>Select: </span>
                                <div
                                    tabIndex='0'
                                    onClick={e => {
                                        const updatedPlayers = players.slice()
                                        for(var i in updatedPlayers)
                                        {
                                            if(updatedPlayers[i].dps[0] > 0)
                                                updatedPlayers[i].dps[1] = true
                                        }
                                        setPlayers(updatedPlayers)
                                    }}
                                    className={
                                        style.align_center +
                                        ' ' +
                                        style.table_header_button
                                    }>
                                    All
                                </div>
                                <div
                                    tabIndex='0'
                                    onClick={e => {
                                        const updatedPlayers = players.slice()
                                        for(var i in updatedPlayers)
                                        {
                                            updatedPlayers[i].dps[1] = false
                                        }
                                        setPlayers(updatedPlayers)
                                    }}
                                    className={
                                        style.align_center +
                                        ' ' +
                                        style.table_header_button
                                    }>
                                    None
                                </div>
                            </div>
                        </th>
                        <th
                            className={
                                style.align_center + ' ' + style.role_header
                            }>
                            Support
                            <div className={style.subtext}>
                                <span>Select: </span>
                                <div
                                    tabIndex='0'
                                    onClick={e => {
                                        const updatedPlayers = players.slice()
                                        for(var i in updatedPlayers)
                                        {
                                            if(updatedPlayers[i].supp[0] > 0)
                                                updatedPlayers[i].supp[1] = true
                                        }
                                        setPlayers(updatedPlayers)
                                    }}
                                    className={
                                        style.align_center +
                                        ' ' +
                                        style.table_header_button
                                    }>
                                    All
                                </div>
                                <div
                                    tabIndex='0'
                                    onClick={e => {
                                        const updatedPlayers = players.slice()
                                        for(var i in updatedPlayers)
                                        {
                                            updatedPlayers[i].supp[1] = false
                                        }
                                        setPlayers(updatedPlayers)
                                    }}
                                    className={
                                        style.align_center +
                                        ' ' +
                                        style.table_header_button
                                    }>
                                    None
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, i) => (
                        <tr key={player.name} id={player.name}>
                            <td style={{maxWidth: '0'}}
                                className={
                                    style.cell_selector +
                                    ' ' +
                                    style.align_center +
                                    ' ' +
                                    (lookupPlayerActive(player.name)
                                        ? style.active_cell_selector
                                        : '')
                                }
                                id="name">
                                {player.name}
                            </td>
                            <td
                                tabIndex='0'
                                onKeyDown={(e) => {
                                    if(e.keyCode == 9)
                                        return
                                    onClickPlayer(player.name, e)
                                }}
                                onClick={(e) => onClickPlayer(player.name, e)}
                                className={
                                    style.align_center +
                                    ' ' + 
                                    style.cell_selector +
                                    ' ' +
                                    style.activity_cell_checkbox +
                                    ' ' +
                                    (player.active &&
                                        style.active)
                                }>
                                {player.active
                                    ? '✓'
                                    : '✗'}
                            </td>
                            <td
                                className={
                                    style.cell_selector +
                                    ' ' +
                                    style.align_center +
                                    ' ' +
                                    (player.active &&
                                    lookupRole(player.name, 'tank')
                                        ? style.active_cell_selector
                                        : '')
                                }
                                id="tank">
                                <input
                                    onChange={(e) => {
                                        onChangeRoleSR(
                                            player.name,
                                            'tank',
                                            e.target.value
                                        )
                                    }}
                                    type={player.tank[0] > 0 ? "number" : 'text'}
                                    value={player.tank[0] > 0 ? player.tank[0] : '----'}></input>
                                <div
                                    tabIndex='0'
                                    onKeyDown={(e) => {
                                        if(e.keyCode == 9)
                                            return
                                        if (
                                            e.target.tagName !== 'INPUT' &&
                                            player.tank[0] > 0
                                        )
                                            onClickRole(player.name, 'tank', e)
                                    }}
                                    onClick={(e) => {
                                        if (
                                            e.target.tagName !== 'INPUT' &&
                                            player.tank[0] > 0
                                        )
                                            onClickRole(player.name, 'tank', e)
                                    }}
                                    className={
                                        style.align_center +
                                        ' ' +
                                        style.cell_checkbox +
                                        ' ' +
                                        (player.active &&
                                            lookupRole(player.name, 'tank') &&
                                            style.active)
                                    }>
                                    {player.active &&
                                    lookupRole(player.name, 'tank')
                                        ? '✓'
                                        : '✗'}
                                </div>
                            </td>
                            <td
                                className={
                                    style.cell_selector +
                                    ' ' +
                                    style.align_center +
                                    ' ' +
                                    (player.active &&
                                    lookupRole(player.name, 'dps')
                                        ? style.active_cell_selector
                                        : '')
                                }
                                id="dps">
                                <input
                                    onChange={(e) => {
                                        onChangeRoleSR(
                                            player.name,
                                            'dps',
                                            e.target.value
                                        )
                                    }}
                                    type={player.dps[0] > 0 ? "number" : 'text'}
                                    value={player.dps[0] > 0 ? player.dps[0] : '----'}></input>
                                <div
                                    tabIndex='0'
                                    onKeyDown={(e) => {
                                        if(e.keyCode == 9)
                                            return
                                        if (
                                            e.target.tagName !== 'INPUT' &&
                                            player.dps[0] > 0
                                        )
                                            onClickRole(player.name, 'dps', e)
                                    }}
                                    onClick={(e) => {
                                        if (
                                            e.target.tagName !== 'INPUT' &&
                                            player.dps[0] > 0
                                        )
                                        onClickRole(player.name, 'dps', e)
                                    }}
                                    className={
                                        style.align_center +
                                        ' ' +
                                        style.cell_checkbox +
                                        ' ' +
                                        (player.active &&
                                            lookupRole(player.name, 'dps') &&
                                            style.active)
                                    }>
                                    {player.active &&
                                    lookupRole(player.name, 'dps')
                                        ? '✓'
                                        : '✗'}
                                </div>
                            </td>
                            <td
                                className={
                                    style.cell_selector +
                                    ' ' +
                                    style.align_center +
                                    ' ' +
                                    (player.active &&
                                    lookupRole(player.name, 'supp')
                                        ? style.active_cell_selector
                                        : '')
                                }
                                id="supp">
                                <input
                                    onChange={(e) => {
                                        onChangeRoleSR(
                                            player.name,
                                            'supp',
                                            e.target.value
                                        )
                                    }}
                                    type={player.supp[0] > 0 ? 'number' : 'text'}
                                    value={player.supp[0] > 0 ? player.supp[0] : '----'}></input>
                                <div
                                    tabIndex='0'
                                    onKeyDown={(e) => {
                                        if(e.keyCode == 9)
                                            return
                                        if (
                                            e.target.tagName !== 'INPUT' &&
                                            player.supp[0] > 0
                                        )
                                            onClickRole(player.name, 'supp', e)
                                    }}
                                    onClick={(e) => {
                                        if (
                                            e.target.tagName !== 'INPUT' &&
                                            player.supp[0] > 0
                                        )
                                            onClickRole(player.name, 'supp', e)
                                    }}
                                    className={
                                        style.align_center +
                                        ' ' +
                                        style.cell_checkbox +
                                        ' ' +
                                        (player.active && roleStatus[2] &&
                                            lookupRole(player.name, 'supp') &&
                                            style.active)
                                    }>
                                    {player.active && roleStatus[2] &&
                                    lookupRole(player.name, 'supp')
                                        ? '✓'
                                        : '✗'}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
