import './index.scss'

// letterClass = class tha we want to add animation
// strArray = Array of the character in above class
//  index starting point of the characters

const AnimatedLetters = ({ letterClass, strArray, idx }) => {

    return (

        <span>
            {
                strArray.map((char, i) => (
                    <span key={char, i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters;