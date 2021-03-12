import style from '../styles/modules/main.module.sass'

export default function ComponentTest() {
    return (
        <>
            <div className={style.main}>
                <div class={style.nav}>
                    <div className={style.title}>Nav Title</div>
                    <div className={style.nav_button}>Button A</div>
                    <div className={style.nav_button}>Button B</div>
                    <div className={style.nav_button}>Button C</div>
                </div>
            </div>
            <p></p>
            <div class={style.bubble}>
                <div className={style.std_button_lighten_5pc}>Standard Light Button</div>
                <div className={style.std_button}>Standard Dark Button</div>
                <div className={style.subtle_button}>Subtle Button</div>
            </div>
            <p></p>
            <div>
                <div className={style.std_button_lighten_5pc}>Standard Light Button</div>
                <div className={style.std_button}>Standard Dark Button</div>
                <div className={style.subtle_button}>Subtle Button</div>
            </div>
        </>
    )
}