import './button-barra.css';
export const ButtonBarra = ({nombre, imagen}) => {
    return (
        <div>
            <button className="icon-button">
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                    <img src='https://m.media-amazon.com/images/S/pv-target-images/39a37508750ad9dc661caa4eee23b4b00e29c59a3916e15a7c9c5307cbd7fc39.jpg' className='image-top-right' alt='Descripción de la imagen'></img>
                </a>
            </button>
        </div>
    );
}