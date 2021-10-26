import { useState, useEffect } from 'react'
import axios from 'axios'
import CustomerCard from '../components/CustomerCard'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { Button } from '@mui/material'
import PersonAddIcon from '@material-ui/icons/PersonAdd'



const useStyles = makeStyles((theme) =>({
    root: {
        flexGrow: 1,
    },
    card: {
        margin: theme.spacing(2),
    }
}))

const Professors = () => {
    const history = useHistory()
    const classes = useStyles()
    const [professors, setProfessors] = useState([])

        useEffect(() => {
            axios.get('https://reqres.in/api/users?page=2')
                .then(response => {
                    const { data } = response.data

                    setProfessors(data)
                })
        }, [])


    
    return (
        
        <div>
              <Button color="success" variant="contained" onClick={() =>history.push('/formProfessors')}><PersonAddIcon/>. Novo Professor</Button>
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