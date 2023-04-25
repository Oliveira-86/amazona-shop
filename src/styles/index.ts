import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#FFF',
      marginLeft: 10,
    },
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
  },
  card: {
    borderRadius: 15,
  },
  image: {
    '&:hover': {
      scale: '102%',
      objectFit: 'cover',
      transition: ' width 2s, height 4s',
    },
  },
})

export default useStyles
