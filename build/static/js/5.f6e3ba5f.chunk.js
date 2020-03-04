(this["webpackJsonpipc-catalogue"]=this["webpackJsonpipc-catalogue"]||[]).push([[5],{466:function(e,t,a){},468:function(e,t,a){e.exports={arrangerTable:"Search_arrangerTable__1U-uN"}},606:function(e,t,a){e.exports={test:"FileRepository_test__9HW-o"}},618:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(6),i=a(8),l=a(7),c=a(9),s=a(0),u=a.n(s),o=a(73),d=a(47),m=a(49),g=a(104),p=a.n(g),_=(a(466),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=[{field:"participants__is_proband",displayName:"Participants is proband",active:!1,type:"Aggregations",allowedValues:[],restricted:!1,buckets:[{key:"0",doc_count:2580,key_as_string:"false"},{key:"1",doc_count:961,key_as_string:"true"}]},{field:"sequencing_experiments__is_paired_end",displayName:"Is Paired Ende",active:!1,type:"Aggregations",allowedValues:[],restricted:!1,buckets:[{key:"0",doc_count:2580,key_as_string:"false"},{key:"1",doc_count:961,key_as_string:"true"}]},{field:"sequencing_experiments__is_paired_end_0",displayName:"Is Paired Ende",active:!1,type:"Aggregations",allowedValues:[],restricted:!1,buckets:[{key:"0",doc_count:0,key_as_string:"false"},{key:"1",doc_count:961,key_as_string:"true"}]},{field:"sequencing_experiments__is_paired_end_1",displayName:"Is Paired Ende",active:!1,type:"Aggregations",allowedValues:[],restricted:!1,buckets:[{key:"0",doc_count:2312,key_as_string:"false"},{key:"1",doc_count:0,key_as_string:"true"}]}],t=[{field:"color",displayName:"Color",active:!1,type:"Aggregations",allowedValues:[],restricted:!1,buckets:[{doc_count:1,key:"green"},{doc_count:5,key:"yellow"},{doc_count:12,key:"blue"}]},{field:"taste",displayName:"Taste",active:!1,type:"Aggregations",allowedValues:[],restricted:!1,buckets:[{doc_count:1,key:"spicy"},{doc_count:5,key:"sweet"},{doc_count:12,key:"sour"},{doc_count:5,key:"salty"},{doc_count:12,key:"umami"},{doc_count:12,key:"bland"}]}];return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"term-agg-wrapper"},u.a.createElement(o.TermAgg,{field:"disease_type",displayName:"Disease Type",buckets:[{doc_count:2,key:"Acute Myeloid Leukemia"},{doc_count:10,key:"Acinar cell neoplasms"}]}),u.a.createElement(o.TermAgg,{field:"disease_type",displayName:"Disease Type",buckets:[{doc_count:2,key:"Acute Myeloid Leukemia"},{doc_count:10,key:"Acinar cell neoplasms"}],headerTitle:"# files"}),u.a.createElement(p.a,{initial:{sqon:null},render:function(e){var a=e.sqon,n=e.update;return u.a.createElement("div",null,u.a.createElement("div",null,"SQON: ",JSON.stringify(a)),u.a.createElement("div",null,t.map((function(e){return u.a.createElement(o.TermAgg,Object.assign({key:e.field},e,{handleValueClick:function(e){var t=e.generateNextSQON;return n({sqon:t(a)})},isActive:function(e){return Object(d.inCurrentSQON)({value:e.value,dotField:e.field,currentSQON:a})}}))}))))}}),u.a.createElement(o.DatesAgg,{field:"disease_type",displayName:"Disease Type",stats:{min:1529539200125,max:1529539259913}}),u.a.createElement(m.default,{initialState:{sqon:null}},(function(e){var t=e.state.sqon,a=e.setState;return u.a.createElement("div",null,u.a.createElement("div",null,"SQON: ",JSON.stringify(t)),u.a.createElement("div",null,u.a.createElement(o.DatesAgg,{field:"disease_type",displayName:"Disease Type",stats:{min:1529539200125,max:1529539259913},handleDateChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.generateNextSQON,r=void 0===n?function(){}:n;return a({sqon:r(t)})},getActiveValue:function(e){var a=e.op,n=e.field;return Object(d.currentFieldValue)({op:a,dotField:n,sqon:t})}})))})),u.a.createElement(o.RangeAgg,{field:"cases__diagnoses__days_to_death",displayName:"Diagnoses Days To Death",stats:{min:15,max:820,count:1e3,avg:70,sum:15e3}}),u.a.createElement(p.a,{initial:{sqon:null},render:function(e){var t=e.sqon,a=e.update;return u.a.createElement("div",{className:"range with sqon"},u.a.createElement("div",null,"SQON: ",JSON.stringify(t)),u.a.createElement(o.RangeAgg,{field:"cases__diagnoses__days_to_death",displayName:"Diagnoses Days To Death",unit:"d",stats:{min:15,max:820,count:1e3,avg:70,sum:15e3},handleChange:function(e){var n=e.generateNextSQON;return a({sqon:n(t)})}}))}}),u.a.createElement(o.BooleanAgg,{field:"cases__diagnoses__days_to_death",displayName:"Diagnoses Days To Death",buckets:[{key:"0",doc_count:2580,key_as_string:"false"},{key:"1",doc_count:961,key_as_string:"true"}]}),u.a.createElement(p.a,{initial:{sqon:null},render:function(t){var a=t.sqon,n=t.update;return u.a.createElement("div",null,u.a.createElement("div",null,"SQON: ",JSON.stringify(a)),u.a.createElement("div",null,e.map((function(e){return u.a.createElement(o.BooleanAgg,Object.assign({key:e.field},e,{handleValueClick:function(e){var t=e.generateNextSQON;return n({sqon:t(a)})},isActive:function(e){return Object(d.inCurrentSQON)({value:e.value,dotField:e.field,currentSQON:a})}}))}))))}}),u.a.createElement(p.a,{initial:{index:"",sqon:{}},render:function(e){var a=e.index,n=e.update;return u.a.createElement("div",null,u.a.createElement("label",null,"index: "),u.a.createElement("input",{value:a,onChange:function(e){return n({index:e.target.value})}}),a&&u.a.createElement("div",null,u.a.createElement(o.AggsPanel,{aggs:t,index:a,debounceTime:200})))}})))}}]),t}(m.default)),y=a(612),f=a(467),v=(a(468),a(51)),E=a(469),k=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=function(e){var t,a,n,r=e.index,i=e.projectId,l=e.update,c=e.projects;return u.a.createElement("div",{css:"\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            height: 100%;\n            justify-content: center;\n          "},u.a.createElement("h2",{css:"\n              margin-top: 0;\n            "},v.PORTAL_NAME),u.a.createElement("select",{value:i,onChange:function(e){Object(v.setValue)("PROJECT_ID",e.target.value),l({projectId:e.target.value})}},u.a.createElement("option",{id:"version"},"Select a version"),c.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.id)}))),u.a.createElement("select",{value:r,onChange:function(e){var t,a;Object(v.setValue)("ACTIVE_INDEX",e.target.value);var n=null===(t=c.find((function(e){return e.id===i})))||void 0===t||null===(a=t.types)||void 0===a?void 0:a.types.find((function(t){return t.index===e.target.value})).name;Object(v.setValue)("ACTIVE_INDEX_NAME",n),l({index:e.target.value,graphqlField:n})}},u.a.createElement("option",{id:"version"},"Select an index"),null===(t=c.find((function(e){return e.id===i})))||void 0===t||null===(a=t.types)||void 0===a||null===(n=a.types)||void 0===n?void 0:n.map((function(e){return u.a.createElement("option",{key:e.index,value:e.index},e.index)}))))},t=function(e){var t=e.style,a=Object(f.a)(e,["style"]);return u.a.createElement("div",{style:Object(y.a)({display:"flex"},t)},u.a.createElement("div",null,u.a.createElement(E.CurrentSQON,a),u.a.createElement(E.Table,a)))};return u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{initial:{index:v.ACTIVE_INDEX,graphqlField:v.ACTIVE_INDEX_NAME,projectId:v.PROJECT_ID},render:function(a){var n=a.index,r=a.graphqlField,i=a.projectId,l=a.update;return n&&i?u.a.createElement(E.Arranger,{disableSocket:!0,index:n,graphqlField:r,projectId:i,render:function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(t,Object(y.a)({},e,{graphqlField:r,projectId:i})))}}):u.a.createElement(E.GetProjects,{render:function(t){return u.a.createElement(e,Object.assign({},t,{index:n,projectId:i,update:l}))}})}}))}}]),t}(s.Component),b=a(126),O=a.n(b),N=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(O.a,{sqon:{op:"and",content:[{op:"is",content:{field:"gender",value:"female"}},{op:"is",content:{field:"cases.exposures.cigarettes_per_day",value:5}}]}}),u.a.createElement(O.a,{sqon:{op:"and",content:[{op:"filter",content:{fields:["gender","state","country"],value:"fema"}}]}}))}}]),t}(s.Component),h=(a(606),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("br",null),u.a.createElement("div",{class:"container-fluid"},u.a.createElement("div",{class:"row"},u.a.createElement("div",{class:"col-2"},u.a.createElement(_,null)),u.a.createElement("div",{class:"col-10"},u.a.createElement("div",{class:"row"},u.a.createElement(N,null)),u.a.createElement("div",{class:"row"},u.a.createElement(k,null))))))}}]),t}(s.Component));t.default=h}}]);
//# sourceMappingURL=5.f6e3ba5f.chunk.js.map