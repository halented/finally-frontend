export const changeApp = () => {
//    to change btwn light and dark mode eventually
}

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"]

export const styles = {
    // REUSABLE PARTS:
    shadowed: {
        border: '1px solid black',
        padding: '2%',
        bMozBoxShadow: '0 0 10px #000000',
        'WebkitBoxShadow': '0 0 10px #000000',
        boxShadow: '0 0 10px #000000'
    },
    columnFlexbox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    fuzzed: {
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    modalContent: {
        backgroundColor: 'rgb(223, 218, 218)',
        color: '#282c34',
        bMozBoxShadow: '0 0 10px rgba(240, 234, 234, 0.5)',
        'WebkitBoxShadow': '0 0 10px rgba(240, 234, 234, 0.5)',
        boxShadow: '0 0 10px rgba(240, 234, 234, 0.5)',
        margin: '15% auto',
        padding: '15px',
        border: '1px solid #888',
        width: '70%'
    },
    closeModal: {
        color: '#aaa',
        float: 'right',
        fontSize: '28px',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    // END REUSABLE PARTS
    forms: {
        height: '80%',
        width: '65%',
        alignSelf: 'center',
        justifyContent: 'center'
    },

    //  LANDING PAGE STYLING 
    flipCard: {
        alignSelf: 'center',
        margin: '40vh',
        backgroundColor: 'transparent',
        width: '80%',
        height: '40px',
        perspective: '1000px'
    },
    flipCardInner: {
        position: 'relative',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        transition: 'transform 0.8s',
        transformStyle: 'preserve-3d',
        ':hover': {
            transform: 'rotateX(180deg)',
            cursor: 'pointer'
        }
    },
    flipBoxFront: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        border: '1px solid'
    },
    flipBoxBack: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        backgroundColor: 'rgb(235, 214, 214)',
        color: '#282c34',
        transform: 'rotateX(180deg)',
        border: '1px solid',
    },
    infoLinks: {
        fontSize: 'smaller',
        ':hover': {
            fontWeight: 'bold',
            cursor: 'pointer'
        }
      },
    infoPage: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoIcon: {
        maxWidth: '20%'
    },
    block: {
        margin: '15vh',
        width: '80vw'
    },
    //  END LANDING PAGE STYLING 
    signUpBase: {
        justifyContent: 'center'
    },
    signUpForm: {
        maxWidth: '30vh',
        alignItems: 'center',
        alignSelf: 'center',
    },
    signUpInput: {
        margin: '7.5%'
    },
    signUpImg: {
        alignSelf: 'center',
        width: 'calc(70px + 2vmin)',
        marginBottom: '5%'
    },
    
    //  NAVBAR STYLING
    navBox: {
        border: '1px solid black',
        padding: '5px',
        color: 'lightblue',
        MozBoxShadow: '0 0 10px #000000',
        'WebkitBoxShadow': '0 0 10px #000000',
        boxShadow: '0 0 10px #000000',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-around'
    },
    indicator: {
        boxShadow: '0 0 12px 6px lightgrey, 0 0 20px 12px rgb(235, 214, 214), 0 0 28px 18px #0ff',
        backgroundColor: 'rgb(235, 214, 214)',
        borderRadius: '50%',
        color: 'lightblue',
        maxWidth: '60%'
    },
    homeLink: {
        marginTop: '3%', 
        width: '100px', 
        height: '100px', 
        backgroundImage: 'url("../../images/icon.png")'
    },
    // END NAVBAR STYLING

    // HOME PAGE STYLING
    homeBase: {
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    topFriendsDiv: {
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: '2%',
        height: '90%',
        alignItems: 'center'
    },
    friendName: {
        fontSize: 'small'
    },
    buttonHolder: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    // END HOME PAGE STYLING
    friendCircle: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    disabled: {
        opacity: '.6'
    },

    // HANGOUTS PAGE STYLING
    hangBox: {
        border: '1px solid red',
        margin: '1em',
        width: '40%',
        padding: '2%'
    },
    outerHangBox: {
        alignItems: 'center',
        height: '100vh',
        overflow: 'scroll',
    },
    // END HANGOUTS PAGE STYLING
}