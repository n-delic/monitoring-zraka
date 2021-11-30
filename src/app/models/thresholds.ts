export class Thresholds {
  thresholds = [
  {
    name: 'pm25',
    data: [
      {value:60, color: '#00ff00'},
      {value:90, color: '#FFFF00'},
      {value:120, color:'#FFA500'},
      {value:250, color: '#FF4500'},
       {value:305, color: '#ff0000'}
     ]
  },
  {
    name: 'pm10',
    data: [
      {value: 100, color: '#00ff00'},
      {value: 250, color: '#FFFF00'},
      {value: 350, color:'#FFA500'},
      {value: 430, color: '#FF4500'},
      {value: 550, color: '#ff0000'}
    ]
  },
  {
    name: 'no2',
    data: [
      {value: 43,color: '#00ff00'},
      {value: 96, color: '#FFFF00'},
      {value: 149, color:'#FFA500'},
      {value: 213, color: '#FF4500'},
      {value: 750, color: '#ff0000'}
    ]
  },
  {
    name: 'so2',
    data: [
      {value: 40,color: '#00ff00'},
      {value: 80, color: '#FFFF00'},
      {value: 480, color:'#FFA500'},
      {value: 800, color: '#FF4500'},
      {value: 1600, color: '#ff0000'}
    ]
  }
];

}
