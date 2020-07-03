import React, { useState,useEffect } from 'react'
import heroes from '../../assets/union.png'
import logo from '../../assets/logo1.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiLogOut, FiPower, FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'


const iniState={
    info:{title:'',description:'',value:0}
}
const Incidents = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const ong = localStorage.getItem('ong')
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ong
                }
            })

            history.push('/profile')

        } catch (error) {
            alert('Problema ao tentar criar caso, tente novamente...')
        }


    }
    
    function clear(){
        setValue(null)
        setTitle('')
        setDescription('')
    }

    return (
        <div className="new-incidents">
            <div className="content">
                <section>
                    <img src={logo} alt="Logo" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente</p>
                    <Link to='/profile' className="back-link">
                        <FiArrowLeft color={"#7079f8"} size={17} />
                        <span>Voltar para páfigina de casos</span>
                    </Link>

                </section>

                <form onSubmit={handleSubmit} onReset={clear}>
                    <input  placeholder="Tipo do caso"
                        value={title} onChange={e => setTitle(e.target.value)}
                    />
                    <textarea placeholder="Descrição do caso" value={description} onChange={e => setDescription(e.target.value)}>
                        Descrição
                    </textarea>
                    <input  placeholder="Valor em reais"
                        value={value} onChange={e => setValue(e.target.value)}
                    />

                    <div className="btn-group">
                        <button className="btn-cancelar" style={{ width: 100 }}  type="reset" >Cancelar</button>
                        <button className="btn-cadastrar" type="submit">Cadastrar</button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Incidents