import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import frameimg from '../../assets/9159.jpeg'
import frameimg1 from '../../assets/2188603.png'

const randomImg = {
    image: 'https://picsum.photos/1000/750',
    images: 'https://picsum.photos/200',

}
const rounded5 = {
    borderRadius: "0.7rem",
}


const Test = () => {
    return (

        <Container>
            <Card style={{
                background: `url(${frameimg})`
            }} className="card-grid-lg card-overlay-bottom card-bg-scale card-bg-img mt-5 mb-5">

            </Card>
        </Container >

    )
}

export default Test


