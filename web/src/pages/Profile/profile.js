import React,{useEffect,useState} from 'react'
import heroes from '../../assets/union.png'
import logo from '../../assets/logo1.svg'
import { FiLogOut, FiPower, FiTrash2, FiTrash } from 'react-icons/fi'
import { Link,useHistory } from 'react-router-dom'
import api from '../../services/api'

import './styles.css'

const Profile = () => {
    const [incidents,setIncidents] = useState([])

    const ongName=localStorage.getItem('ongName')
    const ong=localStorage.getItem('ong')

    const history=useHistory()

    async function handleDeleIncidents(id){        
        try {
            const deleteItem=await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization:ong
                }
            })
            alert(`Item ${deleteItem.data.id} foi deletado` )

            setIncidents(incidents.filter(inc=>inc.id !== id))
        } catch (error) {
            alert('Deu error ao realizar operação de deletar')
        }

    }

    function handleLogout(e){
        localStorage.clear()
        history.push('/')
    }

    useEffect(()=>{
        api.get('profile',{
            headers:{
                Authorization:ong
            }
        }).then(resp=>setIncidents(resp.data))
    },[ong])

    return (
        <div className="profile-container">

            <header>
                <img src={logo} alt="Logo" />
                <span>Bem vindo, {ongName}</span>
                <Link className="button" to='/incidents/new' >Cadastrar novo caso</Link>

                <button type="button" className="btn-red" onClick={handleLogout}>
                    <FiPower color="#7079f8" size={18} />
                </button>
            </header>
            <ul>
                {incidents.map(inc=>(
                    <li key={inc.id}>
                        <strong>CASO:</strong>
                        <p>{inc.title}</p>
                        <strong>Descrição:</strong>
                        <p>{inc.description}</p>
                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inc.value)}</p>

                        <button type="button" onClick={()=>handleDeleIncidents(inc.id)}>
                            <FiTrash2 color="#f4f4f4" size={20} />
                        </button>

                    </li>
                ))}

                
            </ul>


        </div>
    )
}

export default Profile