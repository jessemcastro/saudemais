import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import ShareIcon from '@material-ui/icons/Share'
import FavoriteIcon from '@material-ui/icons/Favorite'
import IconButton from '@material-ui/core/IconButton'


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
  

  return (
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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>   
      </CardActions>
    </Card>
  )
}

export default CustomerCard