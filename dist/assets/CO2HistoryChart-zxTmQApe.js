import{r as y,i as h,n as f,I as g,o as _,c as A,j as v,A as b}from"./index-UmRB-UCS.js";const L={title:{text:"气压数据24小时历史",left:"center"},tooltip:{trigger:"axis",axisPointer:{animation:!1}},legend:{top:"4%",data:["正气压","负气压"]},toolbox:{feature:{restore:{}}},axisPointer:{link:[{xAxisIndex:"all"}]},dataZoom:[{show:!0,start:30,end:70,xAxisIndex:[0,1]},{type:"inside",start:30,end:70,xAxisIndex:[0,1]}],grid:[{left:60,right:50,height:"35%"},{left:60,right:50,top:"55%",height:"35%"}],xAxis:[{type:"category",show:!0,boundaryGap:!1,axisLine:{onZero:!0},data:[]},{gridIndex:1,type:"category",boundaryGap:!1,axisLine:{onZero:!0},data:[],position:"top"}],yAxis:[{type:"value"},{gridIndex:1,type:"value",inverse:!0}],series:[{name:"正气压",type:"line",symbolSize:8,data:[],areaStyle:{}},{name:"负气压",type:"line",data:[],xAxisIndex:1,yAxisIndex:1,symbolSize:8,areaStyle:{}}]},O={class:"full",id:"ap-history"},D={__name:"APHistoryChart",setup(I){let l=L,d=y([]);const p=h(),s=(e,a)=>{try{v.post("online/range_query",{masterNum:"master01",sensorNum:["qy11"],time:p}).then(t=>{d.value=t.data,m(e,d.value,a)})}catch(t){console.error(t)}};function m(e,a,t){let i=a[0],r=[],c=[],o=[];for(let n of i)r.push(Math.abs(n.UAP)),c.push(Math.abs(n.DAP)),o.push(b(n.timest));t.xAxis[0].data=o,t.xAxis[1].data=o,t.series[0].data=r,t.series[1].data=c,e.setOption(t)}return f(()=>{let e=g("ap-history");s(e,l),window.addEventListener("resize",function(){e.resize()})}),(e,a)=>(_(),A("div",O))}},H={tooltip:{trigger:"axis"},title:{left:"center",text:"二氧化碳24小时历史"},legend:{data:[],top:"5%"},toolbox:{feature:{}},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{type:"value",boundaryGap:[0,"100%"],max:500},dataZoom:[{type:"inside",start:30,end:70},{start:30,end:70}],series:[]},w={class:"full",id:"co2-dom"},z={__name:"CO2HistoryChart",props:{co2Data:Array},setup(I){let l=y([]);const d=h(),p=async e=>{try{let a=["co211","co212","co213","co214","co215","co216","co217","co218"];v.post("online/range_query",{masterNum:"master01",sensorNum:a,time:d}).then(t=>{l.value=t.data,m(e,l.value)})}catch(a){console.error(a)}};let s=H;function m(e,a){s.series=[],s.xAxis.data=[];let t=[];for(let i=0;i<a.length;i++){let r={name:"",type:"line",symbol:"none",data:[]},c=a[i],o=[],n=[];for(let x of c)o.push(x.CO2),n.push(b(x.timest));r.data=o;let u="从站 0"+(i+1)+" CO2";t.push(u),r.name=u,r.data=o,s.xAxis.data=n,s.series.push(r)}s.legend.data=t,e.setOption(s)}return f(()=>{let e=g("co2-dom");p(e),window.addEventListener("resize",function(){e.resize()})}),(e,a)=>(_(),A("div",w))}};export{z as _,D as a};