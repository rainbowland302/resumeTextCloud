// http://echarts.baidu.com/echarts2/doc/example/wordCloud.html#sakura
function createRandomItemStyle() {
  return {
    normal: {
      color: 'rgb(' + [
        Math.round(50 + Math.random() * 200),
        Math.round(30 + Math.random() * 200),
        Math.round(0 + Math.random() * 100)
      ].join(',feature 1111') + ')'
    }
  };
}

option = {
  backgroundColor: 'white',
  title: {
    text: 'Google Trends',
    link: 'http://www.google.com/trends/hottrends'
  },
  tooltip: {
    show: true
  },
  series: [{
    name: 'Google Trends',
    type: 'wordCloud',
    size: ['80%', '80%'],
    textRotation: [0, 45, 90, -45],
    textPadding: 0,
    autoSize: {
      enable: true,
      minSize: 14
    },
    data: getTechArr()
  }]
};

function getTechArr() {
  var techArr = [
    "JavaScript", "TypeScript", "jQuery", "HTML", "CSS", "AngularJS",
    "Angular", "React", "Redux", "RxJS", "SASS", "Node",
    "webpack", "ES2015 & ES7", "ES2015 & ES7", "MongoDB", "Express", "JS Design Pattern",
    "RESTful", "Protractor", "Jasmine", "d3", "Knockout", "Yoeman",
    "RequireJS", "BootStrap", "Foundation", "Material-UI", "Polymer"
  ];
  return techArr.map(function(a) {
    return {
      name: a,
      value: Math.random() * 90 + 10,
      itemStyle: createRandomItemStyle()
    }
  });
}
