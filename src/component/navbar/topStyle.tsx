import {makeStyles} from "@mui/styles";

const UseStyles = makeStyles(() => ({
    topNav: {
        display: 'flex',
        justifyContent: 'space-around',
        listStyleType: 'none',
        '& a': {
            color: 'white',
            textDecoration: 'none'
        },

    },
    topNavHeading: {
        fontWeight: 'bold'
    },
    header: {
// #f89921
        backgroundColor: '#f89921'
    },
    contact: {
        marginRight: '10px !important',
        textAlign:'center',
        '& p': {
            margin: 0
        }
    },
    contactNumber : {
        fontSize: 25,
        fontWeight: 'bold'
    },
    container: {
        paddingTop: 10,
        paddingBottom: 10
    }
}));


export default UseStyles
