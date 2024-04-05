import Section from "../Section/Section";

export default function TabsMenu({
    buttons = <li><button>Boton por defecto</button></li>, 
    children = <p>Contenido por defecto</p>, 
    ButtonsContainer = "div"
}){

    return (
        <>
           <ButtonsContainer>

                {buttons}
           </ButtonsContainer>
           
            {children}
        </>
    );
}

// TabsMenu.defaultProps = {
//     buttons: <li><button>Boton de ejemplo</button></li>, 
//     children: <p>Texto de ejemplo</p>, 
//     ButtonsContainer: "menu"
// };