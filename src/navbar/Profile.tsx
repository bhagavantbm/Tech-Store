import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Button,
  Icon,
} from '@mui/material';

export const Profile: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'transparent', minHeight: '100px', py: 9 }}>
      <Container >
        <Grid container justifyContent="center" >
          <Grid item xs={5} sm={5} md={6} lg={5}>
            <Card sx={{ borderRadius: '30px',borderLeftStyle:'groove',borderBlockEndStyle:'groove',width:'600px',height:'500px',marginTop:'20px',borderRightStyle:'groove',backgroundColor:'transparent',borderBlockStartStyle:'groove',borderColor:'darksalmon' }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 180, borderRadius: 1, mr: 3 ,borderEndEndRadius:'30px',borderTopRightRadius:'30px'}}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNouSYF7SGHOcJxxOF7XyyMbzyNWD5abuwjQ&s"
                    alt="Generic placeholder"
                  />
                  <Box>
                    <Typography variant="h5" component="div" style={{color:'darkkhaki'}}>
                      Narendra Modi
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" style={{color:'darkkhaki'}}>
                      Prime-Minister(INDIA)
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        backgroundColor:'lightskyblue',
                        borderRadius: 1,
                        p: .9,
                        mt: 2,
                        mb: 2,
                        width:'300px',
                        height:'40px'
                      }}
                    >
                      <Box>
                        <Typography variant="body2" color="black">
                          Post
                        </Typography>
                        <Typography variant="body2">99</Typography>
                      </Box>
                      <Box>
                        <Typography variant="body2" color="black">
                          Followers
                        </Typography>
                        <Typography variant="body2">23.2M</Typography>
                      </Box>
                      <Box>
                        <Typography variant="body2" color="black">
                          Following
                        </Typography>
                        <Typography variant="body2">299</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 8 }}>
                    <Button variant="contained" fullWidth>
                        Follow
                      </Button>
                      <Button variant="contained" fullWidth>
                        Message
                      </Button>
                    
                    </Box>
                  </Box>
                </Box>
                <h1 style={{fontSize:'20px',color:'ButtonFace'}}>POSTS</h1>
                
               
                    <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    >
                     <CardMedia
                    component="img"
                    sx={{ width: 150, borderRadius: 1, mr: 3,height:120  }}
                    
                    image="https://www.thestatesman.com/wp-content/uploads/2022/09/03_Merged.jpg"
                    alt="Generic placeholder" 
                   
                  />
                  <CardMedia
                    component="img"
                    sx={{ width: 150, borderRadius: 1, mr: 3,height:120 }}
                    
                    image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/pm-narendra-modius-president-joe-biden-131526163-16x9_0.jpg?VersionId=qzID3yXcDiYCh2Mlu8_eddRknv2puWeE&size=690:388"
                    alt="Generic placeholder" 
                  />
                      <CardMedia
                    component="img"
                    sx={{ width: 150, borderRadius: 1, mr: 3,height:120  }}
                    
                    image="https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/23/full/1724388437-4577.jpg?im=FitAndFill=(826,465)"
                    alt="Generic placeholder" 
                  />
                    <CardMedia
                    component="img"
                    sx={{ width: 150, borderRadius: 1, mr: 3 ,marginTop:'15px'}}
                    
                    image="https://i.ytimg.com/vi/AKVlo2B65to/maxresdefault.jpg"
                    alt="Generic placeholder" 
                  />
                   <CardMedia
                    component="img"
                    sx={{ width: 150, borderRadius: 1, mr: 3 ,marginTop:'15px'}}
                    
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXS2Y5uVEPCuCfzYgn2TPwEhKZY80JjR_Vu5MJunZSAM3w3LzrrQRXTBSb4XKfE17Kkk&usqp=CAU"
                    alt="Generic placeholder" 
                  />
                                     <CardMedia
                    component="img"
                    sx={{ width: 150, borderRadius: 1, mr: 3 ,marginTop:'15px'}}
                    
                    image="https://www.hindustantimes.com/ht-img/img/2024/08/22/550x309/Poland-India-Modi-16_1724358908630_1724358944255.jpg"
                    alt="Generic placeholder" 
                  />



                    </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};


