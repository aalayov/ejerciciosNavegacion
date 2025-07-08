import { LanguageContext, useTranslation } from "./context/LanguageContext.jsx";
import { useContext } from "react";

function Home() {


    const { t } = useTranslation()

    return (
        <div>
            <div>
                <h1>{t('welcome')}</h1>
            </div>

        </div>
    )
}

export default Home;