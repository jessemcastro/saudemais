import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import ModalConfirm from './ModalConfirm'

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,
    },
}))

const CustomerCard = ({
    name,
    lastname,
    email,
    avatar,
    className,
}) => {
    const classes = useStyles()
  
    const [openModal, setOpenModal] = useState(false)

    const handleToggleModal = () => {
      setOpenModal(!openModal)
    }

    const handleConfirmModal = () => {
      alert('ok')
    }

    const handleRemoveCustomer = () => {
      handleToggleModal()
    }

  return (
    <>
      <Card className={classNames(className, classes.root)}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={avatar}>
              R
            </Avatar>
          }       
          title={`${name} ${lastname}`}
          subheader={email}
        />

        <CardActions disableSpacing>
          <IconButton aria-label="editar cadastro">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="remover cadastro" onClick={handleRemoveCustomer}>
            <DeleteIcon />
          </IconButton>   
        </CardActions>
      </Card>
      <ModalConfirm
      open={openModal}
      onClose={handleToggleModal}
      onConfirm={handleConfirmModal}
      title="Deseja realmente excluir este cadastro ?"
      message="Ao confirmar, não será possível reverter esta transação."
      />
    </>
  )
}

export default CustomerCard