import React, { useEffect, useState } from 'react'
import style from '../../styles/main.module.sass'
import axios from 'axios'

function findPlayerIndex(players, playerName)
{
    const index = players.findIndex((element, i) => {
        if (element.name === playerName) {
            return true
        }
    })
    return index
}

export default function Balancer(props) {
    // const initPlayers = [
    //     {
    //         name: 'SortMan',
    //         active: false,
    //         tank: [2343, true],
    //         dps: [3342, true],
    //         supp: [2312, true]
    //     },
    //     {
    //         name: 'MrSorty',
    //         active: true,
    //         tank: [3230, true],
    //         dps: [1232, false],
    //         supp: [4312, true]
    //     },
    //     {
    //         name: 'AnotherExample',
    //         active: true,
    //         tank: [2312, false],
    //         dps: [234, true],
    //         supp: [3423, true]
    //     },
    //     {
    //         name: 'ExampleMan',
    //         active: true,
    //         tank: [653, false],
    //         dps: [2425, false],
    //         supp: [3423, true]
    //     }
    // ]

    const [players, setPlayers] = useState([])

    useEffect(() => {
        axios.get('/api/players').then(res => {
            setPlayers(res.data)
        })
    }, [])

    const onChangeRoleSR = (playerName, role, newValue) => {
        const updatedPlayers = players.slice()
        const i = findPlayerIndex(updatedPlayers, playerName)
        if(i >= 0)
        {
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
            <div>
                <button
                    style={{ margin: '0px 5px 5px 0px' }}
                    className={style.button}
                    onClick={onClickSelectAll}>
                    Select All Players
                </button>
                <button
                    style={{ margin: '0px 5px 5px 0px' }}
                    className={style.button}
                    onClick={onClickUnselectAll}>
                    Unselect All Players
                </button>
                <button
                    style={{ margin: '0px 5px 5px 0px' }}
                    className={style.button}>
                    Balance
                </button>
            </div>
            <table className={style.column}>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Tank</th>
                        <th>Damage</th>
                        <th>Support</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, i) => (
                        <tr key={player.name} id={player.name}>
                            <td
                                onClick={(e) => onClickPlayer(player.name, e)}
                                className={
                                    style.cell_selector +
                                    ' ' +
                                    (lookupPlayerActive(player.name)
                                        ? style.active_cell_selector
                                        : '')
                                }
                                id="name">
                                {player.name}
                            </td>
                            <td
                                onClick={(e) => {
                                    if(e.target.tagName !== 'INPUT' && player.tank[0] > 0)
                                        onClickRole(player.name, 'tank', e)
                                }}
                                className={
                                    style.cell_selector +
                                    ' ' +
                                    (lookupRole(player.name, 'tank')
                                        ? style.active_cell_selector
                                        : '')
                                }
                                id="tank">
                                {player.tank[0] > 0 ? (
                                
                                    <input
                                        onChange={(e) => {
                                            onChangeRoleSR(player.name, 'tank', e.target.value)
                                        }}
                                        type='number'
                                        value={
                                            player.tank[0]
                                        }>
                                    </input>
                                ) : (
                                    '---'
                                )}                                    
                            </td>
                            <td
                                onClick={(e) => {
                                    if(e.target.tagName !== 'INPUT' && player.dps[0] > 0)
                                        onClickRole(player.name, 'dps', e)
                                }}
                                className={
                                    style.cell_selector +
                                    ' ' +
                                    (lookupRole(player.name, 'dps')
                                        ? style.active_cell_selector
                                        : '')
                                }
                                id="dps">
                                {player.dps[0] > 0 ? (
                                
                                    <input
                                        onChange={(e) => {
                                            onChangeRoleSR(player.name, 'dps', e.target.value)
                                        }}
                                        type='number'
                                        value={
                                            player.dps[0]
                                        }>
                                    </input>
                                ) : (
                                    '---'
                                )}       
                            </td>
                            <td
                                onClick={(e) => {
                                    if(e.target.tagName !== 'INPUT' && player.supp[0] > 0)
                                        onClickRole(player.name, 'supp', e)
                                }}
                                className={
                                    style.cell_selector +
                                    ' ' +
                                    (lookupRole(player.name, 'supp')
                                        ? style.active_cell_selector
                                        : '')
                                }
                                id="supp">
                                {player.supp[0] > 0 ? (
                                
                                    <input
                                        onChange={(e) => {
                                            onChangeRoleSR(player.name, 'supp', e.target.value)
                                        }}
                                        type='number'
                                        value={
                                            player.supp[0]
                                        }>
                                    </input>
                                ) : (
                                    '---'
                                )}       
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
