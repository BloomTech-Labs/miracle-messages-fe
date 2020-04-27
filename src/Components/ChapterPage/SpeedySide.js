import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const actions = [
    { icon: <FacebookIcon />, name: 'Facebook' },
    { icon: <TwitterIcon />, name: 'Twitter' },
    { icon: <InstagramIcon />, name: 'Instagram' },
    { icon: <AlternateEmailIcon />, name: 'Email' },
  ];

  const useStyles = makeStyles((theme) => ({
    root: {

        display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const SpeedySide = props => {
    const { member } = props;
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleOpen = () => {
      setOpen(true);
    };
    return (
        <div>
            <SpeedDial
                ariaLabel="SpeedDial example"
                className={classes.speedDial}
                icon={<Avatar  alt={member.name} src={member.photo} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                direction='right'
              >
                {actions.map((action) => (
                  <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={handleClose}
                  />
                ))}
              </SpeedDial>
              <p>{member.name}</p>
        </div>
    )
}

export default SpeedySide