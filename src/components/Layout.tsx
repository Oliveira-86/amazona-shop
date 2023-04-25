import { AppBar, Toolbar, Container, Typography } from '@mui/material'
import Head from 'next/head'
import { FC, ReactNode } from 'react'
import useStyles from '../styles'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const classes = useStyles()

  return (
    <div>
      <Head>
        <title>amazon</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>amazon</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Next Amazona.</Typography>
      </footer>
    </div>
  )
}

export default Layout
