export const styles = {
    forms: {
        display: 'flex',
        flexDirection: 'column',
        height: '80%',
        width: '65%',
        alignSelf: 'center',
        justifyContent: 'center',
        border: '1px solid black',
        padding: '2%',
        bMozBoxShadow: '0 0 10px #000000',
        'WebkitBoxShadow': '0 0 10px #000000',
        boxShadow: '0 0 10px #000000'
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
        display: 'flex',
        flexDirection: 'column',
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
    linkBox: {
        display: 'flex',
        flexDirection: 'column'
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

    disabled: {
        opacity: '.6'
    }

}