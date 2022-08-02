function BannerCat({idcategoria}) {

    let titulo = '';
    let subtitulo = '';

    if (idcategoria === 'Identidad') {
        titulo = "Identidad Visual";
        subtitulo = "esto es identidad visual";
    } if (idcategoria === 'Packaging') {
        titulo = "Packagaing";
        subtitulo = "esto es Packagaing";
    } if (idcategoria === 'Redes') {
        titulo = "Redes";
        subtitulo = "esto es Redes";
    }

    return (
        <>
        <p>{idcategoria}</p>
        <p>{titulo}</p>
        <p>{subtitulo}</p>
        </>
    )
}

export default BannerCat;