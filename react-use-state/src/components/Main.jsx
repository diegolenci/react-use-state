import languages from "../data/languages"
import Button from "./Button"
import Cards from "./Cards"
import { useState } from "react"

const Main = () => {
    
    const [selectedLanguages, setSelectedLanguages] = useState(null)

    const renderLanguages = () => languages.map( (languages) => {
        const active = selectedLanguages === languages
        return(
            <Button key={element.id} isActive={active} title={element.title} 
            onSelect={() => selectedLanguages(languages)}/> 
        )
    })

    const renderSelectedLanguages = () => {
        if( !selectedLanguages ) return <h3>Nessun linguaggio selezionato</h3>

        const { title, description } = selectedLanguages
        return (
            <Cards title={title} description={description} />
        )
    }
    
    return(
        <main className="container">
            <div className="mb-4">
                {renderLanguages()}
            </div>
            <div>
                {renderSelectedLanguages() }
            </div>
        </main>
    )
}

export default Main