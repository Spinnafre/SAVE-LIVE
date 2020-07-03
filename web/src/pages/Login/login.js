import React, { useState,useEffect } from 'react'
import heroes from '../../assets/job.png'
import logo from '../../assets/logo1.svg'
import { FiLogOut } from 'react-icons/fi'
import { FcLike } from 'react-icons/fc'
import { Link,useHistory } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'
import { useLocation } from "react-router-dom"

const Home =  () => {
    const [id, setId] = useState('')
    const history=useHistory()
   

    async function handleLogin(e) {
        e.preventDefault()

        try {
            const response = await api.post('session', { id })
            
            localStorage.setItem('ong',id)
            localStorage.setItem('ongName',response.data.name)

            history.push('/profile')
            
        } catch (error) {
            alert('Falha no Login, usuário inexistente')
        }
    }

    
    return (
        <div className="form-container">

            <section className="form">
                <img id="img1" src={logo} alt="Logo Save LIFE" />
                <form onSubmit={handleLogin} >
                    <h1>Faça o seu login</h1>
                    <input type="text" id="login" name="login" value={id} placeholder="Digite o seu Id" 
                    onChange={e=>setId(e.target.value)}
                    />
                    <button type="submit" className="btn-red">Enviar</button>
                </form>

                <Link className="back-link" to="/register">
                    <FiLogOut color={"#7079f8"} size={17} />
                    <span>Ainda não sou cadastrado</span>
                </Link>

            </section>
            <img id="img2" src={heroes} alt="" />
            <div id="Footer">
                <FcLike color={"#7079f8"} size={20} style={{marginRight:10}}/>
                <h3>Desenvolvido por Davi</h3>
            </div>

        </div>
    )
}

export default Home