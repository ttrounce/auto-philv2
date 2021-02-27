import React, { useState } from 'react'
import mainStyle from '../../styles/main.module.css'

function submit(event, setTeams)
{
    event.preventDefault()
    
    const form = new FormData(event.target)
    console.log(form.getAll('active'));
}

function toggleAllActive(event, players, setPlayers)
{
    const checked = event.target.checked;
    var updatedPlayers = []
    for(let i in players)
    {
        var updated = players[i];
        updated.checked = checked;
        updatedPlayers.push(updated)
    }
    setPlayers(updatedPlayers)
}

function toggleActive(event, index, toggles, setFunction)
{
    const checked = event.target.checked;
    var updatedToggles = [];
    for(let i in toggles)
    {
        var toggle = toggles[i];
        if(i == index)
        {
            toggle.checked = checked;
        }
        updatedToggles.push(toggle);
    }
    setFunction(updatedToggles)
}

function toggleRole(event, index, players, role, setFunction)
{
    const checked = event.target.checked;
    var updatedToggles = [];
    for(let i in players)
    {
        var player = players[i];
        if(i == index)
        {
            player.roles.[role] = checked;
        }
        updatedToggles.push(player);
    }
    setFunction(updatedToggles)
}

function getPlayers()
{
    return [
        {
            name: "PhilvP",
            sr: {
                tank: 4514,
                dps: 3950,
                supp: 4343,
            }, 
            roles: {
                tank: true,
                dps: false,
                supp: true
            }
        },
        {
            name: "Lilgreyshark",
            sr: {
                tank: 5000,
                dps: 5000,
                supp: 5000,
            }, 
            roles: {
                tank: false,
                dps: false,
                supp: true
            }
        },
        {
            name: "Kroma",
            sr: {
                tank: 1023,
                dps: 2313,
                supp: 394
            },
            roles: {
                tank: true,
                dps: true,
                supp: true
            }
        }
    ]
}

export default function BalancerForm()
{
    var [players, setPlayers] = useState(getPlayers())
    var [teams, setTeams] = useState('')
    
    const playerHtml = []
    for(let i in players)
    {
        const player = players[i]
        playerHtml.push(
            <tr>
                <td><input name='active' value={player.name} type='checkbox' onClick={(e) => toggleActive(e, i, players, setPlayers)} checked={player.checked}></input></td>
                <td>{players[i].name}</td>
                <td>{players[i].sr.tank}</td>
                <td>{players[i].sr.dps}</td>
                <td>{players[i].sr.supp}</td>
                <td><input type='checkbox' onClick={(e) => toggleRole(e, i, players, 'tank', setPlayers)} checked={players[i].roles.tank}></input></td>
                <td><input type='checkbox' onClick={(e) => toggleRole(e, i, players, 'dps', setPlayers)} checked={players[i].roles.dps}></input></td>
                <td><input type='checkbox' onClick={(e) => toggleRole(e, i, players, 'supp', setPlayers)} checked={players[i].roles.supp}></input></td>
            </tr>
        )
    }

    return (
        <div>
            <h3 className={mainStyle.no_margin}>Balancer</h3>
                
            <form onSubmit={(e) => submit(e, setTeams)}>
                <table cellSpacing='0' className={mainStyle.table}>
                    <colgroup span='2'></colgroup>
                    <colgroup span='2'></colgroup>
                    <thead>
                        <tr>
                            <th rowSpan='2'>Active<br></br><input onClick={(e) => toggleAllActive(e, players, setPlayers)} type='checkbox' value='all'></input></th>
                            <th rowSpan='2'>Player</th>
                            <th colSpan='3' scope='colgroup'>Skill Ratings</th>
                            <th colSpan='3' scope='colgroup'>Roles</th>
                        </tr>
                        <tr>
                            <th scope='col'>SR Tank</th>
                            <th scope='col'>SR DPS</th>
                            <th scope='col'>SR Supp</th>
                            <th scope='col'>Tank</th>
                            <th scope='col'>DPS</th>
                            <th scope='col'>Supp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playerHtml}
                    </tbody>
                </table>
                <button>Balance</button>
                <hr className={mainStyle.hr}></hr>
                <h4>Teams</h4>
                Blah blah insert teams here...
                {teams}
            </form>
        </div>
    )
}