import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import CloudUploadIcon from 'material-ui/svg-icons/file/cloud-upload'

const UploadingphotosV = (props) => (
  <div>
    {/* {(props.photoList.length == 0)
      ?
      <FlatButton
        label="木有照片在"
        labelPosition="before"
        disabled={true}
        icon={<CloudUploadIcon />}
        />
      :
      <Grid fluid>
        <Row>
          {props.photoList.map((photo) => {
            return (
              <Col style={{ marginBottom: 10 }}
                xs={12} sm={6} md={4} lg={3}
                key={photo._id}>
                <Paper zDepth={3} >
                  <img style={{ width: '96%', marginTop: '2%', marginLeft: '2%' }} src={photo.preview} />
                </Paper>
              </Col>
            )
          })
          }
        </Row>
      </Grid>
    } */}
  </div>
)

export default UploadingphotosV