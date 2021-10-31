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
    id,
    name,
    lastname,
    email,
    avatar,
    className,
    onRemoveCustomer,
}) => {
    const classes = useStyles()
  
    const [openModal, setOpenModal] = useState(false)

    const handleToggleOpenModal = () => {
      setOpenModal(!openModal)
    }

    const handleConfirmModal = id => {
      onRemoveCustomer(id)
      handleToggleOpenModal()
    }

    const handleRemoveCustomer = () => {
      handleToggleOpenModal()
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
      onClose={handleToggleOpenModal}
      onConfirm={() => handleConfirmModal(id)}
      title="Deseja realmente excluir este cadastro ?"
      message="Ao confirmar, não será possível reverter esta transação."
      />
    </>
  )
}

export default CustomerCard