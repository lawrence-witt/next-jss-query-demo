import Link from 'next/link';
import { createUseStyles } from 'react-jss';

import TestBox from '../components/TestBox';

const useStyles = createUseStyles({
    localBox: () => ({
        width: "100%",
        height: 200,
        boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.4)",
        background: "pink",

        "@media (min-width: 400px)": {
            background: "orange"
        },

        "@media (min-width: 750px)": {
            background: "green"
        }
    })
})

const Home = () => {
    const { localBox } = useStyles();

    return (
        <>
            <div className={localBox}>
                <h3>This Local box should be:</h3>
                <p>pink above 0px</p>
                <p>orange above 400px</p>
                <p>green above 750px</p>
            </div>
            <TestBox />
            <Link href="/alt"><a>Go to Alt page</a></Link>
        </>
    )
}

export default Home;