*{
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    box-sizing: border-box;
}

body{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #06283D;
}

.container{
    position: relative;
    width: 400px;
    height: 105px;
    background: #fff;
    padding: 28px 32px;
    overflow: hidden;
    border-radius: 18px;
    font-family: 'Roboto', sans-serif;
    transition: 0.6s ease-out;
}

.search-box{
    width: 100%;
    height: min-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.search-box input{
    color: #06283D;
    width: 80%;
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    padding-left: 32px;
}

.search-box input::placeholder{
    font-size: 20px;
    font-weight: 500;
    color: #06283D;
    text-transform: capitalize;
}

.search-box button{
    cursor: pointer;
    width: 50px;
    height: 50px;
    color: #06283D;
    background: #dff6ff;
    border-radius: 50%;
    font-size: 22px;
    transition: 0.4s ease;
}

.search-box button:hover{
    color: #fff;
    background: #05456d;
}

.search-box i{
    position: absolute;
    color: #06283D;
    font-size: 28px;
}

.weather-box{
    text-align: center;
}

.weather-box img{
    width: 60%;
    margin-top: 30px;
}

.weather-box .temperature{
    position: relative;
    color: #06283D;
    font-size: 4rem;
    font-weight: 800;
    margin-top: 30px;
    margin-left: -16px;
}

.weather-box .temperature span{
    position: absolute;
    margin-left: 4px;
    font-size: 1.5rem;
}

.weather-box .description{
    color: #06283D;
    font-size: 22px;
    font-weight: 500;
    text-transform: capitalize;
}

.weather-details{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
}

.weather-details .humidity, .weather-details .wind{
    display: flex;
    align-items: center;
    width: 50%;
    height: 100px;
}

.weather-details .humidity{
    padding-left: 20px;
    justify-content: flex-start;
}

.weather-details .wind{
    padding-right: 20px;
    justify-content: flex-end;
}

.weather-details i{
    color: #2574a5;
    font-size: 26px;
    margin-right: 10px;
    margin-top: 6px;
}

.weather-details span{
    color: #2574a5;
    font-size: 22px;
    font-weight: 500;
}

.weather-details p{
    color: #2574a5;
    font-size: 14px;
    font-weight: 500;
}

.not-found{
    width: 100%;
    text-align: center;
    margin-top: 50px;
    scale: 0;
    opacity: 0;
    display: none;
}

.not-found img{
    width: 70%;
}

.not-found p{
    color: #1580c4;
    font-size: 22px;
    font-weight: 500;
    margin-top: 12px;
}

.weather-box, .weather-details{
    scale: 0;
    opacity: 0;
}

.fadeIn{
    animation: 0.5s fadeIn forwards;
    animation-delay: 0.5s;
}

@keyframes fadeIn{
    to {
        scale: 1;
        opacity: 1;
    }
}
