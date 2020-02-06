export const styles = {
    button: {
        backgroundColor: 'rgb(235, 214, 214)',
        color: '#282c34',
        fontFamily: "'Open Sans Condensed', sans-serif",
        fontSize: 'medium',
        borderRadius: '3px',
        boxShadow: '5px 5px #1b1e24',
        margin: '5%',
        height: '15%',
        alignSelf: 'center'
    },
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
    // LANDING PAGE STYLING 
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
            fontWeight: 'bold'
        }
      }
    //   END LANDING PAGE STYLING 
}