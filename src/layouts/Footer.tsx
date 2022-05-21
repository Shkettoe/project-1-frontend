const quote = require('../assets/images/Quotes.png')

const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <img src={quote} />
                <p>All Rights Reserved | skillupmentor.com</p>
            </div>
        </footer>
    )
}

export default Footer