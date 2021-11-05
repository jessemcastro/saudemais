import { useState, useEffect } from 'react'
import axios from 'axios'
import CustomerCard from '../components/CustomerCard'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { Button } from '@mui/material'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import ModalForm from '../components/ModalForm'
import '../styles.scss'



const useStyles = makeStyles((theme) =>({
    root: {
        flexGrow: 1,
    },
    card: {
        margin: theme.spacing(2),
    }
}))


const Professors = () => {
    const classes = useStyles()
    const [professors, setProfessors] = useState([])
    const  [isModalVisible, setIsModalVisible] = useState(false);
        useEffect(() => {
            axios.get('https://reqres.in/api/users?page=2')
                .then(response => {
                    const { data } = response.data

                    setProfessors(data)
                })
        }, [])


    
    return (
        
        <div>
              <Button color="success" variant="contained" onClick={()=>setIsModalVisible(true)}><PersonAddIcon/> Novo Professor</Button>
              {isModalVisible ? <ModalForm onClose = {() => setIsModalVisible(false)} >
                <h2 className = 'Titulo'>Cadastro Novo Professor</h2>
               <div className = 'FormProf'>
                    <form>
                      <div className = 'FormProfLabel'>
                    <label>Nome Completo:</label><br/>
                    <input type ="text" placeholder = 'Ex. João da Silva'></input>
                    </div>
                    <div className = 'FormProfLabel'>
                    <label>CPF:</label><br/>
                    <input type ="cpf"  placeholder = 'Ex. xxx.xxx.xxx-xx'></input>
                    </div>
                    <div className = 'FormProfLabel'>
                    <label>Email:</label><br/>
                    <input type ="email"  placeholder = 'Ex. email@email.com'></input>
                    </div>
                    <div className = 'FormProfLabel'>
                    <label>Telefone:</label><br/>
                    <input type ="text"  placeholder = '(xx)x xxxx-xxxx'></input>
                    </div>
                    <div className = 'FormProfLabel'>
                    <label>Endereço Completo:</label><br/>
                    <textarea rows="4" cols="52"></textarea>
                    </div>
                   <div className = 'FormProfButton'>  
                   <Button color="success" variant="contained" onClick={()=>setIsModalVisible(true)}>SALVAR</Button>
                   </div>
                    </form>
               </div>
              </ModalForm> : null}
             
            <Grid container>
               
                {
                    
                    professors.map(item => (
                        <Grid item xs={12} md={4}>
                            <CustomerCard
                                name={"Prof. " + item.first_name}
                                lastname={item.last_name}
                                email={item.email}
                                avatar={item.avatar}
                                className={classes.card}
                            />
                        </Grid>
                    ))
                }
               
            </Grid>
        </div>
    )
  }
  
  export default Professors