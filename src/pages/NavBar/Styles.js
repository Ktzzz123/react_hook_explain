import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container:{
        padding: '0 20px',
        minHeight: '50px',
        // width:'100%',
        overflow: 'hidden',
        display:'flex',
        justifyContent: 'space-evenly',
        alignItems:'center',
        borderBottom:'1px solid #ddd',
        backgroundColor:'black',
        position: 'sticky',
        top: 0,
        color:'white',
    },
    btn:{
        height: '50px',
        display: 'block',
        backgroundColor:'black',
        color:'white',
        fontSize:'20px',
        padding:'10px',
        '&:hover': {
            backgroundColor: 'grey',
          }
    },
    btnHome:{

    },
     navbarItem:{
        display:'flex',
        alignItems:'center',
    },
})

export default useStyles;