export default function Section({title, id, className, children}){
    return (
        <section id={id} className={className}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}