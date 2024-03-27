import{r as v,G as d,m as h,c as f,b as e,w as i,H as y,I as g,J as w,K as x,C as D,o as S,a as o,d as s,B as b}from"./index-sFYcR1XN.js";import{u as N,_ as E,S as C,a as q,b as B,E as H}from"./SoilSensors-wzxgR_CO.js";const A={class:"full"},P={class:"base-div"},$={class:"base-div"},k={class:"base-div"},I={class:"base-div"},M={class:"base-div"},m=5,K={__name:"SlaveStation-5",setup(O){const c=v("Master 01 : Slave01"),p=N().getSwitchData();let t=d({}),r=d({});const l=d({}),_=async()=>{try{const a=await y(m);t.in_temperature=a.data.inTemperature,t.ex_temperature=a.data.exTemperature,t.in_humidity=a.data.inHumidity,t.ex_humidity=a.data.exHumidity,t.illumination=a.data.illumination,t.time=g(a.data.time)}catch(a){console.error(a)}try{const a=await w(m);l.layer1=a.data.layer01,l.layer2=a.data.layer02,l.layer3=a.data.layer03,l.layer4=a.data.layer04,l.layer5=a.data.layer05}catch(a){console.error(a)}try{const a=await x();r.uap=a.data.UAP,r.dap=a.data.DAP}catch(a){console.error(a)}};return _(),h(()=>{setInterval(()=>{_()},5e3)}),(a,V)=>{const n=b,u=D;return S(),f("div",A,[e(u,{gutter:20,class:"base-row"},{default:i(()=>[e(n,{span:18,xs:24,class:"line-div p-2"},{default:i(()=>[o("div",P,[e(E,{CO2:s(t).carbon_dioxide,time:s(t).time,pageName:c.value,linesData:s(t)},null,8,["CO2","time","pageName","linesData"])])]),_:1}),e(n,{span:6,xs:24,class:"p-2"},{default:i(()=>[o("div",$,[e(C,{soil_data:l},null,8,["soil_data"])])]),_:1})]),_:1}),e(u,{gutter:20,class:"base-row"},{default:i(()=>[e(n,{span:12,xs:24,class:"area-div p-2"},{default:i(()=>[o("div",k,[e(q,{illumination:s(t).illumination,time:s(t).time,pageName:c.value},null,8,["illumination","time","pageName"])])]),_:1}),e(n,{span:6,xs:24,class:"gauge-div p-2"},{default:i(()=>[o("div",I,[e(B,{ap:{uap:s(r).uap,dap:s(r).dap}},null,8,["ap"])])]),_:1}),e(n,{span:6,xs:24,class:"p-2"},{default:i(()=>[o("div",M,[e(H,{equipments:s(p),pageName:c.value},null,8,["equipments","pageName"])])]),_:1})]),_:1})])}}};export{K as default};
