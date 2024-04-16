import { useEffect } from "react";
import styled from "@emotion/styled"

// import styled from 'styled-components';
export default function MenuPage() {
    useEffect(() => {
        window.scroll(0, 0);
    })
    return (

        <MainContent>
            
        </MainContent>

    )
}

const MainContent = styled.div`
    width:90%;
    padding: 3% 0;
`