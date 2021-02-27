import React, { useState } from 'react'
import mainStyle from '../../styles/main.module.css'

function submit(event, setTeams)
{
    event.preventDefault()
    // Do calculations
    setTeams([
        'Team 1',
        'Team 2'
    ])
}

export default function BalancerForm()
{
    var [teams, setTeams] = useState('')
    return (
        <div>
            <h3 className={mainStyle.no_margin}>Balancer</h3>
            <form onSubmit={(e) => submit(e, setTeams)}>
                
            </form>
            <div>
                <table cellspacing='0' className={mainStyle.table}>
                    <colgroup span='2'></colgroup>
                    <colgroup span='2'></colgroup>
                    <tr>
                        <th rowSpan='2'>Active<br></br><input type='checkbox'></input></th>
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
                    <tr>
                        <td><input type='checkbox'></input></td>
                        <td>PhilvP</td>
                        <td>4514</td>
                        <td>3950</td>
                        <td>4343</td>
                        <td><input type='checkbox'></input></td>
                        <td><input type='checkbox'></input></td>
                        <td><input type='checkbox'></input></td>
                    </tr>
                    <tr>
                        <td><input type='checkbox'></input></td>
                        <td>Kroma</td>
                        <td>240</td>
                        <td>530</td>
                        <td>1047</td>
                        <td><input type='checkbox'></input></td>
                        <td><input type='checkbox'></input></td>
                        <td><input type='checkbox'></input></td>
                    </tr>
                </table>
                <hr className={mainStyle.hr}></hr>
                <h4>Teams</h4>
                Blah blah insert teams here...
                {teams}
            </div>
        </div>
    )
}