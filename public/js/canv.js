$(function(){$("#container").highcharts({scrollbar:{enabled:!1},credits:{enabled:!1},chart:{margin:[0,0,0,0],backgroundColor:"transparent",type:"areaspline",animation:Highcharts.svg,marginRight:10,panning:!0,enableMouseTracking:!1,events:{load:function(){var e=this.series[0],a=e.data.length;this.addSeries({id:"end point",type:"scatter",marker:{enabled:!0,symbol:"circle",radius:4,fillColor:"#268d46",lineColor:"#268d46",lineWidth:2},data:[[e.data[a-1].x,e.data[a-1].y]],enableMouseTracking:!1}),this.addSeries({id:"end_point_two",type:"scatter",className:"highcharts-animation-1",marker:{enabled:!0,symbol:"none",radius:14,lineWidth:5,fillColor:"#268d46",lineColor:"#268d46"},data:[[e.data[a-1].x,e.data[a-1].y]],enableMouseTracking:!1});var t=this.get("end point"),n=this.get("end_point_two");setInterval(function(){var i=(new Date).getTime(),l=Math.random();a=e.data.length,e.addPoint([i,l],!0,!0),t.data[0].update([i,l]),n.data[0].update([i,l])},1e3)}}},title:{text:!1},xAxis:{type:"datetime",tickPixelInterval:150,tickInterval:2,labels:{enabled:!1}},yAxis:{scrollbar:{enabled:!1},tickInterval:2,gridLineWidth:0,minorGridLineWidth:0,title:!1,plotLines:!1,lineWidth:0,lineColor:"transparent",labels:{enabled:!1}},rangeSelector:{selected:1},tooltip:{enabled:!1},legend:{enabled:!1},exporting:{enabled:!1},plotOptions:{scrollbar:{enabled:!1},series:{scrollbar:{enabled:!1},threshold:null,color:"rgba(38, 141, 70, 0.4)",lineWidth:"2.5",marker:{enabled:!1,hover:{enabled:!1}},fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,Highcharts.Color("#268d46").setOpacity(.11).get("rgba")],[1,Highcharts.Color("#268d46").setOpacity(0).get("rgba")]]}}},series:[{threshold:null,name:"Random data",data:function(){var e,a=[],t=(new Date).getTime();for(e=-45;e<=0;e+=1)a.push({x:t+800*e,y:Math.random()});return a}(),enableMouseTracking:!1}]})});