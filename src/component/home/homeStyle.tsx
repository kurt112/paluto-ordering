import {makeStyles} from "@mui/styles";

const UseStyles = makeStyles(() => ({
    textImage: {
        position:'absolute',
        margin: 0,
        top: '50%',
        left: '50%',
        textAlign:'center',
        textShadow: '0px 4px 3px rgba(0,0,0,0.4),\n' +
            '               0px 8px 13px rgba(0,0,0,0.1),\n' +
            '               0px 18px 23px rgba(0,0,0,0.1)',
        '& h1': {
            // background:'white',
            fontSize: 50,
            color: '#f89921'
        },
        '& p': {
            color:'white',
            fontSize: 30,
        },
        transform: 'translate(-50%, -50%)',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'
    },
    container: {
        height: 900,
        position: 'relative',
        textAlign: 'center'
    }
}));


export default UseStyles
