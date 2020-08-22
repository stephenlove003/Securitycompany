import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardColumns, Button} from 'reactstrap';
    import { Carousel } from 'react-responsive-carousel';
    import "react-responsive-carousel/lib/styles/carousel.min.css";

    function RenderCard({item}) {

        return(
            
            <Card>

                

                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>

                </CardBody> 

            </Card>

        );
        
        
        
    }
    
  
function Home(props) {
    return(
     



          
        <div className="container">
            <h1>Our Services </h1>
      <CardColumns>
        <Card  body inverse style={{ backgroundColor: 'orange', borderColor: '#333' }}>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="secondary">Button</Button>
        </Card>
        <Card body inverse style={{ backgroundColor: 'royalblue', borderColor: '#333' }}>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="secondary">Button</Button>
        </Card>
        <Card body inverse style={{ backgroundColor: '#75fdc5', borderColor: '#333' }}>
          <CardBody >
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </Card>
        
        <Card body inverse color="primary">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="secondary">Button</Button>
        </Card>
      </CardColumns>


              <h1>Our Clients</h1>
          <Carousel >
                <div >
                    <img src="/assets/images/c1.jpg" />
                </div>
                <div>
                <img src="/assets/images/c2.jpg" />
                </div>
                <div>
                <img src="/assets/images/c3.jpg" />  
                </div>
                <div>
                    <img src="/assets/images/c4.jpg" />
                </div>
            </Carousel>
        
         </div> 
         
        
    );
    
}

 
           



export default Home;   