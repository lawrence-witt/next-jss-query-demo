import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    test: () => ({
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

const TestBox = () => {
    const { test } = useStyles();

    return (
        <div className={test}>
            <h3>This Shared box should be:</h3>
            <p>pink above 0px</p>
            <p>orange above 400px</p>
            <p>green above 750px</p>
        </div>
    )
}

export default TestBox;