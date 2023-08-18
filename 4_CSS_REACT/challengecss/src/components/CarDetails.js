import './CarDetails.css'

const CarDetails = ({ brand, color, km }) => {
  return (
    <div className='container-details'>
        <h2 className='title_details'>Detalhes do veículo</h2>
        <p>Marca: {brand}</p>
        <p>Cor: {color}</p>
        <p>Quilometragem: {km}Km</p>
    </div>
  )
}

export default CarDetails