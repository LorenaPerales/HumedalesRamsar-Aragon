var config = {
    style: 'mapbox://styles/lorenaperales/cmb6rbij900ob01r2833u6l0u',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibG9yZW5hcGVyYWxlcyIsImEiOiJjbWIyY2V3aWMxNDNwMmxzYW9sYTBnZDF0In0.REUUwsUB6vQg3XjeNIMLdw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'HUMEDALES RAMSAR EN ARAGÓN',
    subtitle: 'Humedales para la conservación de la diversidad biológica mundial y para el sustento de la vida humana a través del mantenimiento de los componentes, procesos y beneficios de sus ecosistemas.',
    byline: 'Lorena Perales Rodrigo',
    footer: 'Source: Red Natural de Aragón <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'LAGUNA DE GALLOCANTA',
            image: 'https://etheriamagazine.com/wp-content/uploads/2019/10/viaje-zaragoza-gallocanta-grullas-900x600.jpg',
            description: 'Es el mayor lago salino endorreico de la Península Ibérica. Cuenta con una rica y variada flora entre la que destacan importantes comunidades de especies halófilas. De importancia internacional para la anidación e invernada de aves acuáticas, la laguna de Gallocanta acoge al 80% de la población europea occidental de Grulla (Grus grus) durante su migración de otoño.',
            location: {
                center: [-1.528216, 40.994905],
                zoom: 13.50,
                pitch: 66,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'TREMEDALES DE ORIHUELA',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Rio_de_piedra_2.jpg',
            description: 'Situados en alta montaña (1.400 m.) en la región biogeográfica mediterránea, el entorno de los tremedales de Orihuela está dominado por grandes extensiones de bosque de pinos y salpicado de densas praderas que contiene cerca de 1.000 pequeñas turberas. Su flora, muy diversa y predominantemente mediterránea, distingue este complejo pantano de otros de Europa, al ofrecer hábitat a más de 600 especies de plantas, 32 de ellas endémicas. El sitio también alberga diferentes especies de anfibios, reptiles, aves, mamíferos e invertebrados, algunas amenazadas a nivel mundial, tal y como le ocurre al cangrejo de río europeo (Austropotamobius pallipes). El humedal es geológicamente interesante por las formaciones periglaciares, "ríos de piedra", sobre los que se han formado los tremedales.',
            location: {
                center: [-1.652992, 40.50922],
                zoom: 13.50,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'SALADAS DE SÁSTAGO-BUJARALOZ',
            image: 'data:image/jpeg;base64,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',
            description: 'Complejo endorreico de 26 lagos salinos situado en un ecosistema de estepa único en Europa Occidental debido a sus características geomorfológicas, geoquímicas, hidrológicas y ecológicas. Muchos de los lagos contienen agua sólo por períodos cortos de tiempo, después de precipitaciones intensas. El humedal es excepcionalmente rico en especies adaptadas específicamente a este tipo de ambientes salinos extremos. Contiene varias especies amenazadas, como el crustáceo Candelacypris aragonica, endémico de estos lagos de sal, así como 31 especies de flora también endémicas. Las Saladas también son de importancia cultural debido a su histórica explotación de sal. https://www.youtube.com/watch?v=F0lMpO2QETE',
            location: {
                center: [-0.200757, 41.429097],
                zoom: 13.50,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'SALADAS DE CHIPRANA',
            image: 'https://www.enjoyzaragoza.es/wp-content/uploads/2021/05/Reserva-Natural-de-las-Saladas-de-Chiprana-panoramica.jpg',
            description: 'Destaca por contar con la única laguna endorreica salada de aguas permanentes de Europa Occidental. La vegetación se compone de especies resistentes a la sal distribuidas de forma circular de acuerdo a los gradientes de salinidad e inundación. Incluye numerosas especies de mamíferos, reptiles y aves acuáticas y migratorias.',
            location: {
                center: [-0.175826, 41.240303],
                zoom: 13.50,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
