import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstromIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1641970304222-b2b332808a4b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"


    const HOT_URL="https://images.unsplash.com/photo-1615066037299-7fd7fe32686b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL="https://images.unsplash.com/photo-1701812589582-0262aa0ab115?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL="https://images.unsplash.com/photo-1626124902047-f3db8b02f740?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    return (
        <div className="InfoBox">
            
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 140 }}
            image={info.temp<=10 ? COLD_URL : info.humidity>80 ? RAIN_URL: HOT_URL}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">{info.city} {info.temp<=10 ? <AcUnitIcon/> : info.humidity>80 ? <ThunderstromIcon/>:<WbSunnyIcon/>}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <p>Temperature={info.temp}&deg;C</p>
                <p>Humidity={info.humidity}&deg;C</p>
                <p>Min Temp={info.tempMin}&deg;C</p>
                <p>Max Temp={info.tempMax}&deg;C</p>
                <p>The Weather cab be described as <i>{info.weather}</i> feels like {info.feelslike}&deg;C</p>
            </Typography>
            </CardContent>
        </Card>
        </div>
    </div>
    )
}