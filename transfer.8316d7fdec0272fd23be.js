(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{2252:function(e,t,a){"use strict";a.r(t),function(e){var n=a(779),o=a(314),s=a(0),r=a.n(s),c=a(344),i=a(37),l=a(3),u=a.n(l),m=a(152),d=a(192),f=a(22),h=a(313),p=a(15),_=a(11),g=a.n(_),b=a(73),v=a(36),y=a(1959),k=a(12),S=a.n(k),A=a(10),E=a(27),C=a(143),w=a(6),N=a.n(w),I=a(31),O=a(2134),F=a.n(O),x=a(573),j=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var B=function(t){function a(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e)),n=a.getInitialState(),s=F.a.parse(e.location.search)||{};s.from&&(n.from_name=s.from,A.ChainStore.getAccount(s.from)),s.to&&(n.to_name=s.to,A.ChainStore.getAccount(s.to)),s.amount&&(n.amount=s.amount),s.asset&&(n.asset_id=s.asset,n.asset=A.ChainStore.getAsset(s.asset)),s.memo&&(n.memo=s.memo);var r=f.a.getState().currentAccount;return n.from_name||(n.from_name=r),t.state=n,t.onTrxIncluded=t.onTrxIncluded.bind(t),t._updateFee=Object(o.a)(t._updateFee.bind(t),250),t._checkFeeStatus=t._checkFeeStatus.bind(t),t._checkBalance=t._checkBalance.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,r.a.Component),j(a,[{key:"componentWillMount",value:function(){this.nestedRef=null,this._updateFee(),this._checkFeeStatus()}},{key:"shouldComponentUpdate",value:function(e,t){var a=this._getAvailableAssets().asset_types,n=this._getAvailableAssets(t).asset_types;if(1===n.length){var o=A.ChainStore.getAsset(n[0]);1!==a.length&&this.onAmountChanged({amount:t.amount,asset:o}),n[0]!==this.state.fee_asset_id&&o&&this.state.fee_asset_id!==n[0]&&this.setState({feeAsset:o,fee_asset_id:n[0]})}return!0}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.currentAccount!==this.state.from_name&&e.currentAccount!==this.props.currentAccount&&this.setState({from_name:e.currentAccount,from_account:A.ChainStore.getAccount(e.currentAccount),feeStatus:{},fee_asset_id:"1.3.0",feeAmount:new I.a({amount:0})},function(){t._updateFee(),t._checkFeeStatus(A.ChainStore.getAccount(e.currentAccount))})}},{key:"_checkBalance",value:function(){var e=this.state,t=e.feeAmount,a=e.amount,n=e.from_account,o=e.asset;if(o&&n){var s=n.getIn(["balances",o.get("id")]),r=n.getIn(["balances",t.asset_id]);if(o&&n){if(!s)return this.setState({balanceError:!0});var c=A.ChainStore.getObject(s),i=r?A.ChainStore.getObject(r):null;if(i&&0!==i.get("balance")||this.setState({fee_asset_id:"1.3.0"},this._updateFee),c&&t){var l=Object(C.a)(a,o,t,c);null!==l&&this.setState({balanceError:!l})}}}}},{key:"_checkFeeStatus",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.from_account;if(t&&t.get("balances")){var a=Object.keys(t.get("balances").toJS()).sort(p.a.sortID),n={},o=[];a.forEach(function(a){o.push(Object(C.b)({accountID:t.get("id"),feeID:a,options:["price_per_kbyte"],data:{type:"memo",content:e.state.memo}}))}),Promise.all(o).then(function(t){a.forEach(function(e,a){n[e]=t[a]}),p.a.are_equal_shallow(e.state.feeStatus,n)||e.setState({feeStatus:n}),e._checkBalance()}).catch(function(e){console.error(e)})}}},{key:"_updateFee",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,a=t.fee_asset_id,n=t.from_account,o=t.asset_id,s=this._getAvailableAssets(t).fee_asset_types;if(1===s.length&&s[0]!==a&&(a=s[0]),!n)return null;Object(C.b)({accountID:n.get("id"),feeID:a,options:["price_per_kbyte"],data:{type:"memo",content:t.memo}}).then(function(t){var a=t.fee,s=t.hasBalance,r=t.hasPoolBalance;return Object(C.d)(n,a).then(function(t){return t?e.setState({fee_asset_id:o},e._updateFee):e.setState({feeAmount:a,fee_asset_id:a.asset_id,hasBalance:s,hasPoolBalance:r,error:!s||!r})})})}},{key:"fromChanged",value:function(e){e||this.setState({from_account:null}),this.setState({from_name:e,error:null,propose:!1,propose_account:""})}},{key:"toChanged",value:function(e){this.setState({to_name:e,error:null})}},{key:"onFromAccountChanged",value:function(e){var t=this;this.setState({from_account:e,error:null},function(){t._updateFee(),t._checkFeeStatus()})}},{key:"onToAccountChanged",value:function(e){this.setState({to_account:e,error:null})}},{key:"onAmountChanged",value:function(e){var t=e.amount,a=e.asset;a&&this.setState({amount:t,asset:a,asset_id:a.get("id"),error:null},this._checkBalance)}},{key:"onFeeChanged",value:function(e){var t=e.asset;this.setState({feeAsset:t,fee_asset_id:t.get("id"),error:null},this._updateFee)}},{key:"onMemoChanged",value:function(e){this.setState({memo:e.target.value},this._updateFee)}},{key:"onTrxIncluded",value:function(e){e.included&&e.broadcasted_transaction?(b.a.unlisten(this.onTrxIncluded),b.a.reset()):e.closed&&(b.a.unlisten(this.onTrxIncluded),b.a.reset())}},{key:"onPropose",value:function(e,t){t.preventDefault(),this.setState({propose:e,propose_account:null})}},{key:"onProposeAccount",value:function(e){this.setState({propose_account:e})}},{key:"resetForm",value:function(){this.setState({memo:"",to_name:"",amount:""})}},{key:"onSubmit",value:function(t){var a=this;t.preventDefault(),this.setState({error:null});var n=this.state,o=n.asset,s=n.amount,r=new I.a({real:s,asset_id:o.get("id"),precision:o.get("precision")});i.a.transfer(this.state.from_account.get("id"),this.state.to_account.get("id"),r.getAmount(),o.get("id"),this.state.memo?new e(this.state.memo,"utf-8"):this.state.memo,this.state.propose?this.state.propose_account:null,this.state.feeAsset?this.state.feeAsset.get("id"):"1.3.0").then(function(){a.resetForm.call(a),b.a.unlisten(a.onTrxIncluded),b.a.listen(a.onTrxIncluded)}).catch(function(e){var t=e.message?e.message.split("\n")[1]||e.message:null;console.log("error: ",e,t),a.setState({error:t})})}},{key:"setNestedRef",value:function(e){this.nestedRef=e}},{key:"_setTotal",value:function(e,t){var a=this.state.feeAmount,n=A.ChainStore.getObject(t),o=A.ChainStore.getObject(e),s=new I.a({amount:n.get("balance"),asset_id:o.get("id"),precision:o.get("precision")});n&&(a.asset_id===s.asset_id&&s.minus(a),this.setState({amount:s.getAmount({real:!0})},this._checkBalance))}},{key:"_getAvailableAssets",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,t=this.state.feeStatus;var a=e.from_account,n=e.from_error,o=[],s=[];if(!a||!a.get("balances")||n)return{asset_types:o,fee_asset_types:s};var r=e.from_account.get("balances").toJS();for(var c in o=Object.keys(r).sort(p.a.sortID),s=Object.keys(r).sort(p.a.sortID),r){var i=A.ChainStore.getObject(r[c]);i&&0===i.get("balance")&&(o.splice(o.indexOf(c),1),-1!==s.indexOf(c)&&s.splice(s.indexOf(c),1))}return{asset_types:o,fee_asset_types:s=s.filter(function(e){return function(e){return void 0===t[e]||t[e]&&t[e].hasPoolBalance}(e)&&function(e){return void 0===t[e]||t[e]&&t[e].hasBalance}(e)})}}},{key:"render",value:function(){var e=this,t=null,a=this.state,o=a.propose,s=a.from_account,i=a.to_account,l=a.asset,p=a.asset_id,_=a.propose_account,b=a.feeAmount,k=a.amount,E=a.error,C=a.to_name,w=a.from_name,I=a.memo,O=a.feeAsset,F=a.fee_asset_id,j=a.balanceError,B=f.a.isMyAccount(s)||w===this.props.passwordAccount;!s||B||o||(t=r.a.createElement("span",null,g.a.translate("account.errors.not_yours")," (",r.a.createElement("a",{onClick:this.onPropose.bind(this,!0)},g.a.translate("propose")),")"));var T=this._getAvailableAssets(),P=T.asset_types,D=T.fee_asset_types,R=null,J=this.state.feeAmount.getAmount({real:!0});if(s&&s.get("balances")&&!t){var M=s.get("balances").toJS();if(1===P.length&&(l=A.ChainStore.getAsset(P[0])),P.length>0){var z=l?l.get("id"):P[0],L=O?O.get("id"):"1.3.0";R=r.a.createElement("span",{style:{borderBottom:"#A09F9F 1px dotted",cursor:"pointer"},onClick:this._setTotal.bind(this,z,M[z],J,L)},r.a.createElement(u.a,{component:"span",content:"transfer.available"}),":"," ",r.a.createElement(c.a,{balance:M[z]}))}else R="No funds"}var V=o&&!_,W=parseFloat(String.prototype.replace.call(k,/,/g,"")),q=W&&!Object(n.a)(W),H=i&&i.get("name")===C,U=!s||!H||!q||!l||t||V||j,G=S.a.Set();G=G.add(s);var K=1;return r.a.createElement("div",{className:"grid-block vertical"},r.a.createElement("div",{className:"grid-block shrink vertical medium-horizontal",style:{paddingTop:"2rem"}},r.a.createElement("div",{className:"grid-content small-12 medium-12 large-10 large-offset-1 full-width-content"},r.a.createElement(x.a,{id:"send_modal_header",refCallback:function(t){t&&(e.send_modal=t)},from_name:this.props.currentAccount}),r.a.createElement(v.a,{string:"transfer.phase_out_warning",keys:[{arg:"modal_link",value:r.a.createElement("a",{onClick:function(){e.send_modal&&e.send_modal.show()}},r.a.createElement(u.a,{content:"header.payments"}))}]}))),r.a.createElement("div",{className:"grid-block shrink vertical medium-horizontal",style:{paddingTop:"1rem"}},r.a.createElement("form",{style:{paddingBottom:20,overflow:"visible"},className:"grid-content small-12 medium-6 large-5 large-offset-1 full-width-content",onSubmit:this.onSubmit.bind(this),noValidate:!0},r.a.createElement(u.a,{content:"transfer.header",component:"h2"}),r.a.createElement("div",{className:"content-block"},r.a.createElement(d.a,{label:"transfer.from",ref:"from",accountName:w,onChange:this.fromChanged.bind(this),onAccountChanged:this.onFromAccountChanged.bind(this),account:s,size:60,error:t,typeahead:!0,tabIndex:K++})),r.a.createElement("div",{className:"content-block"},r.a.createElement(d.a,{label:"transfer.to",ref:"to",accountName:C,onChange:this.toChanged.bind(this),onAccountChanged:this.onToAccountChanged.bind(this),account:i,size:60,tabIndex:K++,typeahead:!0})),r.a.createElement("div",{className:"content-block transfer-input"},r.a.createElement(h.a,{label:"transfer.amount",amount:k,onChange:this.onAmountChanged.bind(this),asset:P.length>0&&l?l.get("id"):p||P[0],assets:P,display_balance:R,tabIndex:K++}),this.state.balanceError?r.a.createElement("p",{className:"has-error no-margin",style:{paddingTop:10}},r.a.createElement(u.a,{content:"transfer.errors.insufficient"})):null),r.a.createElement("div",{className:"content-block transfer-input"},I&&I.length?r.a.createElement("label",{className:"right-label"},I.length):null,r.a.createElement(u.a,{className:"left-label tooltip",component:"label",content:"transfer.memo","data-place":"top","data-tip":g.a.translate("tooltip.memo_tip")}),r.a.createElement("textarea",{style:{marginBottom:0},rows:"3",value:I,tabIndex:K++,onChange:this.onMemoChanged.bind(this)}),this.state.propose?r.a.createElement("div",{className:"error-area",style:{position:"absolute"}},r.a.createElement(u.a,{content:"transfer.warn_name_unable_read_memo",name:this.state.from_name})):null),r.a.createElement("div",{className:"content-block transfer-input fee-row"+(this.state.propose?" proposal":"")},r.a.createElement(h.a,{refCallback:this.setNestedRef.bind(this),label:"transfer.fee",disabled:!0,amount:J,onChange:this.onFeeChanged.bind(this),asset:D.length&&b?b.asset_id:1===D.length?D[0]:F||D[0],assets:D,tabIndex:K++,error:!1===this.state.hasPoolBalance?"transfer.errors.insufficient":null}),o?r.a.createElement("button",{className:N()("button float-right no-margin",{disabled:U}),type:"submit",value:"Submit",tabIndex:K++},r.a.createElement(u.a,{component:"span",content:"propose"})):r.a.createElement("button",{className:N()("button float-right no-margin",{disabled:U}),type:"submit",value:"Submit",tabIndex:K++},r.a.createElement(u.a,{component:"span",content:"transfer.send"}))),o?r.a.createElement("div",{className:"full-width-content form-group transfer-input"},r.a.createElement("label",{className:"left-label"},r.a.createElement(u.a,{content:"account.propose_from"})),r.a.createElement(m.a,{account_names:f.a.getMyAccounts(),onChange:this.onProposeAccount.bind(this),tabIndex:K++})):null,E?r.a.createElement("div",{className:"content-block has-error"},E):null,r.a.createElement("div",null,o?r.a.createElement("span",null,r.a.createElement("button",{className:" button",onClick:this.onPropose.bind(this,!1),tabIndex:K++},r.a.createElement(u.a,{component:"span",content:"cancel"}))):null)),r.a.createElement("div",{className:"grid-content small-12 medium-6 large-4 large-offset-1 right-column"},r.a.createElement("div",{className:"grid-content no-padding"},r.a.createElement(y.a,{accountsList:G,limit:25,compactView:!0,filter:"transfer",fullHeight:!0}))),r.a.createElement("div",{className:"grid-content medium-6 large-4"})))}}],[{key:"getInitialState",value:function(){return{from_name:"",to_name:"",from_account:null,to_account:null,amount:"",asset_id:null,asset:null,memo:"",error:null,propose:!1,propose_account:"",feeAsset:null,fee_asset_id:"1.3.0",feeAmount:new I.a({amount:0}),feeStatus:{}}}}]),a}();t.default=Object(E.a)(B,{listenTo:function(){return[f.a]},getProps:function(){return{currentAccount:f.a.getState().currentAccount,passwordAccount:f.a.getState().passwordAccount,contactsList:f.a.getState().accountContacts}}})}.call(this,a(119).Buffer)}}]);
//# sourceMappingURL=transfer.js.map