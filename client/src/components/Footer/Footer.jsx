import React from 'react'
import { Avatar, Paper } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import { display } from '@mui/system'
import logo from '../Image/sss.jpg'
import './Footer.scss'
import location from '../Image/location.png'
import mail from '../Image/4213413-email-envelope-gmail-google-latter-mail-message_115415.png'
import phone from '../Image/phone-handset_icon-icons.com_48252.png'
import payment from '../../assets/payment.svg'

const useSizes = makeStyles(theme => {
  return {
    root: { flexGrow: 1 },
    menuFooter: {
      display: 'flex',
      alignItems: 'center'
    },
    forIco: {
      marginLeft: 23
    },
    forContent: {
      color: 'rgba(61, 61, 61, 1)',
      fontSize: 14,
      marginLeft: 60,
      display: 'flex',
      alignItems: 'center'
    },
    forLastSectio: {
      zIndex: 100,
      height: 236,
      backgroundColor: '#FBFBFB',
      display: 'flex',
      justifyContent: 'flex-start',
      fontSize: 18
    },
    forDetails: {
      fontSize: 14
    },
    forFirsBox: {
      marginLeft: 23
    },
    forLastBoxes: {
      marginLeft: 140
    }
  }
})

const Footer = () => {
  const sizes = useSizes()
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Box
            className={sizes.menuFooter}
            style={{ backgroundColor: 'rgba(70, 163, 88, 0.1)', height: 88 }}
          >
            <Box className={sizes.menuFooter}>
              <Avatar src={logo} style={{ width: 35, height: 35 }} className={sizes.forIco} />
              <Typography variant="h6" style={{ color: '#46A358', marginLeft: 6, marginTop: 3 }}>
                {' '}
                GREENSHOP{' '}
              </Typography>
            </Box>
            <Typography variant="h6" className={sizes.forContent}>
              <Avatar
                src={location}
                variant="square"
                style={{ width: 30, height: 30, marginRight: 10 }}
              />
              70 West Buckingham Ave.
              <br /> Farmingdale, NY 11735{' '}
            </Typography>
            <Typography variant="h6" className={sizes.forContent}>
              <Avatar
                src={mail}
                variant="square"
                style={{ width: 20, height: 20, marginRight: 10 }}
              />{' '}
              contact@greenshop.com{' '}
            </Typography>
            <Typography variant="h6" className={sizes.forContent}>
              <Avatar
                src={phone}
                variant="square"
                style={{ width: 20, height: 20, marginRight: 10 }}
              />{' '}
              +88 01911 717 490{' '}
            </Typography>
          </Box>
        </AppBar>
      </Box>
      <Box className={sizes.forLastSectio}>
        <Box className={sizes.forFirsBox}>
          <Typography variant="h6">
            <b>My Account</b>
          </Typography>
          <Typography className={sizes.menuFooter}>My Acaunt</Typography>
          <Typography className={sizes.menuFooter}>Our Stories</Typography>
          <Typography className={sizes.menuFooter}>Contact us</Typography>
          <Typography className={sizes.menuFooter}>Career</Typography>
          <Typography className={sizes.menuFooter}>Specials</Typography>
        </Box>
        <Box className={sizes.forLastBoxes}>
          <Typography variant="h6">
            {' '}
            <b>Help & Guide </b>
          </Typography>
          <Typography className={sizes.forDetails}>Help Center</Typography>
          <Typography className={sizes.menuFooter}>How to Buy</Typography>
          <Typography className={sizes.menuFooter}>Shoping & Deliver</Typography>
          <Typography className={sizes.menuFooter}>Product Policy</Typography>
          <Typography className={sizes.menuFooter}>How to Return</Typography>
        </Box>
        <Box className={sizes.forLastBoxes}>
          <Typography variant="h6">
            <b> Categories </b>
          </Typography>
          <Typography className={sizes.menuFooter}>House Plants</Typography>
          <Typography className={sizes.menuFooter}>Potter Plants</Typography>
          <Typography className={sizes.menuFooter}>Seeds</Typography>
          <Typography className={sizes.menuFooter}>Small Plants</Typography>
          <Typography className={sizes.menuFooter}>Accessories</Typography>
        </Box>
        <Box className={sizes.forLastBoxes}>
          <Typography variant="h6">
            {' '}
            <b>Social Media </b>
          </Typography>
          <Typography variant="h6">
            <b>We accept</b>
          </Typography>
          <Avatar variant="square" src={payment} style={{ height: 26, width: 226, zIndex: 1 }} />
        </Box>
      </Box>
    </>
  )
}

export default Footer
