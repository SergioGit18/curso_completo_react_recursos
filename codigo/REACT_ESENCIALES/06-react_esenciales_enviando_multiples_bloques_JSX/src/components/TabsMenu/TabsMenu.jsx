export default function TabsMenu({buttons, children}){

    return (
        <>
            <menu>
                {buttons}
            </menu>
            {children}
        </>
    );
}