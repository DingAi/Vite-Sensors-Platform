import{u as f,_ as h,S as y,a as g,b as w,E as x}from"./SoilSensors-SwJTQkkx.js";import{g as b,a as D,b as S}from"./master-api-b45Y5iWU.js";import{r as N,m as d,n as q,c as C,b as e,w as i,q as E,e as u,o as A,a as n,d as s}from"./index-UmRB-UCS.js";const B={class:"full"},H={class:"base-div"},P={class:"base-div"},$={class:"base-div"},k={class:"base-div"},M={class:"base-div"},p=6,z={__name:"SlaveStation-6",setup(O){const c=N("Master 01 : Slave01"),v=f().getSwitchData();let t=d({}),r=d({});const o=d({}),m=async()=>{try{const a=await b(p);t.in_temperature=a.data.inTemperature,t.ex_temperature=a.data.exTemperature,t.in_humidity=a.data.inHumidity,t.ex_humidity=a.data.exHumidity,t.illumination=a.data.illumination,t.time=E(a.data.time)}catch(a){console.error(a)}try{const a=await D(p);o.layer1=a.data.layer01,o.layer2=a.data.layer02,o.layer3=a.data.layer03,o.layer4=a.data.layer04,o.layer5=a.data.layer05}catch(a){console.error(a)}try{const a=await S();r.uap=a.data.UAP,r.dap=a.data.DAP}catch(a){console.error(a)}};return m(),q(()=>{setInterval(()=>{m()},5e3)}),(a,V)=>{const l=u("el-col"),_=u("el-row");return A(),C("div",B,[e(_,{gutter:20,class:"base-row"},{default:i(()=>[e(l,{span:18,xs:24,class:"line-div p-2"},{default:i(()=>[n("div",H,[e(h,{CO2:s(t).carbon_dioxide,time:s(t).time,pageName:c.value,linesData:s(t)},null,8,["CO2","time","pageName","linesData"])])]),_:1}),e(l,{span:6,xs:24,class:"p-2"},{default:i(()=>[n("div",P,[e(y,{soil_data:o},null,8,["soil_data"])])]),_:1})]),_:1}),e(_,{gutter:20,class:"base-row"},{default:i(()=>[e(l,{span:12,xs:24,class:"area-div p-2"},{default:i(()=>[n("div",$,[e(g,{illumination:s(t).illumination,time:s(t).time,pageName:c.value},null,8,["illumination","time","pageName"])])]),_:1}),e(l,{span:6,xs:24,class:"gauge-div p-2"},{default:i(()=>[n("div",k,[e(w,{ap:{uap:s(r).uap,dap:s(r).dap}},null,8,["ap"])])]),_:1}),e(l,{span:6,xs:24,class:"p-2"},{default:i(()=>[n("div",M,[e(x,{equipments:s(v),pageName:c.value},null,8,["equipments","pageName"])])]),_:1})]),_:1})])}}};export{z as default};
