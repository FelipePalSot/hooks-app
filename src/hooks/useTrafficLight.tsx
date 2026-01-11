import { useEffect, useState } from "react";

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
  // blue: 'bg-blue-500 animate-pulse',
  // pink: 'bg-pink-500 animate-pulse',
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
    
    const [light, setLight] = useState<TrafficLightColor>('red'); // red seria el estado inicial
    const [countdown, setCountdown] = useState(5);

  //useEffect para el countdown
  useEffect(()=>{
    if(countdown === 0) return;
    
    //console.log({countdown});

    const intervalId = setInterval(()=>{
      //console.log('setInterval llamado');
      setCountdown((prev)=>prev-1);
    }, 1000);

    return()=>{
      //console.log('Cleanup effect');
      clearInterval(intervalId);
    }

  }, [countdown]); //useEffect renderiza cada vez que cambia una dependecia

  // Change light color effect
  useEffect(() =>{
    if( countdown > 0 ) return;
      console.log("iniciar")
      setCountdown(5);
      if(light === 'red'){
         console.log("voy a green")
        setLight('green');
        return;
      }
      if(light === 'yellow'){
         console.log("voy a red")
        setLight('red');
        return;
      }
      if(light === 'green'){
        console.log("voy a yellow")
        setLight('yellow');
        return;
      }
      return;
    

  },[countdown]);
    
    
    return{
        //properties
        countdown,
        light,
        colors,

        //computed
        percentage: (countdown / 5)*100,
        redLight: light === 'red' ? colors[light] : 'bg-gray-500',
        yellowLight : light === 'yellow' ? colors[light] : 'bg-gray-500',
        greenLight: light === 'green' ? colors[light] : 'bg-gray-500',
    };
};