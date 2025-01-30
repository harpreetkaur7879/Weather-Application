import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";


export default function InfoBox({info}) {
    const INIT_URL="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"

    const HOT_URL="https://media.istockphoto.com/id/979270938/photo/sun-light-on-dramatic-moody-sky-with-cloud.jpg?s=612x612&w=0&k=20&c=ysbKRPY9ZFsnU-mu8Rp4EXb14sxDgJVtjOVP14tXSxY=";
    const COLD_URL="https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1518803194621-27188ba362c9?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
    return(
        <div className="InfoBox">
            <div className="cardContainer">
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity>80
            ? RAIN_URL
            :info.temp>15
            ? HOT_URL
            :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{
             info.humidity>80
             ? <ThunderstormIcon />
             :info.temp>15
             ? <WbSunnyIcon/>
             :<AcUnitIcon/>
         }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp= {info.tempMin}&deg;C</p>
         <p>Max Temp= {info.tempMax}&deg;C</p>
         <p>The weather can be described as <i>{info.weather}</i> and feels like= {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
    );
}