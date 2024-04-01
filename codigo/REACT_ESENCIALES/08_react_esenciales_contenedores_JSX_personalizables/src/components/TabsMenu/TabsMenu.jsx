export default function TabsMenu({buttons, children, ButtonsContainer}){

    return (
        <>
           <ButtonsContainer>

                {buttons}
           </ButtonsContainer>
           
            {children}
        </>
    );
}