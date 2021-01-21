import React, { Component } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import News from './AddNews'
import { Grid, Container } from '@material-ui/core';
import NewCard from './NewsCard'
class Home extends React.Component {

    constructor(props) {
      super(props);
      this.state={

      }

      this.data=[1,2,3]

      this.modelOpen=false;
    }

    handleModel = (val) => {
        this.modelOpen = val;
        this.forceUpdate();
    }

    viewMode = () => {

        this.handleModel(true)
    }

    render() {
        return(
            <div>
                <Container>
                {
                this.modelOpen ? 
                <News
                    modelOpen={this.modelOpen}
                    handleModel={this.handleModel}
                >
                </News> : null
                }
                <Button
                    variant="contained" color="primary"
                    style={{ backgroundColor: '#767F8C', color: 'white' }}
                    onClick={this.viewMode}>
                    Add News
                </Button>

                    <Grid
                        container
                        spacing={3}>
                            {
                            this.data.map((el, index)=>{
                                return(
                                    <Grid container item xs={4} style={{ fontFamily: 'uiRounded' }} key={index.toString()}>
                                        <NewCard
                                        
                                        />
                                    </Grid>
                                )
                            })
                            }
                    </Grid>

                </Container>
            </div>
        )
    }
}


export default Home;
