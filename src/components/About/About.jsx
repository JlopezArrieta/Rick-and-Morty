import style from './About.module.css';

const About = () => {
    return (
        <div>
            <h1 className={style.estilodeRickTitulo}>App de Rick and Morty</h1>
            <img className={style.estilodeimgAbout} src="https://rare-gallery.com/thumbs/4553772-rick-sanchez-morty-smith-beth-smith-jerry-smith-summer-smith-rick-and-morty.jpg" 
            alt="Rick and Morty" />
            <p className={style.estilodetexto}>
            Rick y Morty (Rick and Morty) es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013. La serie sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. Dan Harmon, el cocreador de la serie y Justin Roiland son los encargados de las voces principales de Morty y Rick, la serie también incluye las voces de Chris Parnell, Spencer Grammer y Sarah Chalke.
            </p>
        </div>
    )
}

export default About;