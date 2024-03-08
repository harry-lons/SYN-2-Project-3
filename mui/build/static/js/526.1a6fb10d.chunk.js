"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[526],{46330:function(e,o,a){a.d(o,{Z:function(){return M}});var r=a(45987),t=a(4942),n=a(1413),l=a(47313),i=a(83061),c=a(21921),d=a(17551),s=a(29439),u=a(91615),p=a(17592),m=a(30522),h=a(99008),b=a(67999),v=a(77430),f=a(32298);function Z(e){return(0,f.Z)("PrivateSwitchBase",e)}(0,v.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var k=a(46417),g=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],x=(0,p.ZP)(b.Z)((function(e){var o=e.ownerState;return(0,n.Z)((0,n.Z)({padding:9,borderRadius:"50%"},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12}),"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})})),P=(0,p.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),C=l.forwardRef((function(e,o){var a=e.autoFocus,t=e.checked,l=e.checkedIcon,d=e.className,p=e.defaultChecked,b=e.disabled,v=e.disableFocusRipple,f=void 0!==v&&v,C=e.edge,y=void 0!==C&&C,R=e.icon,w=e.id,F=e.inputProps,S=e.inputRef,z=e.name,B=e.onBlur,I=e.onChange,N=e.onFocus,j=e.readOnly,q=e.required,L=void 0!==q&&q,M=e.tabIndex,_=e.type,O=e.value,E=(0,r.Z)(e,g),H=(0,m.Z)({controlled:t,default:Boolean(p),name:"SwitchBase",state:"checked"}),T=(0,s.Z)(H,2),V=T[0],D=T[1],A=(0,h.Z)(),W=b;A&&"undefined"===typeof W&&(W=A.disabled);var G="checkbox"===_||"radio"===_,J=(0,n.Z)((0,n.Z)({},e),{},{checked:V,disabled:W,disableFocusRipple:f,edge:y}),K=function(e){var o=e.classes,a=e.checked,r=e.disabled,t=e.edge,n={root:["root",a&&"checked",r&&"disabled",t&&"edge".concat((0,u.Z)(t))],input:["input"]};return(0,c.Z)(n,Z,o)}(J);return(0,k.jsxs)(x,(0,n.Z)((0,n.Z)({component:"span",className:(0,i.Z)(K.root,d),centerRipple:!0,focusRipple:!f,disabled:W,tabIndex:null,role:void 0,onFocus:function(e){N&&N(e),A&&A.onFocus&&A.onFocus(e)},onBlur:function(e){B&&B(e),A&&A.onBlur&&A.onBlur(e)},ownerState:J,ref:o},E),{},{children:[(0,k.jsx)(P,(0,n.Z)((0,n.Z)({autoFocus:a,checked:t,defaultChecked:p,className:K.input,disabled:W,id:G?w:void 0,name:z,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var o=e.target.checked;D(o),I&&I(e,o)}},readOnly:j,ref:S,required:L,ownerState:J,tabIndex:M,type:_},"checkbox"===_&&void 0===O?{}:{value:O}),F)),V?l:R]}))})),y=a(81171),R=(0,y.Z)((0,k.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),w=(0,y.Z)((0,k.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),F=(0,y.Z)((0,k.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),S=a(77342);function z(e){return(0,f.Z)("MuiCheckbox",e)}var B=(0,v.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),I=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],N=(0,p.ZP)(C,{shouldForwardProp:function(e){return(0,p.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,o){var a=e.ownerState;return[o.root,a.indeterminate&&o.indeterminate,"default"!==a.color&&o["color".concat((0,u.Z)(a.color))]]}})((function(e){var o,a=e.theme,r=e.ownerState;return(0,n.Z)((0,n.Z)({color:(a.vars||a).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:a.vars?"rgba(".concat("default"===r.color?a.vars.palette.action.activeChannel:a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,d.Fq)("default"===r.color?a.palette.action.active:a.palette[r.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"default"!==r.color&&(o={},(0,t.Z)(o,"&.".concat(B.checked,", &.").concat(B.indeterminate),{color:(a.vars||a).palette[r.color].main}),(0,t.Z)(o,"&.".concat(B.disabled),{color:(a.vars||a).palette.action.disabled}),o))})),j=(0,k.jsx)(w,{}),q=(0,k.jsx)(R,{}),L=(0,k.jsx)(F,{}),M=l.forwardRef((function(e,o){var a,t,d=(0,S.Z)({props:e,name:"MuiCheckbox"}),s=d.checkedIcon,p=void 0===s?j:s,m=d.color,h=void 0===m?"primary":m,b=d.icon,v=void 0===b?q:b,f=d.indeterminate,Z=void 0!==f&&f,g=d.indeterminateIcon,x=void 0===g?L:g,P=d.inputProps,C=d.size,y=void 0===C?"medium":C,R=d.className,w=(0,r.Z)(d,I),F=Z?x:v,B=Z?x:p,M=(0,n.Z)((0,n.Z)({},d),{},{color:h,indeterminate:Z,size:y}),_=function(e){var o=e.classes,a=e.indeterminate,r=e.color,t={root:["root",a&&"indeterminate","color".concat((0,u.Z)(r))]},l=(0,c.Z)(t,z,o);return(0,n.Z)((0,n.Z)({},o),l)}(M);return(0,k.jsx)(N,(0,n.Z)((0,n.Z)({type:"checkbox",inputProps:(0,n.Z)({"data-indeterminate":Z},P),icon:l.cloneElement(F,{fontSize:null!=(a=F.props.fontSize)?a:y}),checkedIcon:l.cloneElement(B,{fontSize:null!=(t=B.props.fontSize)?t:y}),ownerState:M,ref:o,className:(0,i.Z)(_.root,R)},w),{},{classes:_}))}))},83929:function(e,o,a){a.d(o,{Z:function(){return C}});var r=a(45987),t=a(1413),n=a(4942),l=a(47313),i=a(83061),c=a(21921),d=a(99008),s=a(61113),u=a(91615),p=a(17592),m=a(77342),h=a(77430),b=a(32298);function v(e){return(0,b.Z)("MuiFormControlLabel",e)}var f=(0,h.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Z=a(80300),k=a(46417),g=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],x=(0,p.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,o){var a=e.ownerState;return[(0,n.Z)({},"& .".concat(f.label),o.label),o.root,o["labelPlacement".concat((0,u.Z)(a.labelPlacement))]]}})((function(e){var o=e.theme,a=e.ownerState;return(0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,n.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(f.disabled),{cursor:"default"}),"start"===a.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11}),"top"===a.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16}),"bottom"===a.labelPlacement&&{flexDirection:"column",marginLeft:16}),{},(0,n.Z)({},"& .".concat(f.label),(0,n.Z)({},"&.".concat(f.disabled),{color:(o.vars||o).palette.text.disabled})))})),P=(0,p.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:function(e,o){return o.asterisk}})((function(e){var o=e.theme;return(0,n.Z)({},"&.".concat(f.error),{color:(o.vars||o).palette.error.main})})),C=l.forwardRef((function(e,o){var a,n,p=(0,m.Z)({props:e,name:"MuiFormControlLabel"}),h=(p.checked,p.className),b=p.componentsProps,f=void 0===b?{}:b,C=p.control,y=p.disabled,R=p.disableTypography,w=(p.inputRef,p.label),F=p.labelPlacement,S=void 0===F?"end":F,z=(p.name,p.onChange,p.required),B=p.slotProps,I=void 0===B?{}:B,N=(p.value,(0,r.Z)(p,g)),j=(0,d.Z)(),q=null!=(a=null!=y?y:C.props.disabled)?a:null==j?void 0:j.disabled,L=null!=z?z:C.props.required,M={disabled:q,required:L};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof C.props[e]&&"undefined"!==typeof p[e]&&(M[e]=p[e])}));var _=(0,Z.Z)({props:p,muiFormControl:j,states:["error"]}),O=(0,t.Z)((0,t.Z)({},p),{},{disabled:q,labelPlacement:S,required:L,error:_.error}),E=function(e){var o=e.classes,a=e.disabled,r=e.labelPlacement,t=e.error,n=e.required,l={root:["root",a&&"disabled","labelPlacement".concat((0,u.Z)(r)),t&&"error",n&&"required"],label:["label",a&&"disabled"],asterisk:["asterisk",t&&"error"]};return(0,c.Z)(l,v,o)}(O),H=null!=(n=I.typography)?n:f.typography,T=w;return null==T||T.type===s.Z||R||(T=(0,k.jsx)(s.Z,(0,t.Z)((0,t.Z)({component:"span"},H),{},{className:(0,i.Z)(E.label,null==H?void 0:H.className),children:T}))),(0,k.jsxs)(x,(0,t.Z)((0,t.Z)({className:(0,i.Z)(E.root,h),ownerState:O,ref:o},N),{},{children:[l.cloneElement(C,M),T,L&&(0,k.jsxs)(P,{ownerState:O,"aria-hidden":!0,className:E.asterisk,children:["\u2009","*"]})]}))}))}}]);