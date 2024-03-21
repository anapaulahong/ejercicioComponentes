import profilePic from './yop.jpeg'

function Card(){
  return(
    <div class="card">
      <img class="card-image" src={yop} alt="profile picture"></img>
      <h2 class="card-title">nombre: paula</h2>
      <p class="card-text">descripcion: tarjetita</p>
    </div>
  )
}

export default Card