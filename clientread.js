var token='XXX'
var RtmClient = require('@slack/client').RtmClient;
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;
var CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
var WebClient = require('@slack/client').WebClient;
var bot_token = process.env.SLACK_BOT_TOKEN || token;
var rtm = new RtmClient(bot_token);
var web = new WebClient(bot_token);
var prevmsg="";
var globalmsg="";
let channel;
var channeldict={};
var prevchandict={};
var imdict={};
var previmdict={};
var groupdict={};
var prevgroupdict={};

rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (rtmStartData) => {
  for (const c of rtmStartData.channels) {
    if (c.is_member){
		channeldict[c.id]="nope"
		prevchandict[c.id]="no"
		} 
	};
  for (const d of rtmStartData.ims) {
		imdict[d.id]="nope"
		previmdict[d.id]="no"
		 
  }
  for (const e of rtmStartData.groups) {
		groupdict[e.id]="nope"
		prevgroupdict[e.id]="no"
		 
  }});

rtm.on(RTM_EVENTS.MESSAGE, function handleRtmReactionAdded(message) {
  var str=message.channel;
  if (str.charAt(0)=="C"){
	channeldict[message.channel]=message;
  }
  else if (str.charAt(0)=="D"){
	 imdict[message.channel]=message;
  }
  else if (str.charAt(0)=="G"){
	  groupdict[message.channel]=message;
  }});

rtm.on(RTM_EVENTS.CHANNEL_MARKED, function handleRtmMessage(chan) {
  if (channeldict[chan.channel]!="nope"){
	try{
		web.reactions.add("matthew", {
		channel: chan.channel,
		timestamp: chan.ts
	})}
	catch(err){
		console.log("error");
	}};
	if (prevchandict[chan.channel]!="no"){
		try{
			web.reactions.remove("matthew", {
			channel: chan.channel,
			timestamp: prevchandict[chan.channel].ts
			})}
		catch(err){
			console.log("remove emoji error");
		}
	}
	prevchandict[chan.channel]=channeldict[chan.channel];
});
	
rtm.on(RTM_EVENTS.IM_MARKED, function handleRtmMessage(im) {
  if (imdict[im.channel]!="nope"){
	try{
		web.reactions.add("matthew", {
		channel: im.channel,
		timestamp: im.ts
	})}
	catch(err){
		console.log("error");
	}};
	if (previmdict[im.channel]!="no"){
		var temp=previmdict[im.channel];
		try{
			web.reactions.remove("matthew", {
			channel: im.channel,
			timestamp: temp.ts
			})}
		catch(err){
			console.log("remove emoji error");
		}
	}
	previmdict[im.channel]=imdict[im.channel];
});

rtm.on(RTM_EVENTS.GROUP_MARKED, function handleRtmMessage(grp) {
  if (groupdict[grp.channel]!="nope"){
	try{
		web.reactions.add("matthew", {
		channel: grp.channel,
		timestamp: grp.ts
	})}
	catch(err){
		console.log("error");
	}};
	if (prevgroupdict[grp.channel]!="no"){
		var temp=prevgroupdict[grp.channel];
		try{
			web.reactions.remove("matthew", {
			channel: grp.channel,
			timestamp: temp.ts
			})}
		catch(err){
			console.log("remove emoji error");
		}
	}
	prevgroupdict[grp.channel]=groupdict[grp.channel];
});

rtm.start();