import React,{ Component } from 'react';
import './App.css';
import {Modal,ModalBody,Button} from 'reactstrap'; 




export default class App extends Component {

  constructor(props)
    {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.boxClick1=this.boxClick1.bind(this);
        this.boxClick2=this.boxClick2.bind(this);
        this.boxClick3=this.boxClick3.bind(this);
        this.state={
          isModalOpen:false,
          bgColor1: "white",
          bgColor2: "white",
          bgColor3: "white",
          bColor1:"#20D5B9",
          bColor2:"#20D5B9",
          bColor3:"#20D5B9",

      };
  }
        

  toggleModal()
    {
            this.setState({
                isModalOpen: !this.state.isModalOpen
             });
    }

    
  boxClick1 = (e) => {
    this.setState({
      bgColor1: "#20D5B9",
      bgColor2: "white",
      bgColor3: "white",
      bColor1:"teal",
      bColor2:"#20D5B9",
      bColor3:"#20D5B9",
    })
  }
  boxClick2 = (e) => {
    this.setState({
      bgColor2: "#20D5B9",
      bgColor3: "white",
      bgColor1: "white",
      bColor2:"teal",
      bColor1:"#20D5B9",
      bColor3:"#20D5B9",
    })
  }
  boxClick3 = (e) => {
    this.setState({
      bgColor3: "#20D5B9",
      bgColor2: "white",
      bgColor1: "white",
      bColor3:"teal",
      bColor2:"#20D5B9",
      bColor1:"#20D5B9",
    })
  }

  render() {
    
    return (
      <div>
        <div className="container d-flex justify-content-center m-5" >
      <Button outline onClick={this.toggleModal}>
        <span>Click to open a modal</span>
      </Button>
      </div>
      
      <div >  
      <Modal  isOpen={this.state.isModalOpen} toggle={this.toggleModal}  >
    <div className="my-modal">
                       <ModalBody className="body1">
                            <div className="header">
                                <p>Waste Reduction</p>
                                <p style={{ fontSize:13 }}>Reducing our waste is a key part of our sustainability strategy.What
                                 are the three priorities?You may need to refer to
                                 <a href="https://www.oursustainabilityplan.com/">www.oursustainabilityplan.com</a></p>

                            </div>
                            <div class="content">
                              
                              <div className="section" style={{backgroundColor: this.state.bgColor1}} onClick={this.boxClick1}>
                              <div className="zone" style={{backgroundColor: this.state.bColor1}}>
                                A
                              </div>
                                  <p>Eliminate or recycle all Single Use Plastics, encourage use of re-usable 
                                    cups and segregate waste streams.</p>
                              </div>
                              <div className="section" style={{backgroundColor: this.state.bgColor2}} onClick={this.boxClick2}>
                              <div className="zone" style={{backgroundColor: this.state.bColor2}} >
                                B
                              </div>
                                  <p>Eliminate or recycle all Single Use Plastics, review all our material use ans reduce total 
                                    waste by 30% by 20205, install segregated recyclable waste stream bins in all offices, canteens
                                     and workspaces.</p>
                              </div>
                              <div className="section" style={{backgroundColor: this.state.bgColor3}} onClick={this.boxClick3}>
                              <div className="zone" style={{backgroundColor: this.state.bColor3}}>
                                C
                              </div>
                                  <p>Eliminate or recycle all Single Use Plastics, move all plastics to recyclable polymers and segregate 
                                    recyclable waste streams.</p>
                              </div>
                            </div>
                            <div className="d-flex justify-content-md-center">
                                <button class="button">Submit</button>
                                
                            </div>
                    </ModalBody>
                    </div>
                </Modal>
              
      </div>
      </div>
    );

  }
}