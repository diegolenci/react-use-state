import languages from "../data/languages"
import Button from "./Button"
import Cards from "./Cards"

const Main = () => {
    return(
        <>
        
        <h1>Main</h1>
        {
            languages.map( (element) => {
                return (
                    <Button key={element.id} title={element.title}/> 
                )
            } )
        }
        
        <Cards />
        </>
        
    )
}

export default Main