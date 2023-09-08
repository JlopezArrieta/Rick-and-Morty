import { useState } from "react";
import validation from "./validation";
import styles from "./Form.module.css";

function Form({login}) {
const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: 'Por Favor Ingrese sus Datos...'
    })

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})  
        setErrors(validation({...userData, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        login(userData)
    }


    return (
        <div className={styles.divContainer}>
            <form className={styles.container} onSubmit={handleSubmit}>
            <h1 className={styles.loginStyle}>Login</h1>   
                <label>Email:</label>
                <input
                    type='text'
                    id='email'
                    name='email'
                    value={userData.email}
                    placeholder="Ingrese su email..."
                    onChange={handleChange}
                    className={errors.email && styles.warning}
                />
                 { errors.email && (<p className={styles.danger}>{errors.email}</p>) }

                <br />

                <label>Password:</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    value={userData.password}
                    placeholder="Ingrese su contraseña..."
                    onChange={handleChange}
                    className={errors.password && styles.warning}
                />
                 { errors.password && <p className={styles.danger}>{errors.password}</p> }

                <br />
                <button 
                type='submit'
                disabled={errors.email || errors.password}
                >Submit</button>
            </form>
        </div>
    )
}

export default Form;