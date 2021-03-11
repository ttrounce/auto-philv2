import React, { useEffect, useState } from 'react'
import style from '../../styles/main.module.sass'

export default function Log(props) {
    return (
        <div className={style.bubble}>
            <h3>Active Teams</h3>
            <table className={style.column}>
                <thead>
                    <tr>
                        <th>Strike Team 404 <button className={style.light_button} style={{marginLeft: '5px'}}>Select Winner</button></th>
                        <th style={{fontWeight: 'normal'}}>vs</th>
                        <th>Raccoon Ravagers <button className={style.light_button} style={{marginLeft: '5px'}}>Select Winner</button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={style.cell_selector}>SBDD</td>
                        <td></td>
                        <td className={style.cell_selector}>Congresscrab</td>
                    </tr>
                    <tr>
                        <td className={style.cell_selector}>Fool</td>
                        <td></td>
                        <td className={style.cell_selector}>Eagrill</td>
                    </tr>
                    <tr>
                        <td className={style.cell_selector}>GoSu</td>
                        <td></td>
                        <td className={style.cell_selector}>Doshite</td>
                    </tr>
                    <tr>
                        <td className={style.cell_selector}>Kroma</td>
                        <td></td>
                        <td className={style.cell_selector}>CRS</td>
                    </tr>
                    <tr>
                        <td className={style.cell_selector}>MPSenpai</td>
                        <td></td>
                        <td className={style.cell_selector}>Aribeth</td>
                    </tr>
                    <tr>
                        <td className={style.cell_selector}>Dominic</td>
                        <td></td>
                        <td className={style.cell_selector}>BuyTheBug</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
