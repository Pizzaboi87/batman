import { createGlobalStyle } from 'styled-components'

const NopageStyle = createGlobalStyle`
    .nav--banner, body {
        background-color: #0c8904;
    }

    .header, .footer {
        filter: invert(66%) sepia(100%) saturate(5461%) hue-rotate(81deg) brightness(110%) contrast(121%);
    }

    .clipped {
        background: black;
    }

    .header--background {
        filter: grayscale(0%);
    }

    .siluette {
        filter: invert(30%) sepia(85%) saturate(4524%) hue-rotate(83deg) brightness(68%) contrast(200%);
    }

    .header--background::before {
        height: 42%;
        position: absolute;
        bottom: -36%;
        filter: grayscale(0%);
        background: linear-gradient(to bottom, rgb(8,92,4,0.75), #0c8904);
    }

    .nav--link {
        color: #dddddd;
    }
    
    @media(orientation: portrait) {
        .nav--banner img {
            filter: invert(1); 
        }

        .nav--banner {
            background-color: transparent;
        }

        .activeMobile {
            background-color: rgba(12, 137, 4, 0.85);
        }

        .activeMobile .made {
            color: white;
        }
    }
`

export default NopageStyle;