import React, { useState,useEffect } from 'react'
import heroes from '../../assets/union.png'
import logo from '../../assets/logo1.svg'
import { Link,useHistory } from 'react-router-dom'
import { FiLogOut, FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history=useHistory()

    
    async function handleSubmit(e) {
        e.preventDefault()
        
        const data={
            name,
            email,
            whatsapp,
            city,
            uf
        }

        try {
            const response=await api.post('ongs',data)
            alert(`Seu cadastro foi realizado com sucesso, ID: ${response.data.id}`)
            history.push('/')

            
        } catch (error) {
            alert('Erro na operação de cadastro')
        }

    }

    return (
        <div className="register-container">
            <div className="content">

                <section >
                    <img src={logo} alt="Logo" />
                    <h1>Cadastro</h1>
                    <p>Faça o seu cadastro e ajuda pessoas a encrontrarem a sua ONG</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft color={"#7079f8"} size={17} />
                        <span>Voltar ao Logon</span>
                    </Link>
                </section>

                <form className="form" onSubmit={handleSubmit}>
                    <input type="text" id="name" name="name" placeholder="Nome da ONG"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />

                    <input type="email" id="email" name="email" placeholder="E-mail"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />

                    <input type="text" id="whatsapp" name="whatsapp" placeholder="Whatsapp"
                        onChange={e => setWhatsapp(e.target.value)}
                        value={whatsapp}
                    />

                    <div className="form-group">
                        <input type="text" id="city" name="city" placeholder="Cidade"
                        onChange={e => setCity(e.target.value)}
                        value={city}
                        />
                        <input type="text" id="uf" name="uf" placeholder="UF" style={{ width: 100 }}
                        onChange={e => setUf(e.target.value)}
                        value={uf}
                        />
                    </div>

                    <button type="submit" className="btn-red">Cadastrar</button>

                </form>
            </div>

        </div>
    )
}

export default Register