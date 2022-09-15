import "./Card.css";

const Card = () =>{
    const hallo = () =>{
        console.log("Ik ben kaartje 1")
    }
    return(
        <article onClick={hallo}>
            <header>
                <h2>Eerste kaart</h2>
            </header>
            <section>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quidem mollitia quia maiores libero dolor veritatis, dolorum ut eveniet odio totam eos accusamus recusandae, velit, molestiae sunt incidunt nostrum impedit.
            </section>
        </article>
    )
}

export default Card;