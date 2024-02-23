import componentsImage from './assets/blocks-logo.png';
import jsxImage from './assets/mix-logo.webp';
import propsImage from './assets/settings-icon.png';
import stateImage from './assets/state-logo.png';

export const CORE_CONCEPTS = [
    {
        imagePath: componentsImage,
        title: 'Componentes',
        description: 'El núcleo principal de construcción de una UI con React. La combinación de distintos componentes logra una composición de una UI más manejable.'
    },
    {
        imagePath: jsxImage,
        title: 'JSX',
        description: 'Una combinación de código JS Y HTML. Retorna contenido HTML potencialmente dinámico que será renderizado para componer la UI.'
    },
    {
        imagePath: propsImage,
        title: 'Props',
        description: 'Proporcionan a los componentes la capacidad de poder tener atributos personalizables para que estos reciban información.'
    },
    {
        imagePath: stateImage,
        title: 'States',
        description: 'Principales manejadores de datos en React, cuando encuentran un cambio en los datos obligan al componente a re-renderizarse y actualizar la interfaz.'
    }
];