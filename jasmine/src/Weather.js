class Weather {
  current() {
    let weatherTypes = ["clear", "stormy"]
    
    return weatherTypes[Math.floor(Math.random() * weatherTypes.length)]
  }
}